import { Link } from 'react-router-dom'

export const NavBar = () => {
    return(
        <div>
            <Link to="/users">Users   </Link> | 
            <Link to="/articles">    Articles    </Link> | 
            <Link to="/topics">    Topics</Link>
        </div>
    )
}