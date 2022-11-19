import React, { useContext } from 'react'
import { myContext } from '../../context'

export const ProductsItems = ({ product }) => {
  const { addCartToItem } = useContext(myContext)

  return (
    <div className='flex flex-col gap-2 items-center'>
      <img src={product.img} alt={product.name} className='w-44 h-44 rounded-xl drop-shadow-md' />
      <span className='text-gray-900 font-medium'>{product.name} - ${product.price}</span>
      <button className='bg-gray-300 font-medium py-2 px-3 rounded-xl hover:bg-gray-400/40 transition-colors ' onClick={() => addCartToItem(product)}>Agregar al carrito</button>
    </div>
  )
}
