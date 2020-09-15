import React, { useEffect, useState } from 'react';
import Login from'./components/Login';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import PlayerHome from './components/PlayerHome';
import { useDataLayerValue } from './components/DataLayer';
import './App.css';

const spotify = new SpotifyWebApi(); 

function App() {
  const [{ user, token}, dispatch] = useDataLayerValue();
useEffect(() => {
 
  const hash = getTokenFromResponse();
  window.location.hash ="";
  const _token = hash.access_token;

  if (_token) {
    dispatch({
      type: "SET_Token",
      token: _token
    })

  

    spotify.setAccessToken(_token);

    // get users account
    spotify.getMe().then(user => {
      

      dispatch({
        type: 'SET_USER',
        user: user
      });
    });
  }

  console.log("I have a token:", token);
}, [])

console.log(user);
console.log(token);

  return (
    <div className="app">
      {
        token ?(
          <PlayerHome/>
        ) : (
          <Login/>
        )
      }
    </div>
  );
}

export default App;
