import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import Sidebar from "../Sidebar/Sidebar";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [store, setStore] = useState([])
  // const [watchTime, setWatchTime] = useState();

  useEffect(() => {
    fetch("assignmentFakeData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  // const handleSidebar = (time) => {
  //   const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
  //   if (previousWatchTime) {
  //     const total = previousWatchTime + time;
  //     localStorage.setItem("watchTime", total);
  //     // setWatchTime(total);
  //   } else {
  //     localStorage.setItem("watchTime", time);
  //     // setWatchTime(time);
  //   }
  // };
  const handleSidebar = (blog) => {
    const newStore = [...store, blog];
    setStore(newStore)
}


  return (
    <div className="lg:grid grid-cols-9 gap-4 container mx-auto mt-5">
      <div className="col-span-6">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} handleSidebar={handleSidebar}></Blog>
        ))}
      </div>
      <div className="col-span-3">
        <Sidebar store={store}></Sidebar>
      </div>
    </div>
  );
};

export default Blogs;
