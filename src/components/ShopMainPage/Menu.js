import React from 'react'

import { NavLink } from "react-router-dom";

import cross from "./img/cross.svg";
import TranslatedComponent from '../common/translatedComponent';

export default function menu({isActive, onClose}) {
    return (
        <div 
        style={{width:"246px",
        height:"310px",
        position:"fixed",
        backgroundColor:"white",
        marginLeft:`${isActive ? "0px" : "-246px"}`,
        transition:"500ms",
        paddingTop:"30px",
        zIndex:"1"}} 
        className="side-menu">
            <ul className="menu-list">
                <li style={{height:"44px",backgroundColor:"#EDEDED",display:"flex",lineHeight:"44px",marginTop:"0",border:"none"}}>
                    <div onClick={()=>{onClose()}} style={{marginRight:"40px"}}><img src={cross} style={{verticalAlign:"sub"}} alt="close menu"/></div>
                    <NavLink to="/DDD/catalog" style={{fontSize:"20px",fontWeight:"700"}}><TranslatedComponent>Catalog</TranslatedComponent></NavLink>
                </li>
                <li style={{marginTop:"20px"}}><NavLink to="/DDD/catalog/hats"><p><TranslatedComponent>Hats</TranslatedComponent></p></NavLink></li>
                <li><NavLink to="/DDD/catalog/coats"><p><TranslatedComponent>Coats</TranslatedComponent></p></NavLink></li>
                <li><NavLink to="/DDD/catalog/costumes"><p><TranslatedComponent>Suits</TranslatedComponent></p></NavLink></li>
                <li><NavLink to="/DDD/catalog/trousers"><p><TranslatedComponent>Trousers</TranslatedComponent></p></NavLink></li>
                <li><NavLink to="/DDD/catalog/shoes"><p><TranslatedComponent>Footwear</TranslatedComponent></p></NavLink></li>
                <li><NavLink to="/DDD/catalog/accessories"><p><TranslatedComponent>Accessories</TranslatedComponent></p></NavLink></li>
            </ul>
        </div>
    )
}
