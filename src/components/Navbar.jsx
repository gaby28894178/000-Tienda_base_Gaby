import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { cart, payCart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">Home</Link>
      {user && <Link to="/dashboard">Dashboard</Link>}
      <span>🛒 {cart.length}</span>
      {cart.length > 0 && <button onClick={payCart}>Pagar</button>}
      {user ? <button onClick={logout}>Logout</button> : <Link to="/login">Login</Link>}
    </nav>
  );
}





// import { useContext } from 'react';
// import { CartContext } from '../context/CartContext';
// import { AuthContext } from '../context/AuthContext';
// import { Link } from 'react-router-dom';

// export default function Navbar() {
//   const { cart } = useContext(CartContext);
//   const { user, logout } = useContext(AuthContext);

//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       {user && <Link to="/dashboard">Dashboard</Link>}
//       <span>🛒 {cart.length}</span>
//       {user ? <button onClick={logout}>Logout</button> : <Link to="/login">Login</Link>}
//     </nav>
//   );
// }
