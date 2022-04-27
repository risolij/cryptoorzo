import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { useReducer, useEffect } from 'react';
import AppContext from './context/AppContext';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';

let initialState = {
  cryptos: [],
  news: [],
  backup: [],
}

function reducer(state, action) {
  switch(action.type) {
    case 'initialLoad':
      return { ...state, cryptos: action.payload, backup: action.payload }
    case 'initialNews':
      return { ...state, news: action.payload }
    default:
      return { ...state }
  }
}

function App() {
  let [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://api.coinstats.app/public/v1/coins')
      .then(res => res.json())
      .then(res => dispatch({ type: 'initialLoad', payload: res.coins }) );

    fetch('https://api.coinstats.app/public/v1/news/trending?skip=0')
      .then(res => res.json())
      .then(res => dispatch({ type: 'initialNews', payload: res.news}) );

  }, [] );

  return (
    <Router>
      <AppContext.Provider value={[state, dispatch]}>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/details/:rank"} element={<DetailsPage />} />
        </Routes>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
