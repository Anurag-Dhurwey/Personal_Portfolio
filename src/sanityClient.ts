import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
//... 

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SanityClient_ProjectID,
  dataset: "production",
  apiVersion: "2023-06-14",
  useCdn: true,
  token:process.env.SANITY_SECRET_TOKEN
});



const builder = imageUrlBuilder(client)

export function urlFor(source:any) {
  return builder.image(source)
}