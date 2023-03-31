import React from "react";

const Sidebar = () => {
  return (
    <div className="px-3">
      <div className="border border-indigo-400 bg-slate-100 rounded-md my-5">
        <h2 className="text-center text-xl font-semibold my-2 text-blue-800">
          Spent time on read: <span>0</span> min
        </h2>
      </div>
      <div className="border border-indigo-200 bg-slate-100 rounded-md">
        <h2 className="text-xl font-semibold ms-3 mb-3">
          Bookmarked Blogs: <span>0</span>
        </h2>
      </div>
    </div>
  );
};

export default Sidebar;
