import React, {useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailProducts } from '../redux/reducers/productSlice';

const ProductDetail = () => {
  let{id} = useParams();
  const product = useSelector(state=>state.product.product)
  // const [product, setProduct] = useState(null) // 3. api data를 state에 저장!
  const dispatch = useDispatch();
  const getProductDetail = () => {
    // dispatch(productAction.getProductDetail(id))
    dispatch(fetchDetailProducts(id))
    console.log("iddd", product);
  }
  useEffect(()=>{
    getProductDetail()
  },[])

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img width={400} src={product?.img}/>
          {/* product 안에 img src가 담겨 있음! product가 있다면 img를 보여준다. */}
        </Col>
        <Col>
          <h4>{product?.title}</h4>
          <h5>KRW {product?.price}</h5>
          <div style={{fontSize:"13", fontWeight:"800"}}>{product?.choice==true?"Conscious choice":""}</div>
          <DropdownButton style={{marginTop:"15px"}} id="dropdown-basic-button" variant="outline-dark" title="사이즈 선택">
            <Dropdown.Item href="#/action-1">S</Dropdown.Item>
            <Dropdown.Item href="#/action-2">M</Dropdown.Item>
            <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            <Dropdown.Item href="#/action-3">XL</Dropdown.Item>
          </DropdownButton>
          <Button style={{marginTop:"15px", width:"70%"}} variant="dark">추가</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
