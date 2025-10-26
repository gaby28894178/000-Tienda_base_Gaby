import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>Stock: {product.stock}</p>
      <Link to={`/product/${product.id}`}>Ver detalle</Link><br/>
      <button onClick={() => addToCart(product)} disabled={product.stock === 0}
            style={{backgroundColor:product.stock ===0 ?"gray":"blue",color:"white",padding:"6px"}}
        
        >
        {product.stock==0? "Sin stock":"Agregar al carrito"}
      </button>
    </div>
  );
}



// import { useContext } from 'react';
// import { CartContext } from '../context/CartContext';
// import { Link } from 'react-router-dom';

// export default function ProductCard({ product }) {
//   const { addToCart } = useContext(CartContext);

//   return (
//     <div>
//       <h3>{product.name}</h3>
//       <p>${product.price}</p>
//       <p>Stock: {product.stock}</p>
//       <button onClick={() => addToCart(product)}>Agregar al carrito</button>
//       <Link to={`/product/${product.id}`}>Ver detalle</Link>
//     </div>
//   );
// }


// import { useContext } from 'react';
// import { CartContext } from '../context/CartContext';
// import { Link } from 'react-router-dom';

// export default function ProductCard({ product }) {
//   const { addToCart } = useContext(CartContext);

//   return (
//     <div>
//       <h3>{product.name}</h3>
//       <p>${product.price}</p>
//       <button onClick={() => addToCart(product)}>Agregar al carrito</button>
//       <Link to={`/product/${product.id}`}>Ver detalle</Link>
//     </div>
//   );
// }
