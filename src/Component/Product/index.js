import moment from 'moment'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Product(props) {
  const navigation = useNavigate()
  return (
    <div onClick={() =>{navigation('/product',{state:{data:props.val}})}} className='p-3 m-2 card'>
      <img width='100%' height={200} className='img-flud m-auto d-block' src={props.val.image} alt='img' />
      <p className='product-title'>{props.val.name}</p>
      <p className='price'><span className='RS-icon'>₹</span>{props.val.sellingPrice}</p>
      <p className='descount'><span className='pr'>{props.val.descount}% off</span> Limited time deal</p>
      <p className='time'>Get it by <b>Saturday, {moment().subtract(7, 'days').format('MMM DD')}</b> FREE Delivery by Amazon</p>
    </div>
  )
}
