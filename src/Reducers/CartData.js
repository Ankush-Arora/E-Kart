const initialState={
    cartData:[] 
};

const changeInCart=(state=initialState,action)=>{

    switch(action.type)
    {
        case "ADDTOCART": {
            const itemIdx=state.cartData.findIndex((item)=>item.id === action.payload.id);
            if(itemIdx>=0)
            {
                state.cartData[itemIdx].quantity++;
                return state
            }
        return {...state,cartData:[...state.cartData,action.payload]}
        }
        case "INCRQUANTITY" : 
         {
            const itemIdx=state.cartData.findIndex((item)=>item.id === action.payload.id);

            if(itemIdx>=0)
            {
                state.cartData[itemIdx].quantity++;
            }
         } 
         return state;
         case "DECRQUANTITY" : 
         {
            const itemIdx=state.cartData.findIndex((item)=>item.id === action.payload.id);

            if(itemIdx>=0)
            {
                if(state.cartData[itemIdx].quantity===1) {
                    alert('Quantity cannot be 0')
                }
                else{
                state.cartData[itemIdx].quantity--;
                }
            }
         } 
         return state

        case "EMPTYCART": return {cartData:[]}
        default: return state;
    }
}

export default changeInCart