import React from "react"
import { useDispatch } from "react-redux"
import { loadSeachedPokemon, toggleSearchLoader } from "../../redux/actions";
import '../../styles/searchform.scss'

export default function SearchForm({ toggleInit }) {

    const [title, setTitle] = React.useState('')

    const dispatch = useDispatch()

    async function getPokemon(target) {
        await dispatch(toggleSearchLoader(true))
        await dispatch(loadSeachedPokemon(target))
    }

    function search(e) {
        e.preventDefault()
        if (title.trim() === '') {
            return
        } else {
            toggleInit()
            let target = title.toLowerCase().trim()
            getPokemon(target)
            setTitle('')
        }
    }

    function changeInputHandler(e) {
        setTitle(e.target.value)
    }

    return (
        <form onSubmit={search}>
            <input type='text' value={title} onChange={changeInputHandler} />
            <button type='submit'>Искать</button>
        </form>
    )
}