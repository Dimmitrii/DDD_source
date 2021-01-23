import React from 'react'

import {items} from "./catalog/db";

export default function ItemPage({match}) {
    const id = match.params.id;
    // console.log(id)
    const item = items.filter((item,i)=> i === +id)[0] 
    // console.log(item)
    return (
        <div style={{display:"flex",margin:"50px auto 0 auto",width:"1170px"}}>
            <div style={{width:"771px",height:"578px",backgroundColor:"#F0F0F0",textAlign:"center",marginRight:"30px"}}>
                <img src={item.img} style={{width:"400px",height:"508px",marginTop:"10px"}} />
            </div>
            <div>
                <h2 style={{fontSize:"26px",fontWeight:"700"}}>{item.clothType} MARTEEZ</h2>
                <p style={{fontSize:"23px",fontWeight:"450"}}>{item.price} BYN</p>
            </div>
        </div>
    )
}
