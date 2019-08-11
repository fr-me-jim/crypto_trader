import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Spinner from './components/Spinner';
import Result from './components/Result';

import image from './cryptocoins.png';

import axios from 'axios';

function App() {

  const apiKey = '4c9860b15116c2ce86b0dd62f2a3ca47665024f086e6b34f0d00025072109224';


  //state
  const [ coin, setCoin ] = useState('');
  const [ cryptocoin, setCryptocoin ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ result, setResult ] = useState({});

  useEffect(() => {
    const tradeCrypto = async () => {

      //not in mounting time
      if (coin === '' || cryptocoin === '') return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocoin}&tsyms=${coin}&api_key=${apiKey}`;

      const response = await axios.get(url);

      //show spinner
      setLoading(true);

      //spinner life time
      setTimeout(() => {
        //hide spinner + store result
        setLoading(false);
        setResult(response.data.DISPLAY[cryptocoin][coin]);

      }, 3000);

    }

    tradeCrypto();
  
  }, [ cryptocoin, coin ]);

  //show spinner or return
  const conditionalComp = loading ? <Spinner /> : <Result result={result} />;

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

          {conditionalComp}
        </div>
      </div>
    </div>
  );
}

export default App;
