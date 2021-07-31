import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { catchEmAll, showLoader } from "../redux/actions"
import Loader from "./Loader"
import MainNavButtons from "./MainNavButtons"
import Pokemon from "./Pokemon"
import '../styles/pokelist.scss'

export default function PokeList() {
    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemons.results)
    const loader = useSelector(state => state.listLoader)

    useEffect(() => {
        dispatch(catchEmAll('https://pokeapi.co/api/v2/pokemon'))

        return (
            dispatch(showLoader())
        )
    }, [dispatch])

    if (loader) {
        return <Loader />
    } else {
        return (
            <div className='pokedex'>
                <MainNavButtons />
                <ul className='list'>
                    {pokemons.map((pokemon, index) => <Pokemon name={pokemon.name} url={pokemon.url} key={index} />)}
                </ul>
                <MainNavButtons />
            </div>
        )
    }
}

