import { useEffect, useState } from 'react'
import { getProductsByCategory, getProductsBySearch } from "../common/utils"

function useProductData(productData, category, query) {
  const [data, setData] = useState(productData)

  useEffect(() => {
    const products = query ? getProductsBySearch(getProductsByCategory(productData, category), query) : getProductsByCategory(productData, category)
    setData(products)
  },[category, productData, query])
  
  return data
}

export default useProductData;
