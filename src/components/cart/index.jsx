import React, { useContext, useEffect, useState } from 'react'
import { RiShoppingCart2Fill, RiCloseCircleLine } from 'react-icons/ri'
import { myContext } from '../../context'
import { ItemCart } from './ItemCart'

export const Cart = () => {
  const [open, setOpen] = useState(false)
  const [cartLength, setCartLength] = useState(0)
  const { cartItems } = useContext(myContext)

  useEffect(() => {
    setCartLength(
      cartItems.reduce((previous, current) => previous + current.amount, 0)
    )
  }, [cartItems])

  const total = cartItems.reduce((previous, current) => previous + current.price * current.amount, 0)

  return (
    <div className=' w-1/2 flex justify-center md:justify-end relative '>
      {
      !open
        ? (
          <RiShoppingCart2Fill className='text-2xl text-white rounded-full bg-zinc-900 p-2 box-content hover:cursor-pointer hover:bg-zinc-800 ' onClick={() => setOpen(!open)} />
          )
        : (
          <RiCloseCircleLine className='text-2xl text-white rounded-full bg-zinc-900 p-2 box-content  hover:cursor-pointer hover:bg-zinc-800 z-50  ' onClick={() => setOpen(!open)} />
          )
    }
      {
      !open &&
      (
        <div className=' absolute bg-red-500 text-white px-1 md:-top-2 -top-3 md:-right-1 text-sm rounded-full h-5 text-center'>
          {cartLength}
        </div>
      )
    }
      {
      open &&
      (
        <div className='bg-zinc-900 p-6 rounded-xl absolute z-40 '>
          <h3 className='text-gray-200 font-medium text-2xl text-center my-3 md:mb-2'>Tu carrito</h3>
          {
            cartItems.length === 0
              ? (<p className='text-sm text-gray-200 font-medium mb-2'>Tu carrito esta vacio</p>)
              : (
                <div className='h-48 overflow-y-auto scrollbar scrollbar-thumb-zinc-800 scrollbar-track-zinc-700  scrollbar-thumb-rounded-full scrollbar-track-rounded-full pr-5'>
                  {
                  cartItems.map((item) => (
                    <ItemCart key={item.id} item={item} />
                  ))
                }
                </div>
                )
          }
          <h2 className='text-xl  font-medium text-center text-gray-200'>Total: ${total}</h2>
        </div>
      )
    }

    </div>
  )
}
