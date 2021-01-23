import React from 'react'

export default function paginationItem({page,currentPage,onChangePage}) {
    console.log(currentPage);
    console.log(page)
    // console.log(onChangePage)
    return (
        <div style={{marginLeft:"10px",
        fontSize:"16px",
        width:"20px",
        height:"20px",
        lineHeight:"20px",
        textAlign:"center",border:`1px solid #${page === currentPage ?"29827C" : "585858"}`,
        cursor:"pointer",
        color:`#${page === currentPage ?"29827C" : "585858"}`}}
        onClick={()=>{onChangePage(page)}}>
            {page}
        </div>
    )
}
