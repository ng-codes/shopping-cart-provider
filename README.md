# Advance shopping cart provider

The advance-shopping-cart provider component leverages React's Context API to make a configured shopping cart available throughout a React component tree. This component can be imported directly from the advance-shopping-cart.

## Authors

- [@Reddy Bala Subrahmanyam](https://github.com/Bala-Subrahmanyam-Reddy)

## Installation

Install with npm

```bash
  npm i advance-shopping-cart
```

## Usage

Shopping cart provider component can be imported from `advance-shopping-cart` and can be placed in react component tree.

```React
import useShoppingCartProvider from 'advance-shopping-cart'

function App() {
  <useShoppingCartProvider>
    <p>Provider added</p>
  </useShoppingCartProvider>
}
```

## Available Options

The useShoppingCartProvider uses React context api and has the following functions.

| Name                   | Type       | Description                                                                      | Arguments                                                                     |
| :--------------------- | :--------- | :------------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| `getItemQuantity`      | `Function` | Gives quantity of each product based on product id                               | **Required**. id                                                              |
| `increaseCartQuantity` | `Function` | Increases quantity of a product Or add product to cart (when quantity is 0)      | **Required**. {id:`id`,price:`price`,quantity:0,data:{`product data object`}} |
| `decreaseCartQuantity` | `Function` | Decreases quantity of a product Or remove product from cart (when quantity is 0) | **Required**. {id:`id`,price:`price`,quantity:0,data:{`product data object`}} |
| `removeFromCart`       | `Function` | Removes product from cart                                                        | **Required**. id                                                              |
| `cartQuantity`         | `Constant` | Gives overall quantity of products in cart                                       | ---                                                                           |
| `cartQuantity`         | `Constant` | Gives total products data stored in cart                                         | ---                                                                           |
| `cartTotal`            | `Constant` | Gives total price of cart based quantity and price                               | ---                                                                           |
| `clearCart`            | `Function` | Clear cart products stored in local storage                                      | ---                                                                           |

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.
