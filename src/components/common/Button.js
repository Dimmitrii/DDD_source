import React from 'react'

export default function button({currentPhoto,ownPhoto,onClick,style}) {
    const isActive = currentPhoto === ownPhoto;
    return (
        <button style={{width:"36px",height:"12px",backgroundColor: isActive? "#29827C" : "#C4C4C4",outline:"none",border:"none",...style}} onClick={onClick}></button>
    )
}
