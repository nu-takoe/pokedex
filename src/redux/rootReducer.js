import { CATCH_EM_ALL, CLEAR_POKEMONS, CLOSE_MODAL, LOAD_SEARCHED_POKEMON, HIDE_LOADER, LOAD_POKEMON, SET_TARGET_POKEMON, SHOW_LOADER, SHOW_MODAL, SEARCH_LOADER, SHOW_ALERT, HIDE_ALERT } from "./types"

const initialState = {
    pokemons: [],
    targetPokemon: {},
    loadedPokemons: {},
    listLoader: true,
    modal: false,
    searchPokemon: {},
    searchLoader: true,
    alert: null,
    test: null,
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case CATCH_EM_ALL:
            return { ...state, pokemons: action.payload }

        case SHOW_LOADER:
            return { ...state, listLoader: true }

        case HIDE_LOADER:
            return { ...state, listLoader: false }

        case LOAD_POKEMON:
            return { ...state, loadedPokemons: { ...state.loadedPokemons, [`${action.pokemonName}`]: action.payload } }

        case CLEAR_POKEMONS:
            return { ...state, loadedPokemons: {} }

        case SHOW_MODAL:
            return { ...state, modal: true }

        case CLOSE_MODAL:
            return { ...state, modal: false }

        case SET_TARGET_POKEMON:
            return { ...state, targetPokemon: action.payload }

        case LOAD_SEARCHED_POKEMON:
            return { ...state, searchPokemon: action.payload }

        case SEARCH_LOADER:
            return { ...state, searchLoader: action.payload }

        case SHOW_ALERT:
            return { ...state, alert: action.payload }

        case HIDE_ALERT:
            return { ...state, alert: null }

        default:
            return state
    }
}