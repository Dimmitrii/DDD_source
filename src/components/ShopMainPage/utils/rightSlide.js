export default function rightSlide(position,list,setPosition,fullItems,listWrapper){
    const widthOfSlide = listWrapper.current.offsetWidth === 1242 ? 1200 : listWrapper.current.offsetWidth === 646 ? 600 : 300;
    if(position === -300*(fullItems.length-8) - (1200 - widthOfSlide)){
        console.log("right")
        let promise2 = new Promise((resolve) => {
            list.current.style.transition = "none";
            setPosition(0 - (1200 - widthOfSlide));
            console.log(position)
            setTimeout(() => {
                resolve("done")
            }, 20);
        })
        promise2.then(res=>{
            list.current.style.transition = "1000ms";
            setPosition(-1200);
        })
        return
    }
    setPosition(Math.max(position-widthOfSlide,-300*(fullItems.length-8) - (1200 - widthOfSlide) ))
}