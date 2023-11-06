import { PageType } from "../types";
import React from 'react';

import Menus from "./Menus";
export default function Layout(props:PageType){
    return <div><div className="page">
        <Menus menus={props.Menus||[]}></Menus> 
    </div></div>
}