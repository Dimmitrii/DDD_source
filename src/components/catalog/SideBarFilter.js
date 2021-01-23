import React,{ useState } from 'react'
// import { Route } from 'react-router-dom'
import arrow from "../ShopMainPage/img/miniArrow.png";

export default function SideBarFilter({onChange,onChangeCost,valueFrom,valueTo}) {
    const [isClothVisible,setIsClothVisible] = useState(false);
    const [isAccessoriesVisible,setIsAccessoriesVisible] = useState(false);
    const [isColorVisible,setIsColorVisible] = useState(false);
    const [isPatternVisible,setIsPatternVisible] = useState(false);
    return (
        <aside style={{width:"180px",marginRight:"120px"}}>
            <h4 style={{marginBottom:"79px"}}>Все товары</h4> 
            <div>
                <h4>
                    ОДЕЖДА
                    <img src={arrow} alt="hide menu" onClick={()=>{setIsClothVisible(!isClothVisible)}}
                    style={{transform:`rotate(${isClothVisible ?"180deg" : "0"})`,transition:"200ms"}}/>
                </h4>
                <ul style={{height:`${isClothVisible ? "160px" : "0px"}`}} onChange={(e)=>{onChange(e,"clothType")}}>
                    <li><label>Костюмы<input type="checkbox" value="Костюм"/><span></span></label></li>
                    <li><label>Брюки<input type="checkbox" value="Брюки"/><span></span></label></li>
                    <li><label>Жилетки<input type="checkbox" value="Жилетка"/><span></span></label></li>
                    <li><label>Пальто<input type="checkbox" value="Пальто"/><span></span></label></li>
                    <li><label>Пиджаки<input type="checkbox" value="Пиджак"/><span></span></label></li>
                </ul>
            </div>
            <div>
                <h4>АКСЕССУАРЫ
                    <img src={arrow} alt="hide menu" onClick={()=>{setIsAccessoriesVisible(!isAccessoriesVisible)}}
                    style={{transform:`rotate(${isAccessoriesVisible ?"180deg" : "0"})`,transition:"200ms"}}/>
                </h4>
                <ul style={{height:`${isAccessoriesVisible ? "96px" : "0px"}`}} onChange={(e)=>{onChange(e,"accessoriesType")}}>
                    <li><label>Галстуки<input type="checkbox" value="Галстук"/><span></span></label></li>
                    <li><label>Шарфы<input type="checkbox" value="Шарф"/><span></span></label></li>
                    <li><label>Головные уборы<input type="checkbox" value="Головные убор"/><span></span></label></li>
                </ul>
            </div>
            <div>
                <h4>
                    ЦВЕТ
                    <img src={arrow} alt="hide menu" onClick={()=>{setIsColorVisible(!isColorVisible)}}
                    style={{transform:`rotate(${isColorVisible ?"180deg" : "0"})`,transition:"200ms"}}/>
                </h4>
                <ul style={{height:`${isColorVisible ? "192px" : "0px"}`}} onChange={(e)=>{onChange(e,"color")}}>
                    <li><label>Чёрный<input type="checkbox" value="Чёрный"/><span></span></label></li>
                    <li><label>Коричневый<input type="checkbox" value="Коричнеый"/><span></span></label></li>
                    <li><label>Бордовый<input type="checkbox" value="Бордовый"/><span></span></label></li>
                    <li><label>Серый<input type="checkbox" value="Серый"/><span></span></label></li>
                    <li><label>Белый<input type="checkbox" value="Белый"/><span></span></label></li>
                    <li><label>Синий<input type="checkbox" value="Синий"/><span></span></label></li>
                </ul>
            </div>
            <div>
                <h4>
                    УЗОР
                    <img src={arrow} alt="hide menu" onClick={()=>{setIsPatternVisible(!isPatternVisible)}}
                    style={{transform:`rotate(${isPatternVisible ?"180deg" : "0"})`,transition:"200ms"}}/>
                </h4>
                <ul style={{height:`${isPatternVisible ? "128px" : "0px"}`}} onChange={(e)=>{onChange(e,"pattern")}}>
                    <li><label>Клетка<input type="checkbox" value="Клетка"/><span></span></label></li>
                    <li><label>Полоска<input type="checkbox" value="Полоска"/><span></span></label></li>
                    <li><label>Рисунок<input type="checkbox" value="Рисунок"/><span></span></label></li>
                    <li><label>Без узора<input type="checkbox" value=""/><span></span></label></li>
                </ul>
            </div>
            <div>
                <h4 style={{marginBottom:"20px"}}>ЦЕНА</h4>
                <div style={{display:"flex"}}>
                    <div>
                        <p style={{marginBottom:"8px",fontSize:"14px",fontWeight:"300"}}>От</p>
                        <input style={{width:"83px",height:"28px",border:"1px solid rgba(88, 88, 88, 0.60)",outline:"none"}} title="valueFrom" onChange={(e)=>{onChangeCost(e)}} 
                        value={valueFrom}/>
                    </div>
                    <div>
                        <p style={{marginBottom:"8px",fontSize:"14px",fontWeight:"300"}}>До</p>
                        <input style={{width:"83px",height:"28px",border:"1px solid rgba(88, 88, 88, 0.60)",outline:"none"}} title="valueTo" onChange={(e)=>{onChangeCost(e)}}
                        value={valueTo}/>
                    </div>
                </div>
            </div>
        </aside>
    )
}
