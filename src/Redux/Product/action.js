import axios from "axios";
export const PRODUCT_DATA = "PRODUCT_DATA";

export const getProduct = (payload) => ({

    type:PRODUCT_DATA,
    payload
})

export const productFunc=() => {
    return (dispatch) => {
        axios.get("https://shrouded-reaches-37639.herokuapp.com/products").then((res) => {
           return dispatch(getProduct(res.data))
        })
    }
}