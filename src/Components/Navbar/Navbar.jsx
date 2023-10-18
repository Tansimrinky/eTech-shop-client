import {  NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="lg:flex lg:justify-between sticky justify-center ">
            <div>
                <h2 className="text-5xl font-bold text-center text-">ETechShop <span className="text-rose-700">.</span> </h2>
            </div>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
                
            </div>
        </nav>
    );
};

export default Navbar;