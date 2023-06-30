import { SchemaTypeDefinition } from "sanity";

const page: SchemaTypeDefinition = {
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        // isUnique: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  // prepare: (document: any) => {
  //   const { title } = document;
  //   const slug = title.toLowerCase().replace(/\s+/g, "-").slice(0, 200);
  //   return {
  //     ...document,
  //     slug: { current: slug },
  //   };
  // },

  // hooks: {
  //   // Hook triggered before document is created or updated
  //   async beforeSave(doc: any, { context }: any) {
  //     if (!doc.slug) {
  //       // Generate slug from the title field
  //       const slug = doc.title.toLowerCase().replace(/\s+/g, "-").slice(0, 200);
  //       doc.slug = { current: slug }; // Assign the generated slug to the slug field
  //     }
  //     // Return the updated document
  //     return doc;
  //   },
  //   async beforeCreate(doc: any, { context }: any) {
  //     if (!doc.slug) {
  //       // Generate slug from the title field
  //       const slug = doc.title.toLowerCase().replace(/\s+/g, "-").slice(0, 200);
  //       doc.slug = { current: slug }; // Assign the generated slug to the slug field
  //     }
  //     // Return the updated document
  //     return doc;
  //   },
  //   async beforeUpdate({ patch, document }: any, { context }: any) {
  //     if (!patch.slug) {
  //       // Generate slug from the title field
  //       const slug = document.title
  //         .toLowerCase()
  //         .replace(/\s+/g, "-")
  //         .slice(0, 200);
  //       patch.slug = [{ set: slug }]; // Assign the generated slug to the slug field
  //     }
  //     // Return the updated patch
  //     return patch;
  //   },
  // },
};

export default page;
