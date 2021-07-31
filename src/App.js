import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Modal from './components/Modal';
import PokeList from './components/PokeList';
import PokeSearch from './components/PokemonSearch/PokeSearch'

function App() {
  const modal = useSelector(state => state.modal)

  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Switch>
          <Route exact path='/' component={PokeList} />
          <Route path='/pokesearch' component={PokeSearch} />
        </Switch>
        {modal && <Modal />}
      </div>
    </BrowserRouter>
  );
}

export default App;
