import { combineReducers } from "redux";
import { globalReducer } from "redux/reducers/globalReducer";
import { shopReducer } from "redux/reducers/shopReducer";

const rootReducer = combineReducers({
  global: globalReducer,
  shop: shopReducer
})

export default rootReducer;