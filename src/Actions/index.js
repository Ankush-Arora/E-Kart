export const AddToCart=(item)=>{
    return {
        type:"ADDTOCART",
        payload:item 
    }
}

export const EmptyCart=()=>{
    return {
        type:"EMPTYCART",
        payload: [] 
    }
}

export const IncrQuantity=(item)=>{
    // item.quantity++;
    return {
        type:"INCRQUANTITY",
        payload:item 
    }
}

export const DecrQuantity=(item)=>{
    return {
        type:"DECRQUANTITY",
        payload:item 
    }
}


// export const QuantityIncr=()=>{
//     return {
//         type:"QUANTITYINCR"
//     }
// }

// export const QuantityDecr=()=>{
//     return {
//         type:"QUANTITYDECR"
//     }
// }