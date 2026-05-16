import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Nav = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const activeClass = "bg-white text-green-600 px-3 py-2 font-bold";
  const inactiveClass = isHome ? "text-white px-3 py-2" : "px-3 py-2";

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="Start-Learning"
          className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
        >
          Start Learning
        </NavLink>
      </li>
      <li>
        <NavLink
          to="tutorials"
          className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
        >
          Tutorials
        </NavLink>
      </li>
      <li>
        <NavLink
          to="about-us"
          className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  const { user, logOut } = useContext(AuthContext);
  console.log("User Photo:", user?.photoURL);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center">
          <img className="w-12" src="/Lingo-Bingo-Logo.svg" alt="LB" />
          <a className="btn btn-ghost pr-4 text-xl font-bold">Lingo Bingo</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-2">
        {user && user?.email ? (
          <div className="flex flex-col md:flex-row items-center gap-2">
            <img
              className="w-10 h-10 rounded-full object-cover border border-green-500"
              src={user?.photoURL || "https://cdn-icons-png.flaticon.com/512/9131/9131529.png"}
              alt=""
            />{" "}
            <p>{user.displayName}</p>
          </div>
        ) : (
          <img className="w-10 h-10 rounded-full object-cover border border-green-500" src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="pp" />
        )}
        {user && user?.email ? (
          <button
            onClick={logOut}
            className="btn bg-white rounded-lg text-green-600"
          >
            Log Out
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn bg-white rounded-lg text-green-600"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
