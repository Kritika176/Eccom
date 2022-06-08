import { PRODUCT_DATA } from "./action";

const fetchedProducts = {
    product: []
}

export const ProductReducer =(store=fetchedProducts,{type,payload}) =>{

    switch(type){
        case PRODUCT_DATA: {
           return {...store,product:[...payload] }
           
        }
        default:{
            return store
    }
    
}
}