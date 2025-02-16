const AboutInfo = {
  name: "infoaboutpage",
  title: "Informasjon om kunstKaja",
  type: "document",
  fields: [
    { name: "header", title: "Overskrift", type: "string" },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "header" },
    },
    {
      name: "image",
      title: "Profilbilde",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    },
  ],
};

export default AboutInfo;
