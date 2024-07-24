const InitialState={
    products:[],
    loading:true,
    error:false
}
export const Reducer=(state=InitialState,action)=>{
    switch(action.type){
        case "FETCH_PRODUCTS_SUCCESS":
            return{...state,products:action.payload,loading:false}
        case "FETCH_PRODUCTS_ERROR":
            return{...state,error:true,loading:false}
        case "FETCH_PRODUCTS_LOADING":
            return{...state,loading:true}
        default:
            return state;
    }
}