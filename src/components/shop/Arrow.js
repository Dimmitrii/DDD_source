import React from 'react'
import leftArrow from "./img/Vector 1.png";
import RightArrow from "./img/Vector 2.png";

export default function Arrow({direction,onClick}) { 
    return (
        <div onClick={onClick}>
            <img src={`${direction === "left" ? leftArrow : RightArrow}`} alt={"arrow"} style={{paddingTop:"147px"}}/>
        </div>
    )
}
