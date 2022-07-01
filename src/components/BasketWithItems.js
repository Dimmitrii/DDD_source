import React from 'react'

import { Route } from "react-router-dom";

import Basket from "./Basket";
import ItemPage from "./ItemPage";

export default class BasketWithItems extends React.Component {
    // state={
    //     items:[],
    // }
    // addItem = (item,size)=>{
    //     let items = this.state.items.slice();
    //     let isItem = items.filter((i)=> i.id === item.id).length > 0;
    //     // console.log(isItem);
    //     if(size !== "" && !isItem){
    //         item.size = size;
    //         item.quantity = 1;
    //         items.push(item)
    //         this.setState({items:items})
    //         return;
    //     }
    //     alert("Вы не выбрали размер")
    // }
    // removeItem = (id)=>{
    //     let items = this.state.items.slice();
    //     items = items.filter((i)=>i.id !== id);
    //     this.setState({items:items});
    // }
    // changeQuantity = (id,change)=>{
    //     const items = this.state.items.slice();
    //     const index = items.findIndex((item)=> item.id === id );
    //     if(items[index].quantity === 1 && change === -1){
    //         return;
    //     }
    //     items[index].quantity = items[index].quantity + change;
    //     console.log(items[index].quantity)
    //     this.setState({items:items})
    // }
    render() {
        // console.log(this.state.items)
        return (
            <div>
                <Route path="/DDD/items/:id" render={(props)=><ItemPage {...props} addItem={this.props.addItem} goods={this.props.items}/>}/>
                <Route path="/DDD/basket/" render={()=><Basket items={this.props.items} removeItem={this.props.removeItem} changeQuantity={this.props.changeQuantity}/>}/>
            </div>
        )
    }
}
