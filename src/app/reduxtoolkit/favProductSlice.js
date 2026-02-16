const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState={
    myFavProducts :[]
}
const Slice = createSlice({
    name:"favproductsSlicer",
    initialState,
    reducers:{
        addFavProducts:(state,action)=>{
            const existingproducts = state.myFavProducts.find(item=>item.id==action.payload.id);

            if(existingproducts){
                quantity+=1

            }
            else{
                const data={
                   favId : nanoid(),
                   quantity:1,
                   ...action.payload,
                }
                state.myFavProducts.push(data)
            }

        },

        deletefav:(state,action)=>{
            const data = state.myFavProducts.filter((product)=>product.id!= action.payload.id)
            state.myFavProducts=data
        }

    }



})

export const {addFavProducts,name,deletefav} = Slice.actions;
export default Slice.reducer;
        
