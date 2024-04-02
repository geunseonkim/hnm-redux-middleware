import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`)
  }
  return (
    <div className="product-card" onClick={showDetail}>
      <img width={300} src={item?.img}/>
      <div>{item?.choice==true?"Conscious choice":""}</div>
      <div>{item?.title}</div>
      <div>KRW {item?.price}</div>
      <div>{item?.new==true?"신제품":""}</div>
    </div>
  )
}

export default ProductCard
