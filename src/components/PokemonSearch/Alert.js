import '../../styles/alert.scss'

export default function Alert({ text }) {
    return (
        <div className='alert'>
            {text}
        </div>
    )
}