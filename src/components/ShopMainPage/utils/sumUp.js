const sumUp = (items)=>{
    let summ = 0;
    items.forEach(item => {
        summ += item.price * item.quantity;
    });
    return summ
}

export default sumUp;