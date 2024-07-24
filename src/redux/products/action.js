// export const FetchProduts_success=(data)=>{
    // return {
    //     type:"FETCH_PRODUCTS_SUCCESS",
    //     payload:data
    // }
// }
import axios from "axios"
export const FetchProduts_success=()=>{
    return async(dispatch)=>{
        try{
            dispatch(FetchProduts_loading())
            const response= await axios.get("https://fakestoreapi.com/products")
            for(let i of response.data){
                i["count"]=0
            }
            if(response.status===200)
            dispatch({
                type:"FETCH_PRODUCTS_SUCCESS",
                payload:response.data
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