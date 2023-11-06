import { Menu, PageType } from "../../types";
import { NextResponse } from "next/server";
export async function GET(request:Request,params:any) {
    console.log("Hit")
   const response:PageType = Pages.find(x=>x.slug == `/${params.params.slug}`) || NotFound;
     return NextResponse.json(response);
}
const Menus:Array<Menu>=[{
    name:"Home",
    slug:"/home",
    link:{
        href:"/home",
        name:"Home",
        target:"_self",
    }
},
{
    name:"Article",
    slug:"/article",
    link:{
        href:"/article",
        name:"Article",
        target:"_self",
    }
}]
const NotFound:PageType={
    Menus,
    metaData:{
        title:"Not Found",
        description:"Page not found",
        keywords:"Shop, Page, products"
    },
    pageName:"Not Found",
    slug:"/404"
}

const Pages:Array<PageType> = [{
    pageName:"Shopping Home",
    slug:"/home",
    Menus:Menus,
    metaData:{
        title:"Home Page",
        keywords:"shop,buy, products",
        description:"This is home page for shopping website"
    }
},
{
    pageName:"Shopping Article",
    slug:"/article",
    Menus:Menus,
    metaData:{
        title:"Article Page",
        keywords:"shop,buy, products",
        description:"This is article page for shopping website"
    }
}]