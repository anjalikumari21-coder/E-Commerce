import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
       <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
       </div>
       <div className="descriptionbox-description">
        <p>Welcome to StyleHub, your ultimate online destination for fashionable,
           affordable, and high-quality clothing. At StyleHub, we believe that 
           fashion is more than just clothing — it's a way to express your personality
           and confidence. Our platform offers a wide range of trendy apparel for men,
           women, and kids, including t-shirts, dresses, casual wear, and accessories,
           all curated to meet the latest fashion trends. Designed with a user-friendly
           interface, our website makes shopping easy, secure, and enjoyable. </p>
        <p>With detailed product descriptions, accurate size guides, and a variety of payment options, we
           ensure a smooth shopping experience from start to finish. We pride ourselves on 
           fast shipping, hassle-free returns, and responsive customer support, making StyleHub 
           a trusted name in online fashion. Whether you're updating your wardrobe, shopping for 
           a special occasion, or looking for daily wear, StyleHub brings style to your doorstep 
           with just a few clicks.</p>
       </div>
    </div>
  )
}
