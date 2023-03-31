import React, { useState } from "react";

const Sidebar = ({store}) => {

    // const store = props.store;
    // console.log(store);
    let watchTime = 0;
    for (const singleData of store) {
        watchTime = watchTime + singleData.readTime;
    }
    

   
    // const getWatchTime = localStorage.getItem('watchTime');
    
  return (
    <div className="px-3">
      <div className="border border-indigo-400 bg-slate-100 rounded-md my-5">
        <h2 className="text-center text-xl font-semibold my-2 text-blue-800">
                  Spent time on read: <span>{watchTime}</span> min
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
