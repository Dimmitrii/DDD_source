import React from 'react'

import Item from "../ShopMainPage/Item";
// import { items } from './db';
import Pagination from "./Pagination";

export default function List({clothes,onChangeLow,onChangeHigh,isHighToLow,isLowToHigh,itemsPerPage,currentPage,onChangePage,clothLength,onClickArrow}) {
    console.log(isLowToHigh);
    console.log(isHighToLow);
    return (
        <div className="list">
            <div style={{display:"flex"}}>
                <div className="catalog-menu-mobile"><span style={{fontWeight:"600"}}>Все товары</span><span style={{marginLeft:"149px"}}>Фильтр</span></div>
                <h4 style={{fontSize:"20px",marginRight:"38px"}}>Упорядочить по цене</h4>
                <div className="high-low-filter">
                    <label style={{marginRight:"30px"}}>
                        По возрастанию<input type="checkbox" onChange={()=>{onChangeLow()}} checked={isLowToHigh}  style={{marginLeft:"15px"}}/><span style={{marginLeft:"-9px"}}></span>
                    </label>
                    <label >
                        По убыванию<input type="checkbox" onChange={()=>{onChangeHigh()}} checked={isHighToLow} style={{marginLeft:"15px"}}/><span style={{transform:"rotate(180deg)",marginLeft:"15px"}}></span>
                    </label>
                </div>
            </div>
            <div className="list-content">
                {clothes.map((i,index)=><Item key={index} value={i.img} price={i.price} descriptionTop={i.descriptionTop} descriptionBottom={i.descriptionBottom}/>)}
            </div>
            <Pagination itemsPerPage={itemsPerPage} onChangePage={onChangePage} currentPage={currentPage} clothLength={clothLength} onClickArrow={onClickArrow}/>
        </div>
    )
}
