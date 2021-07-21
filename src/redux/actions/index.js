import {GLOBAL} from '../types'


export const setGlobalCategory = (category) => ({
  type: GLOBAL.SET_CATEGORY,
  category
})

export const setSubCategory = (subCategory) => ({
  type: GLOBAL.SET_SUBCATEGORY,
  subCategory,
});
