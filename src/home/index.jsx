import React from 'react'
import { Cart } from '../components/cart'
import { Products } from '../components/products'

export const Home = () => {
  return (
    <div className='flex flex-col gap-3.5 items-center py-5 '>
      <Cart />
      <Products />
    </div>
  )
}
