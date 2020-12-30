import React,{useState} from 'react'
import Button from "../common/Button"; 
import photo1 from "./img/7.jpg";
import photo2 from "./img/10.jpg";
import photo3 from "./img/11.jpg";

export default function Header() {
    const [photo,ChangePhoto] = useState(photo1);
    return (
        <div style={{display:"flex",margin:"0 auto",width:"1242px",padding:"0 36px 0 36px",height:"468px"}}>
            <div style={{width:"570px",paddingTop:"134px"}}>
                <h2 style={{fontWeight:"700",fontSize:"36px",marginBottom:"15px",color:"#745F4C"}}>Вся одежда<br/> изготовлена в Италии</h2>
                <p style={{width:"370px",lineHeight:"21px",marginBottom:"20px",color:"#745F4C"}}>Весь товар подлежит хорошему и достойному качесву! Пополните свой гардероб стильной и модной одеждай.</p>
                <button style={{width:"235px",height:"47px",textAlign:"center",lineHeight:"47px",fontSize:"20px",outline:"none",border:"none",backgroundColor:" #29827C",fontWeight:"700"}}>КАТАЛОГ</button>
                <hr style={{border:"1px solid #745F4C",marginTop:"98px"}}></hr>
            </div>
            <div style={{display:"flex",flexGrow:"1",margin:"49px 0 0 130px",flexDirection:"column"}}>
                <p style={{color:"#745F4C",fontSize:"12px",margin:"0"}}>ТОП-3 Костюма</p>
                <div style={{width:"370px",height:"370px",backgroundImage:`url(${photo})`,backgroundSize:"cover"}}>
                    <Button ownPhoto={photo1} currentPhoto={photo} onClick={()=>{ChangePhoto(photo1)}} style={{margin:"384px 12px 0 0"}}/>
                    <Button ownPhoto={photo2} currentPhoto={photo} onClick={()=>{ChangePhoto(photo2)}} style={{marginRight:"12px"}}/>
                    <Button ownPhoto={photo3} currentPhoto={photo} onClick={()=>{ChangePhoto(photo3)}}/>
                </div>
            </div>
        </div>
    )
}
