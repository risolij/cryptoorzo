import { useContext } from 'react';
import AppContext from '../context/AppContext';
import CondCoin from './CondCoin';
import '../styles/preferences.css'

export default function CondCryptoList() {
    let [state, dispatch] = useContext(AppContext);

    return (
        <main className="preferences_grid">
            {
                state.backup.map((crypto, index) => <CondCoin key={index} crypto={crypto} />)
            }
        </main>

    )

}
