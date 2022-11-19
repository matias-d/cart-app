import React, { createContext, useEffect, useState } from 'react'

export const myContext = createContext()

export const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const cartItemstoLocalStorage = localStorage.getItem('products')
      return cartItemstoLocalStorage ? JSON.parse(cartItemstoLocalStorage) : []
    } catch (error) {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(cartItems))
  }, [cartItems])

  const addCartToItem = (product) => {
    const inCart = cartItems.find((item) => item.id === product.id)
    if (inCart) {
      setCartItems(
        cartItems.map((item) => {
          if (item.id !== product.id) return item
          return {
            ...inCart,
            amount: inCart.amount + 1
          }
        })
      )
    } else {
      setCartItems([...cartItems, { ...product, amount: 1 }])
    }
  }

  const deleteCartToItem = (product) => {
    const inCart = cartItems.find((item) => item.id === product.id)
    if (inCart.amount === 1) {
      setCartItems(
        cartItems.filter((item) => item.id !== product.id)

      )
    } else {
      setCartItems(
        cartItems.map((item) => {
          if (item.id !== product.id) return item
          return {
            ...inCart,
            amount: inCart.amount - 1

          }
        })
      )
    }
    console.log('Click')
  }

  return (
    <myContext.Provider value={{
      addCartToItem,
      deleteCartToItem,
      cartItems
    }}
    >
      {children}
    </myContext.Provider>
  )
}
