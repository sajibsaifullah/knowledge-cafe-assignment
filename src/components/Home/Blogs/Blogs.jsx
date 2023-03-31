import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../../Blog/Blog";

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
      <div className="bg-red-400 col-span-3">
        <h2>This is side bar</h2>
      </div>
    </div>
  );
};

export default Blogs;
