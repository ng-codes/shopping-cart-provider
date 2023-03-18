# Shopping cart provider

The advance-shopping-cart provider component leverages React's Context API to make a configured shopping cart available throughout a React component tree. This component can be imported directly from the shopping-cart-provider.

## Authors

- [@Reddy Bala Subrahmanyam](https://github.com/Bala-Subrahmanyam-Reddy)

## Installation

Install with npm

```bash
  npm i shopping-cart-provider
```

## Usage/Example

- Shopping cart provider component can be imported from `shopping-cart-provider` and can be placed in react component tree.
- Shopping cart provider should be placed at parent component in order to use available functions in child component

### `index.js or index.tsx`

```index
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ShoppingCartProvider } from "shopping-cart-provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

   <ShoppingCartProvider>
      <App /> //child component can be placed here
   </ShoppingCartProvider>

);

```

- Now we can use all the function of shopping-cart-provider in its child component by importing `useShoppingCart` from `shopping-cart-provider`
- For above example the child is App component

### `app.js or app.tsx`

```app
import { useShoppingCart } from "shopping-cart-provider";

function App() {

  //Use all available functions from useShoppingCart as follows
  const { getItemQuantity, increaseCartQuantity } = useShoppingCart();

  return (
    <div>
        //Add product to cart
        <button onClick={() => increaseCartQuantity({ id: "productid" })}>
          Add to cart
        </button>

        // Get quantity of product based on id
        <p>Product quantity {getItemQuantity("productid")}</p>

    </div>
  );
}

export default App;

```

- Similar to above example you can use and implement the advanced shopping cart functionality with all available functions.

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
