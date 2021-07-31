import { NavLink } from 'react-router-dom'
import '../styles/header.scss'

export default function Header() {
    return (
        <div className='header'>
            <ul className='nav'>
                <li><NavLink className='nav-link' to='/'>ПокеСписок</NavLink></li>
                <li><NavLink className='nav-link' to='/pokesearch'>ПокеПоиск</NavLink></li>
            </ul>
        </div>
    )
}