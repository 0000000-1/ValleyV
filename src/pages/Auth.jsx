import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cart from "../components/Cart";


const AuthComponent = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartToggle = () => {
      setCartOpen(!cartOpen)
  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);

  // LocalStorage keys
  const userKey = 'currentUser';
  const tokenKey = 'authToken';

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Login logic
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      const user = storedUsers.find((u) => u.username === username && u.password === password);
      if (user) {
        localStorage.setItem(userKey, JSON.stringify(user));
        localStorage.setItem(tokenKey, 'logged_in');
        window.location.href = '/';
      } else {
        setError('Invalid username or password');
      }
    } else {
      // Registration logic
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      const existingUser = storedUsers.find((u) => u.username === username);
      if (!existingUser) {
        storedUsers.push({ username, password });
        localStorage.setItem('users', JSON.stringify(storedUsers));
        localStorage.setItem(userKey, JSON.stringify({ username, password }));
        localStorage.setItem(tokenKey, 'logged_in');
        setIsLogin(true);
      } else {
        setError('Username already exists');
      }
    }
  };
  // Handle toggle between login and registration
  const toggleAuth = () => {
    setIsLogin(!isLogin);
    setError(null);
  };

  return (
    <div >
            <div >
                <div className='h-[150px]'>
                <Navbar onCartToggle={handleCartToggle} />
                </div>
                <Cart isOpen={cartOpen} onCartToggle={handleCartToggle}/>
            </div>
      <div  className="bg-gray-200 h-[400px]">
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
          <p>
            {isLogin ? (
              <span>
                Don't have an account?{' '}
                <a onClick={toggleAuth}>Register here</a>
              </span>
            ) : (
              <span>
                Already have an account?{' '}
                <a onClick={toggleAuth}>Login here</a>
              </span>
            )}
          </p>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AuthComponent;

