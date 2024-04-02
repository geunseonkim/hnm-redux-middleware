import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {
  const productList = useSelector(state=>state.product.productList); // UI에 불러주려면 useState!
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const getProducts = () => {
    let searchQuery = query.get("q") || "";
    dispatch(productAction.getProducts(searchQuery))
  }
  useEffect(()=>{ // api 호출하려면 useEffect!
    getProducts()
  },[query])
  return (
    <div className="body-font">
      <Container>
        <Row>
          {productList.map((menu, idx) => (<Col lg={3} key={idx} className='productCard'><ProductCard item={menu}/></Col>))}
        </Row>
      </Container>
      <ProductCard/>
    </div>
  )
}

export default ProductAll
