export const buyCandiesAction=(each)=>{
    return {
        type:"BUY_CANDIES",
        product:each,
        quantity:1
    }
}

export const SellCandiesAction=()=>{
    return{
        type:"SELL_CANDIES",
        quantity:1
    }
}