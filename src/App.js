import React from "react";
import { Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ShopPage from "./components/ShopMainPage/Page";
import CatalogPage from "./components/catalog/Page";
import ItemPage from "./components/ItemPage";
import Footer from "./components/ShopMainPage/Footer";

function App() {
  return (
    <div>
      <Route path="/DDD" render={()=> <NavBar/>}/>
      <Route path="/DDD" exact render={()=><ShopPage/>}/>
      <Route path="/DDD/catalog" exact render={()=><CatalogPage/>}/>
      <Route path="/DDD/catalog/:id" render={(props)=><ItemPage {...props}/>}/>
      <Footer path="/DDD"></Footer>
    </div>
  )
}

export default App;
