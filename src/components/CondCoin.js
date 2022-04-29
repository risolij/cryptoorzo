import Card from 'react-bootstrap/Card';
import '../styles/condcoin.css';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function CondCoin({crypto}) {
    let [ state, dispatch ] = useContext(AppContext);
    let handleChecked = () => {
        crypto.checked = !crypto.checked;
        dispatch({type: 'handleChecked', payload: crypto})
        dispatch({type: 'updateHomePage', payload: crypto})
    }

    let checkedClass;
    state.preferences.find(c => c.id === crypto.id).checked
        ? checkedClass = "cond_coin checked"
        : checkedClass = "cond_coin"

    return (
        <Card onClick={handleChecked} className={checkedClass} bg="light">
            <Card.Img src={crypto.icon}></Card.Img>
        </Card>
    )

}
