import { GLOBAL } from "../types"

const initialState = {category: "clothing"}

export const globalReducer = (state=initialState, action) => {
  switch(action.type) {
    case GLOBAL.SET_CATEGORY:
      return {
        ...state, category: action.category,
      };
    
    default: return state
  }
}