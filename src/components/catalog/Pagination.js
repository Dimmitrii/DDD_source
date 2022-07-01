import React from 'react'

import PaginationItem from "./paginationItem";

import numbersForPagination from "../ShopMainPage/utils/numbersForPagination";
import leftArrow from "../ShopMainPage/img/paginationArrowL.png";
import RightArrow from "../ShopMainPage/img/paginationArrowR.png";

export default function Pagination({itemsPerPage,currentPage,onChangePage,clothLength,onClickArrow}) {
    console.log(clothLength)

    return (
        <div className="catalog-pagination">
            <div style={{display:`${currentPage === 1 ? "none" :""}`,cursor:"pointer"}} onClick={()=>{onClickArrow("left")}}>
                <img src={leftArrow} alt="прошлая страница"></img>
            </div>
            <div style={{display:"flex",marginRight:"10px"}}>
                {numbersForPagination(itemsPerPage,clothLength).map(item=> <PaginationItem page={item} currentPage={currentPage} onChangePage={onChangePage}/>)}
            </div>
            <div onClick={()=>{onClickArrow("right",Math.ceil(clothLength/itemsPerPage))}} style={{cursor:"pointer",display:`${clothLength === 0 ? "none" : ""}`}}>
                <img src={RightArrow} alt="следующая страница"></img>
            </div>
        </div>
    )
}
