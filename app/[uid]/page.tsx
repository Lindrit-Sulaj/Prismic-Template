import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { notFound } from "next/navigation";
import { components } from "@/slices";

// export async function generateStaticParams() {
//   const client = createClient();
//   const pages = await client.getAllByType("marketing");

//   return pages.map((page) => {
//     return { uid: page.uid };
//   });
// }

export default async function Page({ params }: { params: any }) {
  // const client = createClient();
  // const page = await client
  //   .getByUID("marketing", params.uid)
  //   .catch(() => notFound());
  // return <SliceZone slices={page.data.slices} components={components} />;
  return <p>Hello there!</p>
}
