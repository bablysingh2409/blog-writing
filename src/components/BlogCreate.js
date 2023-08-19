import { useState, useRef, useEffect } from 'react';
import BlogList from './BlogList';
import { db } from './firebaseInit';
import { collection, doc, setDoc, getDocs } from 'firebase/firestore';

let initialBlogs = [];
function BlogCreate() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [blogs, setBlogs] = useState(initialBlogs);
  const titleRef = useRef(null);

  const handleSubmitBlog = async (e) => {
    e.preventDefault();
    setBlogs([{ title, content }, ...blogs]);

    const docRef = doc(collection(db, 'blogs'));
    await setDoc(docRef, {
      title,
      content,
    });
    setTitle('');
    setContent('');
    titleRef.current.focus();
  };

  useEffect(() => {
    titleRef.current.focus();
    // let initialBlogsData = [];
    const getBlogData = async () => {
      const querySnapshot = await getDocs(collection(db, 'blogs'));
      const blog = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setBlogs(blog);
    };
    getBlogData();
  }, []);

  const removeBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id != id));
  };

  return (
    <>
      <h1>Write a Blog!</h1>

      <div className="section">
        <form onSubmit={handleSubmitBlog}>
          <label className="Title label">
            Title
            <input
              ref={titleRef}
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
