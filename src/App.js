import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { useReducer, useEffect } from 'react';
import AppContext from './context/AppContext';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import PreferencesPage from './pages/PreferencesPage';

let initialState = {
  cryptos: [],
  news: [],
  preferences: [],
  backup: [],
}

function reducer(state, action) {
  switch(action.type) {
    case 'initialLoad':
    return { ...state, cryptos: action.payload.slice(0,20), preferences: action.payload, backup: action.payload }

    case 'initialNews':
      return { ...state, news: action.payload }

    case 'handleThumbCount':
      return { ...state, news: state.news.map(n => n.id === action.payload.id ? action.payload : n )}

    case 'filterAssets':
      return { ...state, preferences: state.backup.filter(crypto => crypto.id.includes(action.payload)) }

    case 'handleChecked':
      return { ...state, preferences: state.preferences.map(c => c.id === action.payload.id ? action.payload : c )}

    case 'updateHomePage':
      if (state.preferences.filter(c => c.checked).length === 0) {
        return {...state, cryptos: state.backup.slice(0,20) }
      } else {
        return { ...state, cryptos: state.preferences.filter(c => c.checked)}
      }
    default:
      return { ...state }
  }
}

function App() {
  let [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://api.coinstats.app/public/v1/coins?limit=2000')
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
          <Route path={"/preferences"} element={<PreferencesPage />} />
        </Routes>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
