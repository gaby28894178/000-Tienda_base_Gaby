import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    const success = login(username, password);
    if (success) {
      navigate('/dashboard');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Usuario" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" type="password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}



// import { useContext, useState } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// export default function Login() {
//   const [username, setUsername] = useState('');
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     login(username);
//     navigate('/dashboard');
//   };

//   return (
//     <div>
//       <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Usuario" />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }
