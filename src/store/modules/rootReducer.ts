import { combineReducers } from "redux";
import cart from '../modules/cart/reducer'

// combina todos os reducers em um unico arquivo
export default combineReducers({
  cart,
})