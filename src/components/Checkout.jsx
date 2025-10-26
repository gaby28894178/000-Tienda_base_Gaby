import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { cart, payCart } = useContext(CartContext);
  const [method, setMethod] = useState('');
  const [cuotas, setCuotas] = useState('1');
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePay = () => {
    if (!method) {
      alert('Selecciona un método de pago');
      return;
    }
    payCart();
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total: ${total}</p>

      <div>
        <label>
          <input
            type="radio"
            name="method"
            value="tarjeta"
            onChange={(e) => setMethod(e.target.value)}
          />
          Tarjeta de crédito
        </label>
        {method === 'tarjeta' && (
          <div>
            <label>Cuotas:</label>
            <select value={cuotas} onChange={(e) => setCuotas(e.target.value)}>
              <option value="1">1 cuota</option>
              <option value="3">3 cuotas</option>
              <option value="6">6 cuotas</option>
              <option value="12">12 cuotas</option>
            </select>
          </div>
        )}
      </div>

      <div>
        <label>
          <input
            type="radio"
            name="method"
            value="efectivo"
            onChange={(e) => setMethod(e.target.value)}
          />
          Efectivo
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            name="method"
            value="paypal"
            onChange={(e) => setMethod(e.target.value)}
          />
          PayPal
        </label>
      </div>

      <button onClick={handlePay}>Confirmar pago</button>
    </div>
  );
}
