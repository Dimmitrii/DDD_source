import React from 'react'

import BasketItem from "./BasketItem";

import sumUp from "./ShopMainPage/utils/sumUp";
import count from "./ShopMainPage/utils/count";

import styles from "./basket.css";

import leftArrow from "./ShopMainPage/img/Vector 1.png";

import { languageContext } from '../App';

export default function Basket({items,removeItem,changeQuantity}) {
    
    const language = React.useContext(languageContext);

    return (
        <div style={{minWidth:"310px"}}>
            {items.length>0 ? 
            <div className="basket-page">
                <h3 style={{fontSize:"20px",fontWeight:"700"}}>{language === "en" ? "Basket" : "Корзина"}</h3>
                <div className="basket-main">
                    <div>
                        {items.map((i)=><BasketItem changeQuantity={changeQuantity} removeItem={removeItem} id={i.id} key={i.id} img={i.img}
                        title={i.clothType || i.accessoriesType || i.shoesType} color={i.color} size={i.size} price={i.price}
                        quantity={i.quantity} descriptionBottom={i.descriptionBottom}/>)}
                    </div>
                    <div className="basket-summary">
                        <div style={{display:"flex"}}>
                            <div style={{fontSize:"18px"}}>
                                <p>{language === "en" ? "Total" : "Итого"}</p>
                                <p>{language === "en" ? "Quantity" : "Товаров"}</p>
                            </div>
                            <div style={{marginLeft:"45px",fontSize:"16px",marginTop:"3px"}}>
                                <p style={{fontWeight:"700"}}>{sumUp(items)} BYN</p>
                                <p style={{textAlign:"center",fontWeight:"700"}}>{count(items)}</p>
                            </div>
                        </div>
                        <button style={{outline:"none",border:"none",backgroundColor:"#29827C",fontWeight:"600",width:"187px",height:"36px"}}>
                            {language === "en" ? "Proceed to checkout" : "Оформить заказ"}
                        </button>
                    </div>
                </div>
            </div> :
            <div className="basket-alert">
                <h3 style={{textAlign:"center"}}>{language === "en" ? "Your basket" : "В Вашу корзину"}</h3>
                <p style={{textAlign:"center"}}>{language === "en" ? "Is empty" : "Не добавлен ни один товар"}</p>
                <div>
                    <img src={leftArrow} width="8px" height="16px" onClick={()=>{window.history.back()}}/>
                    <span onClick={()=>{window.history.back()}}>{language === "en" ? "Go back" : "Вернуться на страницу"}"</span>
                </div>
            </div>}
        </div>
    )
}
