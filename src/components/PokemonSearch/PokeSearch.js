import React from 'react'
import { useSelector } from 'react-redux';
import Alert from './Alert';
import InitSearch from './InitSearch';
import SearchForm from "./SearchForm";
import SearchRresult from './SearchResult';
import '../../styles/pokesearch.scss'


export default function PokeSearch() {

    const alert = useSelector(state => state.alert)

    const [init, setInit] = React.useState(true)

    function toggleInit() {
        setInit(false)
    }

    return (
        <div className='poke-search'>
            {alert && <Alert text={alert} />}
            <SearchForm toggleInit={toggleInit} />
            {init ? <InitSearch /> : <SearchRresult />}
        </div>
    )
}