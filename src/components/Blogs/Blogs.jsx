import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import Sidebar from "../Sidebar/Sidebar";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [store, setStore] = useState([]);
  const [bookmark, setBookmark] = useState([]);

  useEffect(() => {
    fetch("assignmentFakeData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleSidebar = (blog) => {
    const newStore = [...store, blog];
    setStore(newStore);
  };

  const handleBookmark = (blog) => {
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);
  };

  return (
    <div className="lg:grid grid-cols-9 gap-4 container mx-auto mt-5">
      <div className="col-span-6">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleSidebar={handleSidebar}
            handleBookmark={handleBookmark}
          ></Blog>
        ))}
      </div>
      <div className="col-span-3">
        <Sidebar store={store} bookmark={bookmark}></Sidebar>
      </div>
    </div>
  );
};

export default Blogs;
