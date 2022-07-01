import React,{useState} from 'react'

import { NavLink } from "react-router-dom";

import Button from "../common/Button"; 
import photo1 from "./img/7.jpg";
import photo2 from "./img/10.jpg";
import photo3 from "./img/11.jpg";
import styles from "./ShopMainPage.css";

import TranslatedComponent from '../common/translatedComponent';

import { languageContext } from '../../App';

const photos = [photo1,photo2,photo3]

export default function Header() {
    const [photo,ChangePhoto] = useState(photos[0]);
    let start = 0;
    const language = React.useContext(languageContext);
    return (
        <header>
            <div className="header-box">
            <div className="header-title">
                <h2 style={{fontWeight:"700",fontSize:"36px",marginBottom:"15px",color:"#745F4C"}}>
                    {language === "ru" ? "Вся одежда" : "All clothes"}<br/> {language === "ru" ? "изготовлена в Италии" : "manufactured in Italy"}
                </h2>
                <p style={{width:"370px",lineHeight:"21px",marginBottom:"20px",color:"#745F4C"}}>
                    {language === "ru" ? "Весь товар подлежит хорошему и достойному качеству! Пополните свой гардероб стильной и модной одеждой."
                    : "All goods are subject to good and decent quality! Fill your wardrobe with stylish and fashionable clothes."}
                </p>
                
                <NavLink to="/DDD/catalog">
                    <button style={{width:"235px",height:"47px",textAlign:"center",lineHeight:"47px",fontSize:"20px",outline:"none",border:"none",backgroundColor:" #29827C",fontWeight:"700"}}>
                        {language === "ru" ? "КАТАЛОГ" :"CATALOG"}
                    </button>
                </NavLink>
                <hr style={{borderTop:"1px solid #745F4C",marginTop:"98px"}}></hr>
            </div>
            <div className="header-title-card">
                <p style={{color:"#745F4C",fontSize:"12px",margin:"0"}}><TranslatedComponent>TOP-3 Suits</TranslatedComponent></p>
                <div style={{width:"370px",height:"370px",backgroundImage:`url(${photo})`,backgroundSize:"cover"}}  
                onTouchStart={(e)=>{start = e.changedTouches[0].pageX}}
                onTouchEnd={(e)=>{
                    if(e.changedTouches[0].pageX - start > 50){if(photos.findIndex(item=> item === photo) > 0){ChangePhoto(photos[photos.findIndex(item=> item === photo)-1])}}
                    else if(e.changedTouches[0].clientX - start < -50){if(photos.findIndex(item=> item === photo) < 2){ChangePhoto(photos[photos.findIndex(item=> item === photo)+1])}}
                }}>
                    <Button ownPhoto={photo1} currentPhoto={photo} onClick={()=>{ChangePhoto(photo1)}} style={{margin:"384px 12px 0 0"}}/>
                    <Button ownPhoto={photo2} currentPhoto={photo} onClick={()=>{ChangePhoto(photo2)}} style={{marginRight:"12px"}}/>
                    <Button ownPhoto={photo3} currentPhoto={photo} onClick={()=>{ChangePhoto(photo3)}}/>
                </div>
            </div>
            </div>
        </header>
    )
}
