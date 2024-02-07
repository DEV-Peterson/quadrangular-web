import { Link } from "react-router-dom"

export default function Home(){
    return (
        <div>
            <p>teste</p>
            <Link to={'/login'}>ir para login</Link>
        </div>
    )
}