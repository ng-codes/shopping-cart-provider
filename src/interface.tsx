import { ReactNode } from 'react';

export type ShoppingCartProviderProps = {
  children: ReactNode;
};

export type CartItem = {
  id: string;
  quantity: number;
  price: number;
  data?: {};
};

export type ShoppingCartContextProps = {
  getItemQuantity: (id: string) => number;
  increaseCartQuantity: (cartItem: CartItem) => void;
  decreaseCartQuantity: (cartItem: CartItem) => void;
  removeFromCart: (id: string) => void;
  cartQuantity: number;
  cartItems: CartItem[];
  cartTotal: () => number;
  clearCart: () => void;
};
