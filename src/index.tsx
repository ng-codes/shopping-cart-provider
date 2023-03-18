/* tslint:disable:no-bitwise */
import React = require('react');
import { createContext, useContext } from 'react';
import { CartItem, ShoppingCartContextProps, ShoppingCartProviderProps } from './interface';
import { useLocalStorage } from './useLocalStorage';

const ShoppingCartContext = createContext({} as ShoppingCartContextProps);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shopping-cart', []);

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

  function getItemQuantity(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseCartQuantity(cartItem: CartItem) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === cartItem.id) == null) {
        return [
          ...currItems,
          {
            id: cartItem.id,
            quantity: 1,
            price: cartItem.price,
            data: cartItem?.data,
          },
        ];
      } else {
        return currItems.map((item) => {
          if (item.id === cartItem.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseCartQuantity(cartItem: CartItem) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === cartItem.id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== cartItem.id);
      } else {
        return currItems.map((item) => {
          if (item.id === cartItem.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: string) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  function cartTotal() {
    const cartTotalPrice = cartItems.reduce((n, { price, quantity }) => (n + price) | (1 * quantity), 0);
    return cartTotalPrice;
  }

  function clearCart() {
    localStorage.removeItem('shopping-cart');
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        cartTotal,
        clearCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
