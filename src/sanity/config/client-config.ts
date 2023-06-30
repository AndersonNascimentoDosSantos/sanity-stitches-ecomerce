import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const config = {
  projectId: "u0l2qcbb",
  dataset: "production",
  apiVersion: "2023-03-04",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
};
export default config;

export const client = createClient(config);
const builder = imageUrlBuilder(config);

export const urlFor = (source: SanityImageSource) => builder.image(source);
