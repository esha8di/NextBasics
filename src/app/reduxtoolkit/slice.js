const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    myproducts : []
}

const Slice = createSlice({
    name:'addproductslicer',
    initialState,
    reducers:{
        addProduct: (state, action) => {

    const existingProduct = state.myproducts.find(
        (item) => item.id === action.payload.id
    );

    if (existingProduct) {
        existingProduct.quantity += 1;
    } 
    else {
        const data = {
            productid: nanoid(), 
            quantity: 1,
            ...action.payload,
        };

        state.myproducts.push(data);
    }
},
        removeProduct : (state,action)=>{
            const data=state.myproducts.filter((product)=>product.id!=action.payload)
            state.myproducts=data

        }
    }
});

export const {addProduct,name,removeProduct} = Slice.actions;
export default Slice.reducer;