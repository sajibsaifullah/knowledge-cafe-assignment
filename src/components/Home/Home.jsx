import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-green-100 flex flex-col md:flex-row rounded-lg">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-3xl font-bold">
            Knowledge Cafe
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="flex flex-row gap-6 text-blue-600 font-semibold pe-5">
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
