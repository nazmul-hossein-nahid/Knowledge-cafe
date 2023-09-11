import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handlAddBookMark}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <div className="col-span-2 mb-20">
        <div className="grid gap-10">
          {blogs.map((blog) => (
            <Blog 
            handlAddBookMark={handlAddBookMark}
            key={blog.id} 
            blog={blog}
            ></Blog>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
