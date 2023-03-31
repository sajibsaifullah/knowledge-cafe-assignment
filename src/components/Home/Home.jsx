import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100 flex flex-col md:flex-row">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-3xl font-bold">Knowledge Cafe</a>
        </div>
        <div className="flex-none gap-2">
          <div className="flex flex-row gap-4 text-blue-600 font-semibold">
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact Us</a>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/src/assets/profile-pic.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
