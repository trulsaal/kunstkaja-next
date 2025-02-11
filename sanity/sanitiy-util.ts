import { Project } from "@/types/Projects";
import { ImageCard } from "@/types/ImageCards";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "j1glnfyu",
    dataset: "production",
    apiVersion: "2025-10-02",
  });

  return client.fetch(
    groq`*[_type == "project"]{
    _id,
    _createdAt,
    name,
    "slug":slug.current,
    "image": image.asset->url,
    url,
    content
    }`
  );
}

export async function getImageCards(): Promise<ImageCard[]> {
  const client = createClient({
    projectId: "j1glnfyu",
    dataset: "production",
    apiVersion: "2025-10-02",
  });
  return client.fetch(
    groq`*[_type == "imagecard"]{
    _id,
    _createdAt,
    name,
    "slug":slug.current,
    "image": image.asset->url,
    url,
    price,
    text
    }`
  );
}
