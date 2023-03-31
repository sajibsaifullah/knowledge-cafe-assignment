import React, { useState } from "react";

const Sidebar = ({ store, bookmark }) => {
  let watchTime = 0;
  for (const singleData of store) {
    watchTime = watchTime + singleData.readTime;
  }

  let countBookmark = 0;
    for (const singleBookmark of bookmark) {
        countBookmark = countBookmark + 1;
  }
  

  return (
    <div className="px-3">
      <div className="border border-indigo-400 bg-slate-100 rounded-md my-5">
        <h2 className="text-center text-xl font-semibold my-2 text-blue-800">
          Spent time on read: <span>{watchTime}</span> min
        </h2>
      </div>
      <div className="border border-indigo-200 bg-slate-100 rounded-md">
        <h2 className="text-xl font-semibold ms-3 mb-3">
          Bookmarked Blogs: <span>{countBookmark}</span>
        </h2>
        <div>
          {bookmark.map((b) => (
            <p className="text-2xl font-semibold px-4 my-2 mx-2 bg-slate-200 rounded-md">
              {b.blogTitle}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
