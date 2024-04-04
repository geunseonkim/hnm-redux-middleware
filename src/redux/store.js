import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers/index" //or "./reducers"

import productReducer from "./reducers/productSlice";
import authenticateReducer from "./reducers/authenticateReducer"

import { configureStore } from "@reduxjs/toolkit";


// let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const store = configureStore ({
    reducer: {
        auth: authenticateReducer,
        product: productReducer
    }
})

// combinereducer - 자동 셋업
// thunk - 자동 셋업
// applyMiddleware - 자동 셋업
// composeWithDevTools - 자동 셋업

export default store