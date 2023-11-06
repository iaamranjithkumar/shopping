import { Container } from "postcss";

export type Image = {
    src: string;
    alt?: string;
    height?: number;
    width?: number;
}

export type LinkType = {
    href: string;
    name: string;
    target: "_blank" | "_self";
    style?: string;
}

export type MetaData={
    title:string;
    description:string;
    keywords:string;
}

export type Menu = {
    slug: string;
    name: string;
    link: LinkType;
}

export type Hero = ComponentContainer & {
    name:"Hero";
    backgroundImage: Image;
    backgroundColor: string;
    heading: string;
    headingType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    description: string;
    descriptionType: string;
    cta: LinkType;
}

type ImageComponent = ComponentContainer & Image &{
    name:"ImageComponent";
}

export type ComponentContainer={
    paddingTop?:string;
    paddingBottom?:string;
    paddingLeft?:string;
    paddingRight?:string;
    marginTop?:string;
    marginBottom?:string;
    marginLeft?:string;
    marginRight?:string;
}

export type Card={
    name:"Card";
    backgroundColor: string;
    heading: string;
    headingType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    description: string;
    descriptionType: string;
    cta: LinkType;
}
export type BodyComponents = Card | ImageComponent;
export type TwoUpContainer= ComponentContainer & [BodyComponents | BodyComponents];

export type PageType = {
    pageName:string;
    slug:string;
    metaData:MetaData;
    Menus?:Array<Menu>;
    body?:Array<Hero|BodyComponents |TwoUpContainer>;
}

