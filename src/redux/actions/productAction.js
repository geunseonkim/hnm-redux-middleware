function getProducts(searchQuery) {
    return async(dispatch, getState)=>{
        let url = `https://my-json-server.typicode.com/geunseonkim/hnm-react-router-practice/products?q=${searchQuery}`;
        let response = await fetch(url)
        let data = await response.json();
        // console.log(data)
        dispatch({type:"GET_PRODUCT_SUCCESS", payload:{data}})
    }
}

function getProductDetail(id) {
    return async(dispatch, getState)=>{
        let url = `https://my-json-server.typicode.com/geunseonkim/hnm-react-router-practice/products/${id}`;
        let response = await fetch(url)
        let data = await response.json();
        dispatch({type:"GET_DETAIL_SUCCESS", payload:{data}})
    }
}



export const productAction={getProducts, getProductDetail}