import React, { useEffect, useState } from 'react';
import Login from'./components/Login';
import { getTokenFromResponse } from './spotify';
import './App.css';


function App() {
  const [token, setToken] = useState(null);

useEffect(() => {
 
  const hash = getTokenFromResponse();
  window.location.hash ="";
  const _token = hash.access_token;

  if (_token) {
    setToken(_token)
  }

  console.log("I have a token:", token);
}, [])

  return (
    <div className="app">
      {
        token ?(
          <h2>I am logged in</h2>
        ) : (
          <Login/>
        )
      }
    </div>
  );
}

export default App;
