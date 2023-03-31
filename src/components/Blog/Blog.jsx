import React from "react";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Blog = (props) => {
    const blog = props.blog;
    console.log(blog);
    

  return (
    <div className="single-card my-5 border border-indigo-200 rounded-lg p-2">
      <img
        className="cover-image mb-3"
        src={blog.images.blogCoverImage}
        alt=""
      />
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2">
          <img className="author-image" src={blog.images.authorImage} alt="" />
          <div>
            <h6 className="text-xl font-semibold">{blog.authorName}</h6>
            <p>{blog.publishDate}</p>
          </div>
        </div>
        <p>
          <span>0</span> min read <FontAwesomeIcon icon={faBookmark} />
        </p>
      </div>
      <h1 className="text-3xl font-bold my-3">{blog.blogTitle}</h1>
      <p className="mb-2">#beginners &nbsp; &nbsp; #programming</p>
      <a href="#">Mark as read</a>
    </div>
  );
};

export default Blog;
