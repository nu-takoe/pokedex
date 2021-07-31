import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadPokemon, setTargetPokemon, showModal } from '../redux/actions'
import { getFormatedName } from './customFuncs.js'
import '../styles/pokemon.scss'

export default function Pokemon(props) {
    const dispatch = useDispatch()
    const pokemon = useSelector(state => state.loadedPokemons[`${props.name}`])

    let renderPokemon = useCallback(() => {
        async function anotherFunc() {
            await dispatch(loadPokemon(props.url, props.name))
        }
        anotherFunc()
    }, [dispatch, props.name, props.url])

    useEffect(() => {
        renderPokemon()

    }, [renderPokemon])

    function card() {
        return (
            <div>
                <img alt={pokemon.name} src={pokemon.sprites.other['official-artwork'].front_default} />
                <h2>{getFormatedName(pokemon.name)}</h2>
            </div>
        )
    }

    function emptyCard() {
        return (
            <div>
            </div>
        )
    }

    function viewModal(pokemon) {
        dispatch(setTargetPokemon(pokemon))
        dispatch(showModal())
        let body = document.querySelector('body')
        body.className = 'of-hidden'
    }

    return (
        <div className='pokemon-card' onClick={() => viewModal(pokemon)}>
            {pokemon === undefined ? emptyCard() : card()}
        </div>
    )
}