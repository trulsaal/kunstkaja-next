const AboutInfo = {
  name: "infoaboutpage",
  title: "Informasjon om kunstKaja",
  type: "document",
  fields: [
    { name: "header", title: "Overskrift", type: "string" },
    {
      name: "infotext",
      title: "Tekstinnhold (kunstkaja er ...)",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug (bare trykk Generate)",
      type: "slug",
      options: { source: "name" },
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
