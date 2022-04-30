import { Form, FormControl } from 'react-bootstrap';
import '../styles/search_bar.css'
import { useState, useContext } from 'react';
import AppContext from '../context/AppContext';


export default function SearchBar() {
    let [userInput, updateUserInput] = useState();
    let [ , dispatch ] = useContext(AppContext);

    let handleChange = (e) => {
        updateUserInput(e.target.value);
        dispatch( {type: 'filterAssets', payload: e.target.value} )
    }

    return (
            <Form className="search_bar">
                <FormControl onChange={(e) => handleChange(e)} md="4" size="lg" type="input" placeholder="Find a coin"/>
            </Form>
    )

}
