import React, { useEffect, useState } from 'react';
import Login from'./components/Login';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';

const spotify = new SpotifyWebApi(); 

function App() {
  const [token, setToken] = useState(null);

useEffect(() => {
 
  const hash = getTokenFromResponse();
  window.location.hash ="";
  const _token = hash.access_token;

  if (_token) {
    setToken(_token)

    spotify.setAccessToken(_token);

    // get users account
    spotify.getMe().then(user => {
      console.log(user);
    })
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
