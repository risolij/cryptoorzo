import { useContext } from 'react';
import AppContext from '../context/AppContext';
import CondCoin from './CondCoin';
import '../styles/preferences.css'

export default function CondCryptoList() {
    let [state] = useContext(AppContext);

    return (
        <main className="preferences_grid">
            {
                state.preferences.map((crypto, index) => <CondCoin key={index} crypto={crypto} />)
            }
        </main>

    )

}
