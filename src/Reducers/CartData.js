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
        case "INCRQUANTITY": 
         {
            const itemIdx=state.cartData.findIndex((item)=>item.id === action.payload.id);

            if(itemIdx>=0)
            {
                state.cartData[itemIdx].quantity++;
            }
         } 
         return state;
         case "DECRQUANTITY": 
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

        case "EMPTYCART": return {cartData:[]};
        case "DELETEITEM":  {
            // let newData =state.cartData.filter((item)=>item.id !== action.payload.id)
            //   state.cartData=newData
            const itemIdx=state.cartData.findIndex((item)=>item.id === action.payload.id);
            if(itemIdx>=0)
            {
            //   let newData=[]
             let newData=state.cartData.filter((item)=>item.id !== action.payload.id)
                // var idx=0;
                // for(var i=0;i<state.cartData.length;i++)
                // {
                //     if(i===itemIdx) continue;
                //     newData[idx++]=state.cartData[i];
                // }
                // state.cartData=newData;
                return {...state,cartData:newData};
            }
              return state;
        }
        default: return state;
    }
}

export default changeInCart