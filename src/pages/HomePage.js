import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useProductData from "hooks/useProductData";
import productData from "data/product.json"
import Header from "components/header";
import { useHistory, useLocation } from "react-router-dom";


function HomePage() {
  const location = useLocation();
  

  const globalState = useSelector((state) => state.global);
  const data = useProductData(productData, 
    globalState.category, location.search.split('').slice(1).join('')
  )


  return (
    <div>
      <Header fillData={data} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default HomePage
