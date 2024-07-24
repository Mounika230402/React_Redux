
const initialState={
    candies:{},
    count:0
}
export const Reducers=(state=initialState,action)=>{
    switch(action.type){
        case "BUY_CANDIES":
            return {...state,candies:{...action.product,count:action.product.count+1}}
        case "SELL_CANDIES":
            if(state.candies>0)
            {
                return {...state,candies:state.candies-action.quantity}
            }
            else
            return state
        default:
            return state;
    }
}