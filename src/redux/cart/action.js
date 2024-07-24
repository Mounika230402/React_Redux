export const AddToCart=(selectedProduct)=>{
    return {
        type:"ADD_To_CART",
        payload:selectedProduct,
        count:0
    }
}
export const RemoveFromCart=(selectedID)=>{
    return {
        type:"REMOVE_FROM_CART",
        payload:selectedID
    }
}