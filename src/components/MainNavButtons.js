import { useDispatch, useSelector } from "react-redux"
import { catchEmAll } from "../redux/actions"
import '../styles/mainnavbuttons.scss'

export default function MainNavButtons() {
    const dispatch = useDispatch()

    const next = useSelector(state => state.pokemons.next)
    const prev = useSelector(state => state.pokemons.previous)

    const viewNext = () => {
        if (next == null) {
            return
        } else {
            dispatch(catchEmAll(next))
        }
    }

    const veiwPrev = () => {
        if (prev == null) {
            return
        } else {
            dispatch(catchEmAll(prev))
        }
    }

    return (
        <div className='nav-btns'>
            <button onClick={veiwPrev}>Предыдущая страница</button>
            <button onClick={viewNext}>Следующая страница</button>
        </div>
    )
}