import React from 'react'

import Item from "../ShopMainPage/Item";
import TranslatedComponent from '../common/translatedComponent';
// import { items } from './db';
import Pagination from "./Pagination";

export default function List({clothes,onChangeLow,onChangeHigh,isHighToLow,isLowToHigh,itemsPerPage,currentPage,onChangePage,clothLength,onClickArrow,handleAside}) {
    console.log(isLowToHigh);
    console.log(isHighToLow);
    return (
        <div className="list">
            <div style={{display:"flex",minWidth:"320px"}}>
                <div className="catalog-menu-mobile">
                    <span><TranslatedComponent>All goods</TranslatedComponent></span>
                    <span style={{marginLeft:"79px",cursor:"pointer"}} onClick={()=>{handleAside()}}><TranslatedComponent>Filter</TranslatedComponent></span>
                </div>
                <h4 style={{fontSize:"20px",marginRight:"38px",marginLeft:"100px"}}><TranslatedComponent>Sort by price</TranslatedComponent></h4>
                <div className="high-low-filter">
                    <label style={{marginRight:"30px"}}>
                        <TranslatedComponent>Low to High</TranslatedComponent>
                        <input type="checkbox" onChange={()=>{onChangeLow()}} checked={isLowToHigh}  style={{marginLeft:"15px"}}/>
                        <span style={{marginLeft:"-9px"}}></span>
                    </label>
                    <label >
                        <TranslatedComponent>High to Low</TranslatedComponent>
                        <input type="checkbox" onChange={()=>{onChangeHigh()}} checked={isHighToLow} style={{marginLeft:"15px"}}/>
                        <span style={{transform:"rotate(180deg)",marginLeft:"15px"}}></span>
                    </label>
                </div>
            </div>
            <div className="list-content">
                {clothes.map((i,index)=><Item key={index} value={i.img} price={i.price} descriptionTop={i.descriptionTop} descriptionBottom={i.descriptionBottom} id={i.id}/>)}
            </div>
            <Pagination itemsPerPage={itemsPerPage} onChangePage={onChangePage} currentPage={currentPage} clothLength={clothLength} onClickArrow={onClickArrow}/>
        </div>
    )
}
