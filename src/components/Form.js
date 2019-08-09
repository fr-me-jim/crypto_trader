import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import Cryptocoin from './Cryptocoin';

const Form = () => {

    const apiKey = '4c9860b15116c2ce86b0dd62f2a3ca47665024f086e6b34f0d00025072109224';

    //state
    const [ cryptocoins, setCryptocoins ] = useState([]);
    const [ tradingCoin, setTradingCoin ] = useState('');
    const [ tradingCrypto, setTradingCrypto ] = useState('');
    const [ error, setError ] = useState(false);

    //api call
    useEffect(
        () => {

            const getAPIData = async () => {
                const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key=${apiKey}`;

                const response = await axios.get(url);

                //store data in state
                setCryptocoins(response.data.Data);
            }

            getAPIData();

        }, []
    );

    return (  
        <form>
            <div className="row">
                <label>Pick your Coin</label>
                <select 
                    name="" id=""
                    className="u-full-width"
                    onChange={ e => setTradingCoin(e.target.value) }
                >
                    <option value="">-- Select a coin --</option>
                    <option value="USD">US Dollar</option>
                    <option value="EUR">Euro</option>
                    <option value="NOK">Norwegian Coin</option>
                    <option value="GBP">Pound sterling</option>
                </select>
            </div>

            <div className="row">
                <label>Pick your CryptoCoin</label>
                <select 
                    name="" id=""
                    className="u-full-width"
                    onChange={ e => setTradingCrypto(e.target.value) }
                >   
                    <option value="">-- Select a cryptocoin --</option>
                    {cryptocoins.map(cryptocoin => (
                        <Cryptocoin 
                            key={cryptocoin.CoinInfo.Id}
                            cryptocoin={cryptocoin.CoinInfo}
                        />
                    ))}

                </select>
            </div>
        </form>
    );
}
 
export default Form;