import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImage from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
    // console.log("user trying to logout");
    logOut()
      .then(() => {
        alert("you logout successfully");
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  return (
    <div className="flex justify-between items-center">
      <div className="font-bold">{user && user.email}</div>
      <div className="flex gap gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-4">
        <img
          className="w-12 h-12 rounded-full"
          src={`${user ? user.photoURL : userImage}`}
          alt=""
          srcset=""
        />
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary px-10">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
