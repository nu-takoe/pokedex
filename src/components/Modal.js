import { useDispatch, useSelector } from 'react-redux'
import { getFormatedName, getTotal, getTypes } from './customFuncs.js'
import { closeModal, setTargetPokemon } from '../redux/actions'
import '../styles/modal.scss'

export default function Modal() {
    const dispatch = useDispatch()
    const pokemon = useSelector(state => state.targetPokemon)

    function exitModal() {
        dispatch(closeModal())
        let body = document.querySelector('body')
        body.className = ''
        dispatch(setTargetPokemon({}))
    }

    return (
        <div className='modal-block' onClick={exitModal}>
            <div className='modal' onClick={e => e.stopPropagation()}>
                <div className='modal-pokemon-card'>
                    <img alt={pokemon.name} src={pokemon.sprites.other.dream_world.front_default} />
                    <h2>{getFormatedName(pokemon.name)}</h2>
                    <div className='card-info'>
                        <div>
                            <p><strong>Тип:</strong> {getTypes(pokemon)}</p>
                            <p><strong>Total Stats:</strong> {getTotal(pokemon)}</p>
                        </div>

                        <div>
                            <p><strong>Рост:</strong> {pokemon.height / 10}м.</p>
                            <p><strong>Вес:</strong> {pokemon.weight / 10}кг.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}