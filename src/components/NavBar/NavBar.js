import React,{ useState } from 'react'
import { NavLink } from "react-router-dom";

import basket from "../ShopMainPage/img/Group.svg";
import burger from "../ShopMainPage/img/burger.png";
import languageIcon from "./globe.png"

import count from "../ShopMainPage/utils/count";

import Menu from "../ShopMainPage/Menu";
import TranslatedComponent from '../common/translatedComponent';

import { languageContext } from '../../App';

export default function NavBar({isFooter = false,match,items,changeLanguage}) {
    const links = [{name:"Catalog",id:"catalog"},{name:"Hats",id:"hats"},{name:"Coats",id:"coats"},{name:"Suits",id:"costumes"},
    {name:"Trousers",id:"trousers"},{name:"Footwear",id:"shoes"},{name:"Accessories",id:"accessories"}];
    const [isActive,setIsActive] = useState(false);
    const [isCatalog,setIsCatlog] = useState(false);
    const [isLanguage,setIsLanguage] = useState(false);

    const value = React.useContext(languageContext);

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
                        <h6 style={{margin: "50px 0 0 0",fontSize:"16px",fontWeight:"700",cursor:"pointer",color:`${isFooter ? "#FFFFFF" : ""}`}}>
                            <NavLink to="/DDD">MARTEEZ</NavLink>
                        </h6>
                        <p style={{color:`${isFooter ? "#FFFFFF" : "#745F4C"}`}}>{value === "en" ? "Clothing web store" : "Сайт магазина одежды"}</p>
                    </div>
                </div>
                <ul className="nav-list">
                    {links.map((i)=><li style={{marginRight:"36px",whiteSpace:"nowrap",cursor:"pointer",color:`${isFooter ? "#FFFFFF" : "#745F4C"}`}}>
                        <NavLink to={`/DDD/catalog/${i.id}`}><TranslatedComponent>{i.name}</TranslatedComponent></NavLink>
                    </li>)}
                </ul>
                <div style={{display:`${isFooter ? "none":"flex"}`,justifyContent:"flex-end",flexGrow:"1",fontSize:"14px",marginRight:"2px",cursor:"pointer"}}>
                    <NavLink to="/DDD/basket" style={{display:"block"}}>
                        <div className="menu-basket">
                            <img src={basket} alt="корзина"/>
                            <span style={{fontSize:"14px",color:"4A1010",fontWeight:"700",position:"relative",top:"-19px",width:"26px",display:"block",textAlign:"center"}}>
                                {count(items)}
                            </span>
                        </div>
                    </NavLink>
                    <b className="basket-text"><NavLink to="/DDD/basket"><TranslatedComponent>Basket</TranslatedComponent></NavLink></b>
                    <div className="language-globe">
                        <img src={languageIcon} onClick={()=>{setIsLanguage(true)}}/>
                        <div style={{
                            visibility: `${isLanguage ? "" : "hidden"}`,width:"min-content",opacity:`${isLanguage ? "1" : "0"}`,display:"flex",
                            position: "relative",flexDirection:"column",fontFamily:"Roboto, Helvetica, Arial, sans-serif",transition:"0.5s",
                            bottom:"35px",right:"100px",zIndex:"3", backgroundColor:"#fff",borderRadius:"5px",padding:"8px 0 8px 0",
                            boxShadow:"0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)"
                        }}>
                            <div style={{padding:"8px 16px 8px 16px", backgroundColor:`${value === "ru" ? "rgba(0, 0, 0, 0.08)" : ""}`}}
                            onClick = {()=>{
                                changeLanguage("ru");
                                setIsLanguage(false);
                            }}>
                                {value === "en" ? "Russian" : "Русский"}
                            </div>
                            <div style={{padding:"8px 16px 8px 16px", backgroundColor:`${value === "en" ? "rgba(0, 0, 0, 0.08)" : ""}`}}
                            onClick = {()=>{
                                changeLanguage("en");
                                setIsLanguage(false);
                            }}>
                                {value === "en" ? "English" : "Английский"}
                            </div>
                        </div>
                        {isLanguage ? (<div style={{position:"fixed",right:"0px",top:"0px",width:"100%",height:"100%",zIndex:"2"}} onClick={()=>{setIsLanguage(false)}}></div>) : null}
                    </div>
                </div>
            </nav>
            </div>
        </div>
    )
}
