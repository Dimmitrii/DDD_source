import React from 'react'

import photo1 from "./img/3.png";
import photo2 from "./img/12.jpg";

import TranslatedComponent from '../common/translatedComponent';

export default function Special() {
    return (
        <article style={{width:"1242px",margin:"68px auto 0 auto",padding:"0 36px 0 36px"}}>
            <h1 style={{textAlign:"center",fontSize:"28px",fontWeight:"bold",marginBottom:"50px",color:"#745F4C"}}>
                <TranslatedComponent>Special</TranslatedComponent> <TranslatedComponent>offer</TranslatedComponent>
            </h1>
            <div className="special-wrapper">
                <div style={{width:"570px",height:"565px",backgroundImage:`url(${photo1})`,backgroundSize:"cover"}}>
                    <button style={{width:"130px",height:"47px",color:"#FFFFFF",backgroundColor:"#401010",border:"none",margin:"500px 0 0 420px",fontSize:"20px",fontWeight:"700"}}>
                        <TranslatedComponent>Forward</TranslatedComponent> 
                    </button>
                </div>
                <div style={{width:"570px",height:"565px",backgroundImage:`url(${photo2})`,backgroundSize:"cover"}}>
                    <button style={{width:"130px",height:"47px",color:"#FFFFFF",backgroundColor:"#401010",border:"none",margin:"500px 0 0 420px",fontSize:"20px",fontWeight:"700"}}>
                        <TranslatedComponent>Forward</TranslatedComponent>
                    </button>
                </div>
            </div>
        </article>
    )
}
