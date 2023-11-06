import { LinkType } from "../types";
import Link from "next/link"

export default function Links(props:LinkType){
    return <Link href={props.href} className={props.style} target={props.target}>{props.name}</Link>
}