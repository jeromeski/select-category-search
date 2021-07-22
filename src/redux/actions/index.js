import {GLOBAL, SHOP} from 'redux/types'

export const setGlobalCategory = (category) => ({
  type: GLOBAL.SET_CATEGORY,
  category
})



export const setSort = (sortType) => ({
  type: SHOP.SET_SORT,
  sortType
});

export const setSubCategory = (subCategory) => ({
  type: SHOP.SET_SUBCATEGORY,
  subCategory
})
