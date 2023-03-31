import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import Sidebar from "../Sidebar/Sidebar";
import Swal from 'sweetalert';

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

  const handleBookmark = (blog, id) => {
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);


    const previousBookmark = JSON.parse(localStorage.getItem("bookmark"));
    let bookmarked = [];
    if (previousBookmark) {
      const isBookmarked = previousBookmark.find((b) => b.id == id);
      console.log(isBookmarked);
      if (isBookmarked) {
        Swal({
          title: 'Alert!',
          text: 'already bookmakred.',
          icon: 'error',
          confirmButtonText: 'OK'
        });


      } else {
        bookmarked.push(...previousBookmark, blog);
        localStorage.setItem("bookmark", JSON.stringify(bookmarked));
      }
    } else {
      bookmarked.push(blog);
      localStorage.setItem("bookmark", JSON.stringify(bookmarked));
    }
    
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
