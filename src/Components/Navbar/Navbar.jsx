import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { BsFillCartCheckFill } from 'react-icons/bs';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };
  return (
    <nav className="lg:flex lg:justify-between sticky justify-center p-6 bg-slate-200 bg-rounded mb-5">
      <div>
        <h2 className="text-5xl font-bold text-center text-">
          ETechShop <span className="text-rose-700">.</span>{" "}
        </h2>
      </div>
     
        <div className="flex flex-center gap-6 items-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        {
            user && (<>
             <li className="list-none">
              <NavLink to="/addproduct">Add Product </NavLink>
              </li>
             <li className="list-none flex">
            <NavLink to="/mycart"> <div className="flex items-center gap-1"><div>My cart</div> <div><BsFillCartCheckFill></BsFillCartCheckFill></div></div> </NavLink>
          </li>
         
          </>)
        }
        </div>

        <div className="flex gap-6">
          {user ? (
            <>
              {" "}
              <img
                className="h-[50px] w-[50px] rounded-full"
                src={user.photoURL}
                alt=""
              />{" "}
            </>
          ) : (
            <FaUserCircle className="h-[50px] w-[50px]"></FaUserCircle>
          )}
          {user ? (
            <div className="text-slate-700 font-semibold">
              {user.displayName}
            </div>
          ) : (
            <></>
          )}

          {user ? (
            <button
              onClick={handleLogOut}
              className="btn bg-blue-700 text-white"
            >
              Sign Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn bg-blue-700 text-white">Log in</button>
            </Link>
          )}
        </div>
    </nav>
  );
};

export default Navbar;
