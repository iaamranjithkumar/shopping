
// type Props = {
//     params: { slug: string }
//     searchParams: { [key: string]: string | string[] | undefined }
//   }
// export async function generateMetadata(
//     { params, searchParams }: Props,
//     parent: ResolvingMetadata
//   ): Promise<Metadata> {
//     // read route params

import { Metadata, ResolvingMetadata } from "next"
import { PageType } from "../types"

   
//     // fetch data
//    const product:Page = await fetcher(`http://localhost:3000/api/${params.slug}`)
   
//     // optionally access and extend (rather than replace) parent metadata
//     const previousImages = (await parent).openGraph?.images || []
   
//     return {
//       title: product.metaData.title,
//       keywords:product.metaData.keywords,
//       description:product.metaData.description,
//       robots:{
//         follow:false
//       },
//       alternates:{
//         canonical:product.slug
//       },
//       openGraph: {
//         images: ['/some-specific-page-image.jpg', ...previousImages],
//       },
//     }
//   }

type Props={
  params:{page:PageType,slug:string}
}
export async function generateMetadata(
  props:any,
  parent: ResolvingMetadata
): Promise<Metadata> {
 console.log(props.page)
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: props.page?.metaData.title||"",
    keywords:props.page?.metaData.keywords||"",
    description:props.page?.metaData.description||"",
    robots:{
      follow:false
    },
    alternates:{
      canonical:props.slug
    },
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}
export default function Layout(props:{params:Props,children:React.ReactNode}) {
    return <div className="layout">{props.children}</div>
}

