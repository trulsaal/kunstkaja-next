import { PortableTextBlock } from "next-sanity";

export type AboutInfo = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  content: PortableTextBlock[];
  alt: string;
};
