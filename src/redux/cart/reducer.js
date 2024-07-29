const initialState={
    data:[],
};
export const cartReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_To_CART":
            console.log("reducer")
            return{...state,data:[...state.data,action.payload]};
        case "REMOVE_FROM_CART":
            const newFiteredData=state.data.filter(each=>each.id!==action.payload)
            return {...state,data:newFiteredData};
        default:
            return state;
    }
}