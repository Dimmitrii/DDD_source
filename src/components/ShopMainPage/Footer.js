import React from 'react'

import TranslatedComponent from '../common/translatedComponent';

export default function Footer() {
    return (
        <footer style={{width:"100%",minWidth:"1242px",marginTop:"179px",height:"275px",backgroundColor:"#4E4C4C",paddingTop:"60px",color:"#D2D2D2"}}>
            <div className="footer-wrapper">
                <div style={{marginRight:"35px"}}>
                    <h4><TranslatedComponent>Information</TranslatedComponent></h4>
                    <ul style={{width:"270px"}}>
                        <li><TranslatedComponent>Delivery and payment</TranslatedComponent></li>
                        <li><TranslatedComponent>Purchase returns</TranslatedComponent></li>
                        <li><TranslatedComponent>Gift certificate</TranslatedComponent></li>
                        <li><TranslatedComponent>Guarantees</TranslatedComponent></li>
                    </ul>
                </div>
                <div>
                    <h4><TranslatedComponent>about</TranslatedComponent> MARTEEZ</h4>
                    <ul style={{width:"168px"}}>
                        <li><TranslatedComponent>About us</TranslatedComponent></li>
                        <li><TranslatedComponent>Why</TranslatedComponent> MARTEEZ</li>
                        <li><TranslatedComponent>Cooperation</TranslatedComponent></li>
                        <li><TranslatedComponent>Contacts</TranslatedComponent></li>
                    </ul>
                </div>
                <div style={{flexGrow:1,display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
                    <div>
                    <h4 style={{marginBottom:"16px"}}><TranslatedComponent>Contact us</TranslatedComponent></h4>
                    <p style={{color:"white",fontWeight:"700",fontSize:"18px"}}>+375(25)634-56-21</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
