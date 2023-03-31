import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import Sidebar from "../Sidebar/Sidebar";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("assignmentFakeData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="lg:grid grid-cols-9 gap-4 container mx-auto mt-5">
      <div className="col-span-6">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
      <div className="col-span-3">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default Blogs;
