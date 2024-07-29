import axios from "axios"
export const FetchProduts_success=()=>{
    return async(dispatch)=>{
        try{
            dispatch(FetchProduts_loading())
            const response= await axios.get("https://dummyjson.com/products")
            if(response.status===200)
            dispatch({
                type:"FETCH_PRODUCTS_SUCCESS",
                payload:response.data.products
            })
            }
            catch(err){
              dispatch(FetchProduts_error())
            }
          }
}
export const FetchProduts_error=()=>{
    return {
        type:"FETCH_PRODUCTS_ERROR"
    }
}
export const FetchProduts_loading=()=>{
    return {
        type:"FETCH_PRODUCTS_LOADING"
    }
}