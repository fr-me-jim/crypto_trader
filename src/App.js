import React, { useState, useEffect } from 'react';
import image from './cryptocoins.png';
import Form from './components/Form';
import axios from 'axios';

function App() {

  const apiKey = '4c9860b15116c2ce86b0dd62f2a3ca47665024f086e6b34f0d00025072109224';


  //state
  const [ coin, setCoin ] = useState('');
  const [ cryptocoin, setCryptocoin ] = useState('');

  useEffect(() => {
    const tradeCrypto = async () => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocoin}&tsyms=${coin}&api_key=${apiKey}`;

      const response = await axios.get(url);
      console.log(response);
    }

    tradeCrypto();
  
  }, [cryptocoin, coin]);

  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <img src={image} alt="cryptocoins_image"/>
        </div>

        <div className="one-half column">
          <h1>Trade CryptoCoins Instantly</h1>
          <Form 
            setCoin={setCoin}
            setCryptocoin={setCryptocoin}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
