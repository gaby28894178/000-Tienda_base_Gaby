import { createContext, useState } from 'react';
import productsData from '../data/products.json';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(productsData);

const addToCart = (product) => {
  const updatedProducts = [...products];
  const index = updatedProducts.findIndex((p) => p.id === product.id);

  if (index !== -1 && updatedProducts[index].stock > 0) {
    updatedProducts[index].stock -= 1;
    setProducts(updatedProducts);
    setCart((prev) => [...prev, product]);
  } else {
    alert('Sin stock disponible');
  }
};


  const payCart = () => {
    const updatedProducts = [...products];
    
    cart.forEach((item) => {
      const index = updatedProducts.findIndex((p) => p.id === item.id);
      if (index !== -1 && updatedProducts[index].stock > 0) {
        updatedProducts[index].stock -= 1;
      }
    });
    setProducts(updatedProducts);
    setCart([]);
    alert('Pago realizado');
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, payCart, products }}>
      {children}
    </CartContext.Provider>
  );
};




// import { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prev) => [...prev, product]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
