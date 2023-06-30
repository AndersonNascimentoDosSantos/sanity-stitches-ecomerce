import { useEffect, useState } from "react";
import {
  DocumentActionProps,
  SanityClient,
  useClient,
  useDocumentOperation,
} from "sanity";
import slugify from "slugify";
async function myAsyncSlugifier(input: string, client: SanityClient) {
  const slug = slugify(input);
  // const { getClient } = context;
  // const client = getClient({ apiVersion: "2023-03-04" });

  const query = 'count(*[_type=="page" && slug.current == $slug]{_id})';
  const params = { slug };
  console.log("dentro do slugfy");
  return (
    client.fetch(query, params).then((count: number) => {
      // console.log(count);
      return count > 1 ? `${slug}-${count + 1}` : slug;
    }) || slug
  );
}

export const SetAndPublishAction = (props: DocumentActionProps) => {
  const { patch, publish } = useDocumentOperation(props.id, props.type);
  const client = useClient({ apiVersion: "2023-03-04" });
  const [isPublishing, setIsPublishing] = useState(false);

  useEffect(() => {
    if (isPublishing && !props.draft) {
      setIsPublishing(false);
    }
  }, [isPublishing, props.draft]);

  return {
    ...props,
    disabled: publish.disabled,
    label: isPublishing ? "Publishing…" : "Publish & Update",
    onHandle: async () => {
      setIsPublishing(true);
      const { draft } = props;

      if (draft && draft.title) {
        // const slugs = slugify(draft.title);

        patch.execute([
          {
            set: {
              slug: {
                _type: "slug",
                current: await myAsyncSlugifier(String(draft.title), client),
              },
            },
          },
        ]);
      }

      // patch.execute([{ set: { publishedAt: new Date().toISOString() } }]);
      publish.execute();
      props.onComplete();
    },
  };
};
