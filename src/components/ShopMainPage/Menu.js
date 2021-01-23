import React from 'react'

import { NavLink } from "react-router-dom";

import cross from "./img/cross.png";

export default function menu({isActive, onClose}) {
    return (
        <div 
        style={{width:"246px",
        height:"284px",
        position:"fixed",
        backgroundColor:"white",
        marginLeft:`${isActive ? "0px" : "-246px"}`,
        transition:"500ms",
        paddingLeft:"15px",
        marginTop:"30px"}} 
        className="side-menu">
            <div onClick={()=>{onClose()}} style={{marginTop:"11px",marginBottom:"20px"}}><img src={cross} alt="close menu"/></div>
            <ul className="menu-list">
                <li><NavLink to="/DDD/catalog">Каталог</NavLink></li>
                <li>Головные уборы</li>
                <li>Пальто</li>
                <li>Костюмы</li>
                <li>Брюки</li>
                <li>Обувь</li>
                <li>Аксессуары</li>
            </ul>
        </div>
    )
}
