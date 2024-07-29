export const AddToCart=(selectedProduct)=>{
    console.log("action")
    return {
        type:"ADD_To_CART",
        payload:selectedProduct,
    }
}
export const RemoveFromCart=(selectedID)=>{
    return {
        type:"REMOVE_FROM_CART",
        payload:selectedID
    }
}