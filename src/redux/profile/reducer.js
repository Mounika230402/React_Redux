const Profile_InitialState={
    name:"Mounika",
    batch:"5",
    mobile:43867582934872,
    address:"KPHB Phase 7,Hyderabad."
}

export const Profile_Reducer=(state=Profile_InitialState,action)=>{
    switch(action.type){
        case "CHANGE_NAME":
            return {...state,name:action.change}
        case "CHANGE_BATCH":
            return {...state,batch:action.change}
        case "CHANGE_MOBILE":
            return {...state,mobile:action.change}
        case "CHANGE_ADDRESS":
            return {...state,address:action.change}
        default:
            return state;

    }
}