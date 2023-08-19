import { useState, useRef, useEffect } from 'react';
import BlogList from './BlogList';
import { db } from './firebaseInit';
import { collection, doc, setDoc } from 'firebase/firestore';
// import { doc, setDoc } from 'firebase/firestore';

//const cityRef = doc(db, 'cities', 'BJ');
//setDoc(cityRef, { capital: true }, { merge: true });

let id = 0;
let initialBlogs = [];
function BlogCreate() {
  //   console.log(id);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [blogs, setBlogs] = useState(initialBlogs);
  const titleRef = useRef(null);

  const handleSubmitBlog = async (e) => {
    e.preventDefault();
    setBlogs([...blogs, { id: id++, title, content }]);

    // // Add a new document with a generated id.
    // const docRef = await addDoc(collection(db, 'blogs'), {
    //   title: title,
    //   content: content,
    // });
    // console.log('Document written with ID: ', docRef.id);

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
