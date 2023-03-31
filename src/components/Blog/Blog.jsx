import React from "react";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Blog = (props) => {
  const blog = props.blog;
    const handleSidebar = props.handleSidebar;
    const handleBookmark = props.handleBookmark;

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
            <h6 className="font-bold">{blog.authorName}</h6>
            <p>{blog.publishDate}</p>
          </div>
        </div>
        <p>
          {blog.readTime} min read &nbsp;
          <a onClick={() => handleBookmark(props.blog, props.blog.id)} className="hover:cursor-pointer">
            <FontAwesomeIcon icon={faBookmark} />
          </a>
        </p>
      </div>
      <h1 className="text-3xl font-bold my-3">{blog.blogTitle}</h1>
      <p className="mb-2">#beginners &nbsp; &nbsp; #programming</p>
      <a onClick={() => handleSidebar(props.blog)} className="hover:cursor-pointer">
        Mark as read
      </a>
    </div>
  );
};

export default Blog;
