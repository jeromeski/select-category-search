import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useProductData from "hooks/useProductData";
import productData from "data/product.json"
import Header from "components/header";
import { useHistory, useLocation } from "react-router-dom";
import { Col, Row } from "antd";
import { SHOP } from "common/defines";



function HomePage() {
  const location = useLocation();
  // const dispatch = useDispatch();

  const globalState = useSelector((state) => state.global);
  const globalData = useProductData(productData, 
    globalState.category, location.search.split('').slice(1).join('')
  )

  // const shopState = useSelector((state) => state.shop);
  const subCategory = SHOP.category.find(
    (item) => item.name.toLowerCase() === globalState.category.toLowerCase()
  );

  return (
    <div>
      <Header fillData={globalData} />
      <Row>
        <Col xs={12}><pre>{JSON.stringify(subCategory, null, 2)}</pre></Col>
        <Col xs={12}><pre>{JSON.stringify(globalData, null, 2)}</pre></Col>
      </Row>
    </div>
  )
}

export default HomePage
