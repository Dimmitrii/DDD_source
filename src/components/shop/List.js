import React,{ useState, useRef } from 'react'
import Item from "./Item";
import Arrow from "./Arrow";
import photo1 from "./img/8.jpg";
import photo2 from "./img/5.jpg";
import photo3 from "./img/6.jpg"
import photo4 from "./img/1.jpg"
import photo5 from "./img/4.jpg"
import photo6 from "./img/2.jpg"
import photo7 from "./img/9.jpg"

// import touchSlider from "../../utils/touchSlider"

// let shiftX = 0;
let start = 0;

export default function List() {
    const items = [{img:photo1,descriptionTop:"Классическое пальто",descriptionBottom:"серого цвета",price:170},
    {img:photo2,descriptionTop:"Пиджак с узором",descriptionBottom:"чёрного цвета",price:80},
    {img:photo3,descriptionTop:"Классическая рубашка",descriptionBottom:"чёрного цвета",price:50},
    {img:photo4,descriptionTop:"Рубашка в полоску",descriptionBottom:"чёрного цвета",price:50},
    {img:photo5,descriptionTop:"Брюки в клетку",descriptionBottom:"чёрного цвета",price:70},
    {img:photo6,descriptionTop:"Пиджак",descriptionBottom:"белого цвета",price:80},
    {img:photo7,descriptionTop:"Туфли со шнурками",descriptionBottom:"чёрного цвета",price:120}];
    const [page,setPage] = useState(1);
    let fullItems = [...items.slice(items.length-4,items.length),...items,...items.slice(0,4)];
    // console.log(fullItems);
    const list = useRef();
    const [position,setPosition] = useState(-1200)
    return (
        <div style={{width:"1242px", margin:"71px auto 0 auto"}}>
            <h1 style={{textAlign:"center",fontSize:"28px",fontWeight:"700",width:"1218px",marginBottom:"44px",color:"#745F4C"}}>Новое поступление</h1>
            <div style={{display:"flex"}}>
                <Arrow direction={"left"} onClick={()=>{
                    if(position === -1200){
                        console.log("left");
                        let promise = new Promise((resolve, reject) => {
                            list.current.style.transition = "none";
                            setPosition((-fullItems.length*300)+1200);
                            setTimeout(() => {
                                resolve("done")
                            }, 10);
                        })
                        promise.then(res=>{
                            list.current.style.transition = "1000ms";
                            setPosition((-fullItems.length*300)+2400);
                        })
                        return;
                    }
                    console.log(Math.min(position+1200,-1200))
                    
                    setPosition(Math.min(position+1200,-1200))
                    // console.log(position)
                    // list.current.style.marginLeft = `${position}px`;
                    if(page>1){
                        setPage(page-1);
                    }
                }}/>
                <div style={{width:"1170px",overflow:"hidden",margin:"0 15px 0 15px"}}>
                    <div style={{width:`${fullItems.length*300}px`,display:"flex",transition:"1000ms",marginLeft:`${position}px`}} ref={list}
                    onTouchStart={(e)=>{start = e.changedTouches[0].clientX;}}
                    // onTouchMove={(e)=>{list.current.style.marginLeft = `${position - (start - e.changedTouches[0].clientX)}px`}}
                    onTouchEnd={(e)=>{ if(e.changedTouches[0].clientX - start > 30){setPosition(position+1200)} else if(e.changedTouches[0].clientX - start < -30){setPosition(position - 1200)}}}>
                        {fullItems.map((i,index)=><Item key={index} value={i.img} price={i.price} descriptionTop={i.descriptionTop} descriptionBottom={i.descriptionBottom}/>)}
                    </div>
                </div>
                <Arrow direction={"right"} onClick={()=>{
                    if(position === -300*(fullItems.length-8)){
                        console.log("right")
                        let promise2 = new Promise((resolve, reject) => {
                            list.current.style.transition = "none";
                            setPosition(0);
                            console.log(position)
                            setTimeout(() => {
                                resolve("done")
                            }, 10);
                        })
                        promise2.then(res=>{
                            list.current.style.transition = "1000ms";
                            setPosition(-1200);
                        })
                        return
                    }
                    setPosition(Math.max(position-1200,-300*(fullItems.length-8)))
                    // console.log(position)
                    // list.current.style.marginLeft = `${position}px`;
                    // if(page < items.length/4){
                    //     setPage(page+1)
                    // }
                }}/>
            </div>
        </div>
    )
}
