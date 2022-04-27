import { useContext } from 'react';
import AppContext from '../context/AppContext';
import Coin from './Coin';
import '../styles/home.css'

export default function CryptoList() {
    let [state, dispatch] = useContext(AppContext);

    return (
        <main className="home_grid">
            {
                state.cryptos.map((crypto, index) => <Coin key={index} crypto={crypto} />)
            }
        </main>

    )

}
