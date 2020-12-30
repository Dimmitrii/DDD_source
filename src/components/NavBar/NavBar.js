import React from 'react'

import basket from "../shop/img/Group.png"

export default function NavBar({isFooter = false}) {
    const links = ["Головные уборы","Пальто","Кастюмы","Брюки","Обувь","Аксессуары"];
    // console.log(isFooter)
    // let isFoot = isFooter === true;
    return (
        <div style={{width:"100%",height:"85px",minWidth:"1242px"}}>
            <div style={{display:"flex",width:"1170px",margin:"0 auto",fontSize:"14px",height:"85px"}}>
                <div style={{display:"flex"}}> 
                    {/* <div style={{width:"47px",height:"40px",backgroundColor:"#959494",textAlign:"center",lineHeight:"40px",marginTop:"23px",fontSize:"13px",cursor:"pointer"}}><b>Logo</b></div> */}
                    <div>
                        <h6 style={{margin: "50px 0 0 0",fontSize:"16px",fontWeight:"700",cursor:"pointer",color:`${isFooter ? "#FFFFFF" : ""}`}}>MARTEEZ</h6>
                        <p style={{whiteSpace:"nowrap",color:`${isFooter ? "#FFFFFF" : "#745F4C"}`}}>Сайт магазина одежды</p>
                    </div>
                </div>
                <ul style={{display:"flex",listStyleType:"none",margin: "61px 0 0 133px",padding:"0"}}>
                    {links.map((i)=><li style={{marginRight:"36px",whiteSpace:"nowrap",cursor:"pointer",color:`${isFooter ? "#FFFFFF" : "#745F4C"}`}}>{i}</li>)}
                </ul>
                <div style={{display:`${isFooter ? "none":"flex"}`,justifyContent:"flex-end",flexGrow:"1",fontSize:"14px",lineHeight:"140px",marginRight:"2px",cursor:"pointer"}}>
                    <img style={{margin:"55px 7px 0 0",height:"26px"}} src={basket} alt="корзина"/><b>Корзина</b>
                    </div>
            </div>
        </div>
    )
}
