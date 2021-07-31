import { useSelector } from 'react-redux'
import Loader from '../Loader.js'
import ResultCard from './ResultCard.js'

export default function SearchRresult() {
    const loader = useSelector(state => state.searchLoader)

    return (
        <div className='result'>
            {loader ? <Loader /> : <ResultCard />}
        </div>
    )
}