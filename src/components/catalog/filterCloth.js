const filterCloth = (clothes,clothType,accessoriesType,color,pattern,valueFrom,valueTo,isLowToHigh,isHighToLow)=>{
    let cloth = clothes.slice();
    let filteredByClothType = [];
    let filteredByAccessoriesType = [];
    let changedClothes = [];
    console.log(clothes,"FFFFFFFF")
    console.log(isLowToHigh);
    console.log(isHighToLow,"аыфафыа")

    if(clothType.length > 0){
        filteredByClothType = cloth.filter(item=>clothType.includes(item.clothType))
    }
    if(accessoriesType.length > 0){
        filteredByAccessoriesType = cloth.filter(item=>accessoriesType.includes(item.accessoriesType))
    }
    changedClothes = [...filteredByClothType,...filteredByAccessoriesType];
    if(color.length > 0){
        if(changedClothes.length > 0){
            changedClothes = changedClothes.filter(item=>color.includes(item.color));
        }
        else{
            cloth = cloth.filter(item=>color.includes(item.color));
        }
    }
    if(pattern.length > 0){
        if(changedClothes.length > 0){
            changedClothes = changedClothes.filter(item=>pattern.includes(item.pattern));
        }
        else{
            cloth = cloth.filter(item=>pattern.includes(item.pattern));
        }
    }
    if(!!valueFrom === true){
        if(changedClothes.length > 0){
            changedClothes = changedClothes.filter(item=> item.price > +valueFrom)
        }
        else{
            cloth = cloth.filter(item=> item.price > +valueFrom)
        }
    }
    if(!!valueTo === true){
        if(changedClothes.length > 0){
            changedClothes = changedClothes.filter(item=> item.price < +valueTo)
        }
        else{
            cloth = cloth.filter(item=> item.price < +valueTo)
        }
    }
    if(isHighToLow === true){
        if(changedClothes.length > 0){
            changedClothes = changedClothes.sort(function(a, b) { return b.price - a.price; });
        }
        else{
            cloth = cloth.sort(function(a, b) { return b.price - a.price; });
        }
    }
    else{
    }
    if(isLowToHigh === true){
        // console.log("fasfasfasfasf")
        if(changedClothes.length > 0){
            changedClothes = changedClothes.sort(function(a, b) { return a.price - b.price; });
        }
        else{
            cloth = cloth.sort(function(a, b) { return a.price - b.price; });
        }
    }
    if(clothType.length === 0 && accessoriesType.length === 0){
        return cloth;
    }
    console.log(filteredByAccessoriesType,filteredByClothType)
    return changedClothes;
}

export default filterCloth;