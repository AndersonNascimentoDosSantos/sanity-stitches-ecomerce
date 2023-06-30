import { SetAndPublishAction } from "@/components/Studio/Action";
import schemas from "@/sanity/schemas";
import { Config, defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config: Config = defineConfig<Config>({
  projectId: "u0l2qcbb",
  dataset: "production",
  title: "Proativa",

  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
  document: {
    actions: (prev: any, context: any) =>
      prev.map((originalAction: any) =>
        originalAction.action === "publish"
          ? SetAndPublishAction
          : originalAction
      ),
  },
});
export default config;
