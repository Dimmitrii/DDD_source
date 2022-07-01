import React,{ useState, useRef } from 'react'

import Item from "./Item";
import Arrow from "./Arrow";
import TranslatedComponent from '../common/translatedComponent';

import photo1 from "./img/8.jpg";
import photo2 from "./img/5.jpg";
import photo3 from "./img/6.jpg"
import photo4 from "./img/1.jpg"
import photo5 from "./img/4.jpg"
import photo6 from "./img/2.jpg"
import photo7 from "./img/9.jpg"

import leftSlide from "./utils/leftSlide";
import rightSlide from "./utils/rightSlide";

export default function List() {
    const items = [{img:photo1,descriptionTop:"Пальто",descriptionBottom:"серого цвета",price:170,id:1},
    {img:photo2,descriptionTop:"Пиджак с узором",descriptionBottom:"чёрного цвета",price:80,id:2},
    {img:photo3,descriptionTop:"Рубашка",descriptionBottom:"чёрного цвета",price:50,id:3},
    {img:photo4,descriptionTop:"Рубашка в полоску",descriptionBottom:"чёрного цвета",price:50,id:4},
    {img:photo5,descriptionTop:"Брюки в клетку",descriptionBottom:"чёрного цвета",price:70,id:5},
    {img:photo6,descriptionTop:"Пиджак",descriptionBottom:"белого цвета",price:80,id:6},
    {img:photo7,descriptionTop:"Туфли со шнурками",descriptionBottom:"чёрного цвета",price:120,id:9}];
    let fullItems = [...items.slice(items.length-4,items.length),...items,...items.slice(0,4)];
    const list = useRef();
    const listWrapper = useRef()
    let start = 0;
    const [position,setPosition] = useState(-1200)
    return (
        <main>
            <h1 style={{textAlign:"center",fontSize:"28px",fontWeight:"700",width:"1218px",marginBottom:"44px",color:"#745F4C"}}>
                <TranslatedComponent>New</TranslatedComponent> <TranslatedComponent>arrival</TranslatedComponent>
            </h1>
            <div className="list-wrapper" ref={listWrapper}>
                <Arrow direction={"left"} onClick={()=>{leftSlide(position,list,setPosition,fullItems,listWrapper)}}/>
                <div className="visible-list">
                    <div style={{width:`${fullItems.length*300}px`,display:"flex",transition:"1000ms",marginLeft:`${position}px`}} ref={list}
                    onTouchStart={(e)=>{start = e.changedTouches[0].pageX;}}
                    onTouchEnd={(e)=>{
                        if(e.changedTouches[0].pageX - start > 50){leftSlide(position,list,setPosition,fullItems,listWrapper)}
                        else if(e.changedTouches[0].clientX - start < -50){rightSlide(position,list,setPosition,fullItems,listWrapper)}
                    }}> 
                        {fullItems.map((i,index)=><Item key={index} value={i.img} price={i.price} descriptionTop={i.descriptionTop} descriptionBottom={i.descriptionBottom} id={i.id}/>)}
                    </div>
                </div>
                <Arrow direction={"right"} onClick={()=>{rightSlide(position,list,setPosition,fullItems,listWrapper)}}/>
            </div>
        </main>
    )
}
