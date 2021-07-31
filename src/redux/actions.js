import { CATCH_EM_ALL, CLOSE_MODAL, HIDE_ALERT, HIDE_LOADER, LOAD_POKEMON, LOAD_SEARCHED_POKEMON, SEARCH_LOADER, SET_TARGET_POKEMON, SHOW_ALERT, SHOW_LOADER, SHOW_MODAL } from "./types"

export function catchEmAll(url) {
    return async dispatch => {
        dispatch(showLoader())
        const response = await fetch(url)
        const json = await response.json()
        dispatch({ type: CATCH_EM_ALL, payload: json })
        dispatch(hideLoader())
    }
}

export function showLoader() {
    return { type: SHOW_LOADER }
}

export function hideLoader() {
    return { type: HIDE_LOADER }
}

export function loadPokemon(url, pokemonName) {
    return async dispatch => {
        const response = await fetch(url)
        const json = await response.json()
        dispatch({ type: LOAD_POKEMON, payload: json, pokemonName })
    }
}

export function showModal() {
    return { type: SHOW_MODAL }
}

export function closeModal() {
    return { type: CLOSE_MODAL }
}

export function setTargetPokemon(payload) {
    return { type: SET_TARGET_POKEMON, payload: payload }
}

export function loadSeachedPokemon(targetPokemon) {
    return async dispatch => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${targetPokemon}`)
            const json = await response.json()
            dispatch({ type: LOAD_SEARCHED_POKEMON, payload: json })
            dispatch(toggleSearchLoader(false))
        } catch (e) {
            dispatch(showAlert('Что-то пошло не так'))
            dispatch(toggleSearchLoader(true))
        }
    }
}

export function showAlert(text) {
    return async dispatch => {
        dispatch({ type: SHOW_ALERT, payload: text })

        setTimeout(() => {
            dispatch(hideAlert())
        }, 2000)
    }
}

export function hideAlert() {
    return { type: HIDE_ALERT }
}

export function toggleSearchLoader(payload) {
    return { type: SEARCH_LOADER, payload: payload }
}