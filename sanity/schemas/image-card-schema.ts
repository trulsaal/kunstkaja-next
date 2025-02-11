const imageCard = {
  name: "imagecard",
  title: "Image Cards",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name of work",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    { name: "alt", title: "Alt-text", type: "string" },
    {
      name: "image",
      title: "Image/Artwork",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    },
    { name: "url", title: "URL", type: "url" },
    {
      name: "text",
      title: "Text",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "string",
    },
  ],
};

export default imageCard;
