const numbersForPagination = (itemsPerPage,clothesLength)=>{
    const numberOfPages = Math.ceil(clothesLength/itemsPerPage);
    const pages = []
    for(let i=1; i<numberOfPages+1;i++){
        pages.push(i)
    }
    return pages;
}
export default numbersForPagination;