const initialState={
    products:[],
};
export const cartReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_To_CART":
            return{...state,products:[...state.products,action.payload]};
        case "REMOVE_FROM_CART":
            const newFiteredData=state.products.filter(each=>each.id!==action.payload)
            return {...state,products:newFiteredData};
            case "ADD":
                return{...state,products:[...state.products,action.payload]};
        default:
            return state;
    }
}