import React from 'react'
import rightArrow from "./ShopMainPage/img/Vector 34.png";
import leftArrow from "./ShopMainPage/img/Vector 35.png";
import activerRghtArrow from "./ShopMainPage/img/Vector 30.png";
import activeLeftArrow from "./ShopMainPage/img/Vector 31.png";
import cross from "./ShopMainPage/img/Vector 36.png";
import activeCross from "./ShopMainPage/img/Vector 33.png";

import { languageContext } from '../App';

export default function BasketItem({img,descriptionBottom,title,color,size,quantity,price,removeItem,id,changeQuantity}) {
    
    const language = React.useContext(languageContext);

    return (
        <div className="basket-item">
            <div className="cross mobile-cross" onClick={()=>{removeItem(id)}}>
                    <div className="l-cross"/>
                    <div className="r-cross"/>
            </div>
            <div style={{display:"flex"}}>
                <img width="100px" height="127px" src={img}/>
                <div style={{marginLeft:"10px"}}>
                    <h4>{title} {descriptionBottom}</h4>
                    <div className="basket-hide-quantity">
                        <p style={{fontSize:"15px",color:"#745F4C",fontWeight:"700",margin:"0 15px 0 0"}}>
                            {language === "ru" ? "Кол-во" : "Qty"}
                        </p>
                        <div style={{display:"flex",alignItems:"center"}}>
                            <div className="left-arrow" onClick={()=>{changeQuantity(id,-1)}}></div>
                            <div style={{fontSize:"16px",width:"20px",textAlign:"center"}}>{quantity}</div>
                            <div className="right-arrow" onClick={()=>{changeQuantity(id,+1)}}></div>
                        </div>
                    </div>
                    <p style={{marginBottom:"10px"}}>
                    {language === "ru" ? "Цвет" : "Colour"}
                        <span style={{fontWeight:"500",marginLeft:"15px"}}>{color}</span>
                    </p>
                    <p>{language === "ru" ? "Размер" : "Size"}<span style={{fontWeight:"500",marginLeft:"15px"}}>{size}</span></p>
                </div>
            </div>
            <div className="basket-quantity">
                <p style={{textAlign:"center"}}>{language === "ru" ? "Кол-во" : "Qty"}</p>
                <div style={{display:"flex",alignItems:"center",width:"fit-content",margin:"0 auto"}}>
                    <div className="left-arrow" onClick={()=>{changeQuantity(id,-1)}}></div>
                    <div style={{width:"30px", height: "30px",textAlign:"center"}}>{quantity}</div>
                    <div className="right-arrow" onClick={()=>{changeQuantity(id,1)}}></div>
                </div>
            </div>
            <div style={{marginLeft:"auto",display:"flex",flexDirection:"column"}}> 
                <div className="cross computer-cross" onClick={()=>{removeItem(id)}}>
                    <div className="l-cross"/>
                    <div className="r-cross"/>
                </div>
                <div style={{fontSize:"14px",marginTop:"auto",fontWeight:"500"}}>{price} BYN</div>
            </div>
        </div>
    )
}
