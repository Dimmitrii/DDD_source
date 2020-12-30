import React from 'react'

import NabBar from "../NavBar/NavBar";

export default function Footer() {
    return (
        <div style={{width:"100%",minWidth:"1242px",marginTop:"179px",height:"203px",backgroundColor:"#8B8989",paddingTop:"33px"}}>
            <NabBar isFooter={true}/>
        </div>
    )
}
