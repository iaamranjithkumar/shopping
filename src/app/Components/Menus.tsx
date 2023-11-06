import { Menu } from "../types";
import Links from "./Links";

type Menus = Array<Menu>;
export default function Menus(props:{menus:Menus}){
    if(props.menus){
        return <div className="menus">
        {props.menus.map(menu=>{
            return <div className="menu" key={menu.name}><Links {...menu.link}></Links></div>
        })}
        </div>
    }

}