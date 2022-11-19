import React from 'react'
import { ProductsData } from '../../data'
import { ProductsItems } from './ProductsItems'

export const Products = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8'>
      {
        ProductsData.map((product) => (
          <ProductsItems key={product.key} product={product} />
        ))
      }
    </div>
  )
}
