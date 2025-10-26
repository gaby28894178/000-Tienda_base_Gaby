import { useParams } from 'react-router-dom';
import products from '../data/products.json';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
    </div>
  );
}
