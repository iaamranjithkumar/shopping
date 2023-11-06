
// import { fetcher } from "../libs/fetcher";
// import Layout from "./layout";
// import { Page } from "../types";
// // type Props = {
// //     params: { slug: string }
// //     searchParams: { [key: string]: string | string[] | undefined }
// //   }
// // export async function generateMetadata(
// //     { params, searchParams }: Props,
// //     parent: ResolvingMetadata
// //   ): Promise<Metadata> {
// //     // read route params
   
// //     // fetch data
// //    const product:Page = await fetcher(`http://localhost:3000/api/${params.slug}`)
   
// //     // optionally access and extend (rather than replace) parent metadata
// //     const previousImages = (await parent).openGraph?.images || []
   
// //     return {
// //       title: product.metaData.title,
// //       keywords:product.metaData.keywords,
// //       description:product.metaData.description,
// //       robots:{
// //         follow:false
// //       },
// //       alternates:{
// //         canonical:product.slug
// //       },
// //       openGraph: {
// //         images: ['/some-specific-page-image.jpg', ...previousImages],
// //       },
// //     }
// //   }
// export default async function Page(params:{params:{slug:string}}){
//   const page: Page =await fetcher(`http://localhost:3000/api/${params.params.slug}`);
   
//     return <div><Layout {...page}></Layout></div>
// }


import { PageType } from "../types";
import React from 'react';

import Menus from "../Components/Menus";
import { Metadata, ResolvingMetadata } from "next";
import { fetcher } from "../libs/fetcher";

export default async function Page(props:any){
  const page: PageType =await fetcher(`http://localhost:3000/api/${props.params.slug}`);
  props.params.page=page;
    return <div><div className="page">
        <Menus menus={page.Menus||[]}></Menus> 
    </div></div>
}