import React from 'react'

// import NabBar from "../NavBar/NavBar";

export default function Footer() {
    return (
        <footer style={{width:"100%",minWidth:"1242px",marginTop:"179px",height:"275px",backgroundColor:"#4E4C4C",paddingTop:"60px",color:"#D2D2D2"}}>
            <div className="footer-wrapper">
                <div style={{marginRight:"35px"}}>
                    <h4>Информация</h4>
                    <ul style={{width:"270px"}}>
                        <li>Доставка и оплата</li>
                        <li>Возврат товара</li>
                        <li>Подарочный сертификат</li>
                        <li>Гарантии</li>
                    </ul>
                </div>
                <div>
                    <h4>О MARTEEZ</h4>
                    <ul style={{width:"168px"}}>
                        <li>О нас</li>
                        <li>Почему MARTEEZ</li>
                        <li>Сотрудничество</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <div style={{flexGrow:1,display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
                    <div>
                    <h4 style={{marginBottom:"16px"}}>Связь с нами</h4>
                    <p style={{color:"white",fontWeight:"700",fontSize:"18px"}}>+375(25)634-56-21</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
