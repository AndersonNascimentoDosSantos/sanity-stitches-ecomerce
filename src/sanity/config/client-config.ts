import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET || "",
  apiVersion: "2023-03-04",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
};
export default config;

export const client = createClient(config);
const builder = imageUrlBuilder(config);

export const urlFor = (source: SanityImageSource) => builder.image(source);
