import React from 'react';
import image from './cryptocoins.png';
import Form from './components/Form';

function App() {

  

  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <img src={image} alt="cryptocoins_image"/>
        </div>

        <div className="one-half column">
          <h1>Trade CryptoCoins Instantly</h1>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
