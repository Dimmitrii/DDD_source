export default function leftSlide(position,list,setPosition,fullItems,listWrapper){
    console.log(listWrapper.current)
    console.log(listWrapper.current.offsetWidth)
    const widthOfSlide = listWrapper.current.offsetWidth === 1242 ? 1200 : listWrapper.current.offsetWidth === 646 ? 600 : 300;
    console.log(widthOfSlide)
    if(position === -1200){
        console.log("left");
        let promise = new Promise((resolve) => {
            list.current.style.transition = "none";
            setPosition((-fullItems.length*300) + 1200);
            setTimeout(() => {
                resolve("done")
            }, 20);
        })
        promise.then(res=>{
            list.current.style.transition = "1000ms";
            setPosition((-fullItems.length*300)+1200+widthOfSlide);
        })
        return;
    }
    // console.log(Math.min(position+1200,-1200))
    
    setPosition(Math.min(position+widthOfSlide,-1200))
}