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
               return;

            }
            else{
                const data={
                   favId : nanoid(),
                   ...action.payload,
                }
                state.myFavProducts.push(data)
            }

        },

        deletefav:(state,action)=>{
            const data = state.myFavProducts.filter((product)=>product.id!= action.payload.id)
            state.myFavProducts=data
        },

        togglefav:(state,action) =>{
            const exists = state.myFavProducts.find((porduct)=>porduct.id == action.payload.id)
            if(exists){
                state.myFavProducts=state.myFavProducts.filter((product)=>product.id!=action.payload.id)

            }
            else{
                state.myFavProducts.push({
                    favId:nanoid(),
                    ...action.payload

                })
            }
        }

    }



})

export const {addFavProducts,name,togglefav,deletefav} = Slice.actions;
export default Slice.reducer;
        
