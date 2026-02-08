const { createSlice } = require("@reduxjs/toolkit");

const initialState ={
    myFavProducts : [],
}
const Slice = createSlice({
    name:"myFavProducts",
    initialState,
    reducers:{
        addFavProduct:(state,action)=>{
            
        }
        
        
    }

})