import { useState } from 'react';
import BlogList from './BlogList';
let id = 0;
let initialBlogs = [];
function BlogCreate() {
  //   console.log(id);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [blogs, setBlogs] = useState(initialBlogs);

  const handleBlog = (e) => {
    e.preventDefault();
    setBlogs([...blogs, { id: id++, title, content }]);
    setTitle('');
    setContent('');
    // console.log(id);
  };

  const removeBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id != id));
  };

  return (
    <>
      <h1>Write a Blog!</h1>

      <div className="section">
        <form onSubmit={handleBlog}>
          <label className="Title label">
            Title
            <input
              className="input"
              type="text"
              value={title}
              placeholder="Enter the title here..."
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="Content label">
            Content
            <textarea
              className="input content"
              type="text"
              value={content}
              placeholder="Content goes here..."
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </label>
          <button type="submit" className="btn">
            Add
          </button>
        </form>
      </div>
      <hr></hr>
      <h2 className="heading">Blogs</h2>
      <BlogList blogs={blogs} removeBlog={removeBlog} />
    </>
  );
}

export default BlogCreate;