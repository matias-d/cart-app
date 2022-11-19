import React, { useContext } from 'react'
import { myContext } from '../../context'

export const ItemCart = ({ item }) => {
  const { addCartToItem, deleteCartToItem } = useContext(myContext)

  return (
    <div className='flex bg-zinc-700 mb-3 p-4 px-12 md:px-4 rounded-xl gap-x-4 text-gray-100 items-center justify-center'>
      <img src={item.img} alt={item.name} className='w-12 h-12 object-cover  rounded-xl' />
      <div className='flex flex-col gap-y-2'>
        <h4 className='font-medium'>{item.name}</h4>
        <div className='flex gap-x-2'>
          <button className='text-sm font-medium text-zinc-900 bg-gray-200 px-2 rounded-xl hover:bg-gray-300' onClick={() => addCartToItem(item)}>AGREGAR</button>
          <button className='text-sm font-medium text-zinc-900 bg-gray-200 px-2 rounded-xl hover:bg-gray-300' onClick={() => deleteCartToItem(item)}>SACAR</button>
        </div>
      </div>
      <div className='flex flex-col gap-y-2 justify-center items-center'>
        <p className='text-white bg-red-500 px-1 w-5 text-center rounded-full text-sm'>{item.amount}</p>
        <p className='text-sm font-medium'>Total: ${item.price * item.amount}</p>
      </div>
    </div>
  )
}
