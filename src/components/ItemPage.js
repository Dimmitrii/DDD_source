import React,{useEffect, useState} from 'react';
import { NavLink } from "react-router-dom";

import {items} from "./catalog/db";

import styles from "./ItemPage.css";

import leftArrow from "./ShopMainPage/img/Vector 3.svg";
import RightArrow from "./ShopMainPage/img/Vector 2.svg";
import miniArrow from "./ShopMainPage/img/Vector 15.png";

import { languageContext } from '../App';

export default function ItemPage({match,addItem,goods}) {
    const id = match.params.id;
    console.log(goods);
    const item = items.filter((item,i)=> i === +id-1)[0];
    // let isItem = goods.filter((item,i)=> item.id === +id-1).length > 0;
    // console.log(isItem);
    // window.scrollTo(0,0);

    const [isActive,setIsActive] = useState(false);
    const [size,setSize] = useState("");
    const [isSizeActive,setIsSizeActive] = useState(false);
    const [page,setPage] = useState(0);
    const [widthOfSlide,setWidthOfSlide] = useState(430);
    const [isItemAdded,setIsItemAdded] = useState(false); 
    
    let start = 0;

    const language = React.useContext(languageContext);
    
    useEffect(()=>{
        window.scrollTo(0,0);
        const mediaQuery = window.matchMedia('(max-width: 1242px)');
        const mediaQuery2 = window.matchMedia('(max-width: 768px)');
        if(mediaQuery.matches){
            setWidthOfSlide(346);
        }
        if(mediaQuery2.matches){
            console.log("matchhhhhhhhhhhhh")
            setWidthOfSlide(218)
        }
        mediaQuery.addEventListener("change",(e)=>{
            if(e.matches){
                setWidthOfSlide(346);
            }
            else if(!e.matches){
                setWidthOfSlide(430)
            }
        })
        mediaQuery2.addEventListener("change",(e)=>{
            if(e.matches){
                setWidthOfSlide(218)
            }
            else if(!e.matches){
                setWidthOfSlide(346)
            }
        })
    },[])
    useEffect(()=>{
        const isItem = goods.filter((item,i)=> item.id === +id).length > 0;
        setIsItemAdded(isItem);
    },[goods.length])
    return (
        <div>
            <div className="item-page-navigation"> 
                <NavLink to="/DDD/" style={{color:"#745F4C"}}>{language === "ru" ? "Главная" : "Home"}</NavLink><img src={miniArrow} alt="dependies" style={{margin:"0 8px 0 9px"}}/> 
                <NavLink to="/DDD/catalog/" style={{color:"#745F4C"}}>{language === "ru" ? "Каталог" : "Catalog"}</NavLink><img src={miniArrow} alt="dependies" style={{margin:"0 8px 0 9px"}}/> 
                <NavLink to={`/DDD/catalog/${item.path}`} style={{color:"#745F4C"}}>{item.catalog}</NavLink><img src={miniArrow} alt="dependies" style={{margin:"0 8px 0 9px"}}/> 
                {item.descriptionTop}
            </div> 
            <div className="item-page-title-hidden">
                <h2 style={{fontSize:"26px",fontWeight:"700"}}>{item.clothType} {item.descriptionBottom}</h2>
                <p style={{fontSize:"23px",fontWeight:"450"}}>{item.price} BYN</p>
            </div>
            <div className="item-page">
                <div className="item-page-gallery">
                    <div className="item-page-main">
                        <div style={{width:"21px",height:"42px"}} onClick={()=>{if(page > 0){setPage(page-1)}}}>
                            <img src={leftArrow}/>
                        </div>
                        <div className="item-page-visible-gallery"  onTouchStart={(e)=>{start = e.changedTouches[0].pageX;}}
                        onTouchEnd={(e)=>{
                            if(e.changedTouches[0].pageX - start > 50){if(page > 0){setPage(page-1)}}
                            else if(e.changedTouches[0].clientX - start < -50){if(page < 2){setPage(page+1)}}
                        }}>
                            <div className="item-page-full-gallery" style={{marginLeft:`${page*-widthOfSlide}px`}}>
                                <div style={{marginRight:"30px"}}><img src={item.img} alt="cloth" style={{width:"400px",height:"508px"}}/></div>
                                <div style={{width:"400px",height:"508px",lineHeight:"508px",fontSize:"25px",fontWeight:"700",textAlign:"center",backgroundColor:"#8B8B8B",marginRight:"30px"}}>Demo</div>
                                <div style={{width:"400px",height:"508px",lineHeight:"508px",fontSize:"25px",fontWeight:"700",textAlign:"center",backgroundColor:"#8B8B8B"}}>Demo</div>
                            </div>
                        </div>
                        <div style={{width:"21px",height:"42px"}} onClick={()=>{if(page < 2){setPage(page+1)}}}>
                            <img src={RightArrow}/>
                        </div>
                    </div>
                    <div style={{width:"25px",margin:"0 auto",fontSize:"20px",marginTop:"8px"}}>{page+1}/3</div>
                </div>
                <div className="item-page-description">
                    <div className="item-page-options">
                        <div className="item-page-title">
                            <h2 style={{fontSize:"26px",fontWeight:"700"}}>{item.clothType || item.accessoriesType || item.shoesType} {item.descriptionBottom}</h2>
                            <p style={{fontSize:"23px",fontWeight:"450"}}>{item.price} BYN</p>
                        </div>
                        <div>
                            {isItemAdded?
                            <button style={{border:"1px solid #000000",width:"264px",height:"50px",backgroundColor:"#fff",fontWeight:"500",fontSize:"18px"}}>
                                {language === "ru" ? "Добавлено" : "Added"}
                            </button>
                            : 
                            <button style={{border:"1px solid #000000",width:"264px",height:"50px",backgroundColor:"#fff",fontWeight:"500",fontSize:"18px"}} onClick={()=>{addItem(item,size)}}>
                                {language === "ru" ? "Добавить в корзину" : "Add to basket"}
                            </button>
                            }   
                        </div>
                        <div style={{marginBottom:"40px",height:"65px"}}>
                            <button style={{border:"1px solid #000000",width:"264px",height:"50px",margin:"15px 0 0 0",backgroundColor:"#fff",fontWeight:"500",fontSize:"18px",borderBottom:`1px solid ${isActive? "#565656" : "black"}`}} onClick={()=>{setIsActive(!isActive)}}>
                                {`${isActive? `${language === "ru" ? "Выбрать размер" : "Choose size"}` :
                                size === "" ? `${language === "ru" ? "Выбрать размер" : "Choose size"}` :
                                `${language === "ru" ? "Размер" : "Size"} ${size}`}`}
                            </button>
                            <div className="item-page-size-menu" style={{height:`${isActive ? "220px" : "0px"}`,borderBottomWidth:`${isActive ? "1px" :"0px"}`,borderBottomStyle:"solid",borderBottomColor:`${isSizeActive ? "#29827C" :"black"}`}}>
                                <div style={{width:"110px"}} onClick={()=>{setSize("S"); setIsActive(false)}}>S</div>
                                <div style={{width:"140px"}} onClick={()=>{setSize("M");setIsActive(false)}}>M</div>
                                <div style={{width:"170px"}} onClick={()=>{setSize("L");setIsActive(false)}}>L</div>
                                <div style={{width:"200px"}} onClick={()=>{setSize("XL");setIsActive(false)}}>XL</div>
                                <div style={{width:"264px"}} onMouseOver={()=>{setIsSizeActive(true)}} onMouseOut={()=>{setIsSizeActive(false)}} onClick={()=>{setSize("XXL");setIsActive(false)}}>XXL</div>
                            </div>
                        </div>
                    </div>
                    <div className="item-page-about">
                        <h4 style={{fontSize:"22px",fontWeight:"700",borderBottom:"1px solid black",width:"fit-content",height:"31px"}}>
                            {language === "ru" ? "О товаре" : "About"}
                        </h4>
                        <ul style={{listStyle:"none",padding:"0",fontSize:"20px",fontWeight:"400"}}>
                            <li>
                                {language === "ru" ? "Состав" : "Consists of"}
                                <span style={{marginLeft:"15px",fontWeight:"400",fontSize:"17px"}}>
                                    {language === "ru" ? "Полиэстер - 65%, Хлопок - 35%" : "Polyester - 65%, Cotton - 35%"}
                                </span>
                            </li>
                            <li>{language === "ru" ? "Узор" : "Pattern"}<span style={{marginLeft:"15px",fontWeight:"400",fontSize:"17px"}}>{item.pattern === "" ? "нет" : item.pattern}</span></li>
                            <li>
                                {language === "ru" ? "Страна производства" : "Made in"}
                                <span style={{marginLeft:"15px",fontWeight:"400",fontSize:"17px"}}>
                                    {language === "ru" ? "Италия" : "Italy"}
                                </span>
                            </li>
                            <li>
                                {language === "ru" ? "Застёжка" : "Сlosure"}
                                <span style={{marginLeft:"15px",fontWeight:"400",fontSize:"17px"}}>
                                    {language === "ru" ? "Пуговицы" : "Buttons"}
                                </span>
                            </li>
                            <li>{language === "ru" ? "Цвет" : "Colour"}<span style={{marginLeft:"15px",fontWeight:"400",fontSize:"17px"}}>{item.color}</span></li>
                            <li>
                                {language === "ru" ? "Сезон" : "Season"}
                                <span style={{marginLeft:"15px",fontWeight:"400",fontSize:"17px"}}>
                                    {language === "ru" ? "Мульти" : "Any"}
                                </span>
                            </li>
                            <li>{language === "ru" ? "Размеры" : "Sizes"} <span style={{marginLeft:"15px",fontWeight:"400",fontSize:"17px"}}>M S L XL </span></li>
                            <li>
                                {language === "ru" ? "Рукав" : "Sleeve"}
                                <span style={{marginLeft:"15px",fontWeight:"400",fontSize:"17px"}}>
                                    {language === "ru" ? "Длинный" : "Long"}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
