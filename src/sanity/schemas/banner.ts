import { SchemaTypeDefinition } from "sanity";

const banner: SchemaTypeDefinition = {
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Imagem",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "buttonText",
      title: "Texto do Botão",
      type: "string",
    },
    {
      name: "product",
      title: "Product Slug",
      type: "string",
    },
    {
      name: "desc",
      title: "Descrição",
      type: "string",
    },
    {
      name: "smallText",
      title: "CTA 01",
      type: "string",
    },
    {
      name: "midText",
      title: "CTA 02",
      type: "string",
    },
    {
      name: "largeText1",
      title: "CTA 03",
      type: "string",
    },
    {
      name: "largeText2",
      title: "CTA 04",
      type: "string",
    },
    {
      name: "discount",
      title: "Desconto",
      type: "string",
    },
    {
      name: "saleTime",
      title: "Periodo de venda",
      type: "string",
    },
  ],
};

export default banner;
