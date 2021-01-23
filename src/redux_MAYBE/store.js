import { createStore, combineReducers } from "redux";

import shopReducer from "./shop/reducer";

const reducers = combineReducers({
    shop: shopReducer,
})

const store = createStore(reducers);

store.subscribe(()=>{
    console.log(store.getState());
});

export default store;