export const AddToCart=(item)=>{
    return {
        type:"ADDTOCART",
        payload:item 
    }
}

export const DeleteItem=(item)=>{
    return {
        type:"DELETEITEM",
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
