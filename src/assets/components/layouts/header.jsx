import { Link, NavLink } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        // <a className="active" href="/">Home</a> => gây reload
        // <ul> <li><Link className="active" to="/">Home</Link></li> <li><Link to="/users">Users</Link></li> <li><Link to="/products">Products</Link></li></ul>


        <ul> <li><NavLink to="/">Home</NavLink></li> <li><NavLink to="/users">Users</NavLink></li> <li><NavLink to="/products">Products</NavLink></li></ul>
    );
}

export default Header