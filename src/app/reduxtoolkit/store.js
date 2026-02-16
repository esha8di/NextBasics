const { configureStore } = require("@reduxjs/toolkit");
import myproductReducer from "./slice";
import myfavproductReducer from "./favProductSlice"

export const store = configureStore({
    reducer :{
        myProductsData:myproductReducer,
        myFavProductsData:myfavproductReducer
    }
    
})

