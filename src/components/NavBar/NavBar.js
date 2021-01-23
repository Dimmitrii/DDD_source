import React,{ useState } from 'react'
import { NavLink } from "react-router-dom";

import basket from "../ShopMainPage/img/Group.png";
import burger from "../ShopMainPage/img/burger.png";

import Menu from "../ShopMainPage/Menu";

export default function NavBar({isFooter = false}) {
    const links = ["Каталог","Головные уборы","Пальто","Костюмы","Брюки","Обувь","Аксессуары"];
    const [isActive,setIsActive] = useState(false)
    // console.log(isFooter)
    // let isFoot = isFooter === true;
    return (
        <div className="nav-wrapper">
            <div>
            <Menu isActive={isActive} onClose={()=>{setIsActive(!isActive)}}></Menu>
            <nav className="nav">
                <div style={{display:"flex"}}> 
                    {/* <div style={{width:"47px",height:"40px",backgroundColor:"#959494",textAlign:"center",lineHeight:"40px",marginTop:"23px",fontSize:"13px",cursor:"pointer"}}><b>Logo</b></div> */}
                    <div><img onClick={()=>{setIsActive(!isActive)}} className="menu-burger" src={burger} alt="menu"/></div>
                    <div>
                        <h6 style={{margin: "50px 0 0 0",fontSize:"16px",fontWeight:"700",cursor:"pointer",color:`${isFooter ? "#FFFFFF" : ""}`}}><NavLink to="/DDD">MARTEEZ</NavLink></h6>
                        <p style={{whiteSpace:"nowrap",color:`${isFooter ? "#FFFFFF" : "#745F4C"}`}}>Сайт магазина одежды</p>
                    </div>
                </div>
                <ul className="nav-list">
                    {links.map((i)=><li style={{marginRight:"36px",whiteSpace:"nowrap",cursor:"pointer",color:`${isFooter ? "#FFFFFF" : "#745F4C"}`}}><NavLink to={`/DDD/catalog`}>{i}</NavLink></li>)}
                </ul>
                <div style={{display:`${isFooter ? "none":"flex"}`,justifyContent:"flex-end",flexGrow:"1",fontSize:"14px",marginRight:"2px",cursor:"pointer"}}>
                    <div className="menu-basket"><img src={basket} alt="корзина"/></div>
                    <b className="basket-text">Корзина</b>
                    </div>
            </nav>
            </div>
        </div>
    )
}
