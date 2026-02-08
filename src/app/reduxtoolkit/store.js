const { configureStore } = require("@reduxjs/toolkit");
import myproductReducer from "./slice";

export const store = configureStore({
    reducer :{
        myProductsData:myproductReducer,
    }
    
})