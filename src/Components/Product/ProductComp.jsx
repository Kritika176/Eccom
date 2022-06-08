import React from 'react'
import { Link } from 'react-router-dom'
import "./ProductComp.css"
export const ProductComp = (props) => {
  if(props.data.image)
  {
  return(
 
    <Link to={`/products/${props.data.category}/${props.data._id}`}>
  <div key={props.data._id} className="productCard">
    
    <div className='imageDiv'><img src={props.data.image} className="image" alt=''></img></div>
      <h3>{props.data.brand}</h3>
      <h5>{props.data.name}</h5>
      <h6 id='discount'>{`Rs.${props.data.discountedPrice}`}</h6>
  </div>
  
  </Link>
  
  )
  }
}

