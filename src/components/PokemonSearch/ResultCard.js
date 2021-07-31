import { useSelector } from "react-redux"
import { getFormatedName, getTypes, getTotal } from '../customFuncs.js'
import '../../styles/resultcard.scss'

export default function ResultCard() {
    const pokemon = useSelector(state => state.searchPokemon)

    return (
        <div className='result-card'>
            <img alt={pokemon.name} src={pokemon.sprites.other['official-artwork'].front_default} />
            <h2>{getFormatedName(pokemon.name)}</h2>
            <div>
                <div className='card-info'>
                    <p><strong>Тип:</strong> {getTypes(pokemon)}</p> <p><strong>Total Stats:</strong> {getTotal(pokemon)}</p>
                </div>

                <div className='card-info'>
                    <p><strong>Рост:</strong> {pokemon.height / 10}м.</p> <p><strong>Вес:</strong> {pokemon.weight / 10}кг.</p>
                </div>
            </div>
        </div>


    )
}
