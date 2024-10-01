import { combineReducers } from "redux";
import { userReduser } from "./user";
import { productReduser } from "./product";
import { categoryReduser } from "./category";
import { discountReduser } from "./discount";



const reducer = combineReducers({
    user: userReduser,
    products: productReduser,
    category: categoryReduser,
    discount: discountReduser
})

export {
    reducer
}