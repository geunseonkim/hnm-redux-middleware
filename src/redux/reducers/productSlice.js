import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
let initialState={
    productList: [],
    product: null,
    isLoading: false,
    error: null,
}

export const fetchProducts = createAsyncThunk('product/fetchAll',async(searchQuery,thunkApi)=>{
    try{
        let url = `https://my-json-server.typicode.com/geunseonkim/hnm-react-router-practice/products?q=${searchQuery}`;
        let response = await fetch(url)
        return await response.json();
    }catch(error){
        thunkApi.rejectWithValue(error.message)
    }
})

export const fetchDetailProducts = createAsyncThunk('product/fetchDetail',async(id, thunkApi)=>{
    try{
        let url = `https://my-json-server.typicode.com/geunseonkim/hnm-react-router-practice/products/${id}`;
        let response = await fetch(url)
        return await response.json();
    }catch(error){
        thunkApi.rejectWithValue(error.message)
    }
})

// function productReducer(state=initialState, action) {
//     let {type, payload} = action
//     switch(type) {
//         case "GET_PRODUCT_SUCCESS":
//             return {...state, productList: payload.data}

//         case "GET_DETAIL_SUCCESS":
//             return {...state, product: payload.data}

//         default:
//             return {...state}
//     }
// }

// export default productReducer

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers: {
        // getAllProducts(state, action){
        //     state.productList= action.payload.data
        // },
        getSingleProduct(state, action){
            state.product= action.payload.data
        },
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.isLoading=false
            state.productList = action.payload;
        })
        .addCase(fetchProducts.rejected,(state, action)=>{
            state.isLoading=false
            state.error=action.payload
        })
        .addCase(fetchDetailProducts.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(fetchDetailProducts.fulfilled,(state,action)=>{
            state.isLoading=false
            state.product = action.payload;
        })
        .addCase(fetchDetailProducts.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.payload
        })
    }
})

// const ProductDetailSlice = createSlice({
//     name:"detailProduct",
//     initialState,
//     reducers: {},
//     extraReducers: (builder)=>{
//         builder.addCase(fetchDetailProducts.pending,(state)=>{
//             state.isLoading=true
//         })
//         .addCase(fetchDetailProducts.fulfilled,(state,action)=>{
//             state.isLoading=false
//             state.product = action.payload;
//         })
//         .addCase(fetchDetailProducts.rejected,(state,action)=>{
//             state.isLoading=false
//             state.error=action.payload
//         })
//     } 
// })

console.log("ppp", productSlice);
// console.log("ddd", ProductDetailSlice);

export const productActions = productSlice.actions
export default productSlice.reducer;