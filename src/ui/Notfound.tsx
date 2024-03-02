import { Link } from "react-router-dom"

function Notfound() {
    return (
        <div className='text-center py-32'>
            <h1 className='text-3xl font-bold py-4'>Page Not Found!</h1>
            <h2 className='text-gray-400 font-bold mb-6'>404</h2>
            <Link className="underline text-green-400" to='/'>Back To Home</Link>
        </div>
    )
}

export default Notfound
