import React from "react";
import { Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ShopPage from "./components/ShopMainPage/Page";
import CatalogPage from "./components/catalog/Page";
// import ItemPage from "./components/ItemPage";
import Footer from "./components/ShopMainPage/Footer";
// import Basket from "./components/Basket";
import BasketWithItems from "./components/BasketWithItems";

export const languageContext = React.createContext("en");

// function App() {
//   return (
//     <div>
//       <Route path="/DDD" render={(props)=> <NavBar {...props}/>}/>
//       <Route path="/DDD" exact render={()=><ShopPage/>}/>
//       <Route path="/DDD/catalog" exact render={(props)=><CatalogPage {...props}/>}/>
//       <Route path="/DDD/catalog/:id" render={(props)=><CatalogPage {...props}/>}/>
//       {/* <Route path="/DDD/items/:id" render={(props)=><ItemPage {...props}/>}/>
//       <Route path="/DDD/basket/" render={()=><Basket/>}/> */}
//       <BasketWithItems/>
//       <Footer></Footer>
//     </div>
//   )
// }

// export default App;

class App extends React.Component {
  state={
      items:[],
      id:[],
      language: "ru",
  }
  addItem = (item,size)=>{
      let items = this.state.items.slice();
      let isItem = items.filter((i)=> i.id === item.id).length > 0;
      // console.log(isItem);
      if(size !== "" && !isItem){
          item.size = size;
          item.quantity = 1;
          items.push(item)
          this.setState({items:items})
          return;
      }
      alert("Вы не выбрали размер")
  }
  removeItem = (id)=>{
      let items = this.state.items.slice();
      items = items.filter((i)=>i.id !== id);
      this.setState({items:items});
  }
  changeQuantity = (id,change)=>{
      const items = this.state.items.slice();
      const index = items.findIndex((item)=> item.id === id );
      if(items[index].quantity === 1 && change === -1){
          return;
      }
      items[index].quantity = items[index].quantity + change;
      console.log(items[index].quantity)
      this.setState({items:items})
  }
  setLanguage = (language)=>{ 
    this.setState({language});
    let value = this.context;
    console.log(value);
  }
  // setId = (id)=>{
  //   this.state.id = id;
  // }
  render() {
    return (
      <languageContext.Provider value = {this.state.language}>
        <Route path="/DDD" render={(props)=> <NavBar {...props} items={this.state.items} changeLanguage = {this.setLanguage}/>}/>
        <Route path="/DDD" exact render={()=><ShopPage/>}/>
        <Route path="/DDD/catalog" exact render={(props)=><CatalogPage {...props}/>}/>
        <Route path="/DDD/catalog/:id" render={(props)=><CatalogPage {...props}/>}/>
        {/* <Route path="/DDD/items/:id" render={(props)=><ItemPage {...props}/>}/>
        <Route path="/DDD/basket/" render={()=><Basket/>}/> */}
        <BasketWithItems items={this.state.items} addItem={this.addItem} removeItem={this.removeItem} changeQuantity={this.changeQuantity}/>
        <Footer></Footer>
      </languageContext.Provider>
    )
  }
}

export default App;