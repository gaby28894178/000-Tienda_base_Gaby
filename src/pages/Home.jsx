import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const { products } = useContext(CartContext);

  return (
    <div>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}



// import products from '../data/products.json';
// import ProductCard from '../components/ProductCard';

// export default function Home() {
//   return (
//     <div>
//       {products.map((p) => (
//         <ProductCard key={p.id} product={p} />
//       ))}
//     </div>
//   );
// }
