import React,{ useState, useEffect } from 'react'
// import { Route } from 'react-router-dom'
import arrow from "../ShopMainPage/img/miniArrow.png";

import TranslatedComponent from '../common/translatedComponent';

export default function SideBarFilter({onChange,onChangeCost,valueFrom,valueTo,match,isAsideActive,handleAsideOff,onIdChange}) {
    const [isClothVisible,setIsClothVisible] = useState(false);
    const [isAccessoriesVisible,setIsAccessoriesVisible] = useState(false);
    const [isColorVisible,setIsColorVisible] = useState(false);
    const [isPatternVisible,setIsPatternVisible] = useState(false);
    const [isShoesVisible,setIsShoesVisible] = useState(false);
    const [checkedBxs,setCheckedBxs] = useState([]);
    // const [isActive,setIsActive] = useState(false);

    useEffect(()=>{
        // let currentChkedBxs = checkedBxs.slice();
        // currentChkedBxs.push(match.params.id);;
        // console.log(currentChkedBxs);
        // setCheckedBxs(currentChkedBxs.filter((i)=> i === match.params.id));
        const id = match.params.id
        if(id === "hats"){
            setCheckedBxs(["Головные убор"]);
            onIdChange(["Головные убор"],"accessoriesType");
        }
        else if(id === "coats"){
            setCheckedBxs(["Пальто"]);
            onIdChange(["Пальто"],"clothType");
        }
        else if(id === "costumes"){
            setCheckedBxs(["Костюм"]);
            onIdChange(["Костюм"],"clothType");
        }
        else if(id === "trousers"){
            setCheckedBxs(["Брюки"]);
            onIdChange(["Брюки"],"clothType");
        }
        else if(id === "shoes"){
            setCheckedBxs(["Туфли"]);
            onIdChange(["Туфли"],"shoesType");
        }
        else if(id === "accessories"){
            setCheckedBxs(["Головные убор","Шарф","Галстук"]);
            onIdChange(["Головные убор","Шарф","Галстук"],"accessoriesType");
        }
        console.log(match)
        setIsClothVisible(false);
        setIsShoesVisible(false);
        setIsAccessoriesVisible(false);
        if(id === "hats" || id === "accessories" || id === "ties"){
            setIsAccessoriesVisible(true);
        }
        else if(id === "coats" || id === "costumes" || id === "trousers" || id === "blazers" || id === "tShirts"){
            setIsClothVisible(true);
        }
        else if(id === "shoes"){
            setIsShoesVisible(true);
        }
    },[match.params.id])
    const onChangeCheckBox = (e)=>{
        console.log(e.target.checked)
        if(e.target.checked === true){
            let currentChkedBxs =  checkedBxs.slice();
            console.log(e.target.value)
            currentChkedBxs.push(e.target.value);
            setCheckedBxs(currentChkedBxs);
        }
        else if(e.target.checked === false){
            console.log("suda",e.target.checked)
            setCheckedBxs(checkedBxs.filter((i)=>i !== e.target.value))
        }
        console.log(checkedBxs)
    }
    return (
        <aside style={{width:"180px",marginRight:"120px",transition:"1000ms",transitionProperty:"right",right:`${isAsideActive ? "0" : "228px"}`}}>
            <div className="filter-cross" onClick={()=>{handleAsideOff()}}><div></div><div></div></div>
            <h4 style={{marginBottom:"79px"}}><TranslatedComponent>All goods</TranslatedComponent></h4> 
            <div>
                <h4>
                    <TranslatedComponent>CLOTH</TranslatedComponent>
                    <img src={arrow} alt="hide menu" onClick={()=>{setIsClothVisible(!isClothVisible)}}
                    style={{transform:`rotate(${isClothVisible ?"180deg" : "0"})`,transition:"200ms"}}/>
                </h4>
                <ul style={{height:`${isClothVisible ? "160px" : "0px"}`}} onChange={(e)=>{onChange(e,"clothType"); onChangeCheckBox(e)}}>
                    <li><label><TranslatedComponent>Suits</TranslatedComponent><input type="checkbox" checked={checkedBxs.includes("Костюм")} value="Костюм"/><span></span></label></li>
                    <li><label><TranslatedComponent>Trousers</TranslatedComponent><input type="checkbox" checked={checkedBxs.includes("Брюки")} value="Брюки"/><span></span></label></li>
                    <li><label><TranslatedComponent>Shirts</TranslatedComponent><input type="checkbox" checked={checkedBxs.includes("Рубашка") } value="Рубашка"/><span></span></label></li>
                    <li><label><TranslatedComponent>Coats</TranslatedComponent><input type="checkbox" checked={checkedBxs.includes("Пальто")} value="Пальто"/><span></span></label></li>
                    <li><label><TranslatedComponent>Blazers</TranslatedComponent><input type="checkbox" checked={checkedBxs.includes("Пиджак")} value="Пиджак"/><span></span></label></li>
                </ul>
            </div>
            <div>
                <h4 style={{textTransform:"uppercase"}}>
                    <TranslatedComponent>FOOTWEAR</TranslatedComponent>
                    <img src={arrow} alt="hide menu" onClick={()=>{setIsShoesVisible(!isShoesVisible)}}
                    style={{transform:`rotate(${isShoesVisible ?"180deg" : "0"})`,transition:"200ms"}}/>
                </h4>
                <ul style={{height:`${isShoesVisible ? "32px" : "0px"}`}} onChange={(e)=>{onChange(e,"shoesType"); onChangeCheckBox(e)}}>
                    <li>
                        <label>
                            <TranslatedComponent>Shoes</TranslatedComponent>
                            <input type="checkbox" checked={checkedBxs.includes("Туфли")} value="Туфли"/>
                            <span></span>
                        </label>
                    </li>
                </ul>
            </div>
            <div>
                <h4 style={{textTransform:"uppercase"}}>
                    <TranslatedComponent>Accessories</TranslatedComponent>
                    <img src={arrow} alt="hide menu" onClick={()=>{setIsAccessoriesVisible(!isAccessoriesVisible)}}
                    style={{transform:`rotate(${isAccessoriesVisible ?"180deg" : "0"})`,transition:"200ms"}}/>
                </h4>
                <ul style={{height:`${isAccessoriesVisible ? "96px" : "0px"}`}} onChange={(e)=>{onChange(e,"accessoriesType"); onChangeCheckBox(e)}}>
                    <li>
                        <label>
                            <TranslatedComponent>Ties</TranslatedComponent>
                            <input type="checkbox" checked={checkedBxs.includes("Галстук")} value="Галстук"/>
                            <span></span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <TranslatedComponent>Scarves</TranslatedComponent>
                            <input type="checkbox" checked={checkedBxs.includes("Шарф")} value="Шарф"/>
                            <span></span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <TranslatedComponent>Hats</TranslatedComponent>
                            <input type="checkbox" checked={checkedBxs.includes("Головные убор")} value="Головные убор"/>
                            <span></span>
                        </label>
                    </li>
                </ul>
            </div>
            <div>
                <h4>
                    <TranslatedComponent>COLOUR</TranslatedComponent>
                    <img src={arrow} alt="hide menu" onClick={()=>{setIsColorVisible(!isColorVisible)}}
                    style={{transform:`rotate(${isColorVisible ?"180deg" : "0"})`,transition:"200ms"}}/>
                </h4>
                <ul style={{height:`${isColorVisible ? "192px" : "0px"}`}} onChange={(e)=>{onChange(e,"color")}}>
                    <li><label><TranslatedComponent>Black</TranslatedComponent><input type="checkbox"  value="Чёрный"/><span></span></label></li>
                    <li><label><TranslatedComponent>Brown</TranslatedComponent><input type="checkbox" value="Коричнеый"/><span></span></label></li>
                    <li><label><TranslatedComponent>Burgundy</TranslatedComponent><input type="checkbox" value="Бордовый"/><span></span></label></li>
                    <li><label><TranslatedComponent>Gray</TranslatedComponent><input type="checkbox" value="Серый"/><span></span></label></li>
                    <li><label><TranslatedComponent>White</TranslatedComponent><input type="checkbox" value="Белый"/><span></span></label></li>
                    <li><label>Blue<input type="checkbox" value="Синий"/><span></span></label></li>
                </ul>
            </div>
            <div>
                <h4>
                    <TranslatedComponent>PATTERN</TranslatedComponent>
                    <img src={arrow} alt="hide menu" onClick={()=>{setIsPatternVisible(!isPatternVisible)}}
                    style={{transform:`rotate(${isPatternVisible ?"180deg" : "0"})`,transition:"200ms"}}/>
                </h4>
                <ul style={{height:`${isPatternVisible ? "128px" : "0px"}`}} onChange={(e)=>{onChange(e,"pattern")}}>
                    <li><label><TranslatedComponent>Checked</TranslatedComponent><input type="checkbox" value="Клетка"/><span></span></label></li>
                    <li><label><TranslatedComponent>Striped</TranslatedComponent><input type="checkbox" value="Полоска"/><span></span></label></li>
                    <li><label><TranslatedComponent>Print</TranslatedComponent><input type="checkbox" value="Рисунок"/><span></span></label></li>
                    <li><label><TranslatedComponent>Without</TranslatedComponent><input type="checkbox" value=""/><span></span></label></li>
                </ul>
            </div>
            <div>
                <h4 style={{marginBottom:"20px"}}><TranslatedComponent>PRICE</TranslatedComponent></h4>
                <div style={{display:"flex"}}>
                    <div>
                        <p style={{marginBottom:"8px",fontSize:"14px",fontWeight:"300"}}><TranslatedComponent>From</TranslatedComponent></p>
                        <input style={{width:"83px",height:"28px",border:"1px solid rgba(88, 88, 88, 0.60)",outline:"none"}} title="valueFrom" onChange={(e)=>{onChangeCost(e)}} 
                        value={valueFrom} pattern="[0-9]" type="text"/>
                    </div>
                    <div>
                        <p style={{marginBottom:"8px",fontSize:"14px",fontWeight:"300"}}><TranslatedComponent>To</TranslatedComponent></p>
                        <input style={{width:"83px",height:"28px",border:"1px solid rgba(88, 88, 88, 0.60)",outline:"none"}} title="valueTo" onChange={(e)=>{onChangeCost(e)}}
                        value={valueTo}/>
                    </div>
                </div>
            </div>
        </aside>
    )
}
