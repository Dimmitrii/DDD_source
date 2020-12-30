import React from 'react'
import "./item.css";

export default function Item({value,price,descriptionTop,descriptionBottom}) {
    return (
        <div style={{marginRight:"30px"}}>
            <div 
            style={{width:"270px",
            height:"340px",
            lineHeight:"340px",
            textAlign:"center",
            backgroundColor:"#C4C4C4",
            backgroundImage:`url(${value})`,
            backgroundSize:"cover"}}
            className={"item"}></div>
            <p style={{textAlign:"center",width:"270px",margin:"12px auto 6px auto",color:"#745F4C",fontSize:"14px",letterSpacing:"0.3px",lineHeight:"18px",fontWeight:"600"}}>
                {descriptionTop}<br/>{descriptionBottom}
            </p>
            <hr style={{borderTop:"1px solid #745F4C",height:"0px",width:"200px",margin:"0 auto"}} />
            <h3 style={{textAlign:"center",fontSize:"20px",color:"#4A1010",fontWeight:"700",marginTop:"7px"}}>{price} BYN</h3>
        </div>
    )
}
