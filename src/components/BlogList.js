import React from 'react';
import BlogCreate from './BlogCreate';

function BlogList({ blogs, removeBlog }) {
  if (blogs.length == 0) {
    return;
  } else {
    return (
      // <div className="blog-container section">
      <ul className="blogs">
        {blogs.map((blog, i) => (
          <li key={i} className="blog section">
            <h2 className="blog-head">{blog.title}</h2>
            <p className="blog-content">{blog.content}</p>
            <button onClick={() => removeBlog(blog.id)} className="blog-remove">
              Delete
            </button>
          </li>
        ))}
      </ul>
      // </div>
    );
  }
}

export default BlogList;
