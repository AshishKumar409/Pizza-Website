import React from 'react'
import { ProductButton, ProductCard, ProductDesc, ProductImg, ProductInfo, ProductPrice, ProductsContainer, ProductsHeading, ProductTitle, ProductWrapper } from './ProductElements'

const Products = ({data,heading}) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product,index)=>{
          return (<ProductCard key={index}>
                   <ProductImg src={product.img} alt={product.alt}/>
                   <ProductInfo>
                       <ProductTitle>{product.name}</ProductTitle>
                       <ProductDesc>
                          {product.description}
                       </ProductDesc>
                          <ProductPrice>
                            {product.price}
                          </ProductPrice>
                             <ProductButton>
                               Add To Cart
                             </ProductButton>
                   </ProductInfo>
                   </ProductCard>
          )
        })}
      </ProductWrapper>
    </ProductsContainer>
  )
}

export default Products
