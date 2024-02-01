import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";

const Navbar = () => {
    const history = useHistory();

    const handleLogout = () => {
        history.push('');
        // sessionStorage.clear();
        localStorage.clear();
        window.location.reload(true);
    }

    return (  
        <nav className="navbar">
            <h1>BlogStation</h1>
            <div className="links">
                <Link to="/" >Home</Link>
                <Link to="/create">New Blog</Link>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    );
}
 
export default Navbar;