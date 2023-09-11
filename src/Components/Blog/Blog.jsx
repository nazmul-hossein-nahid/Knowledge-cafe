import PropTypes from "prop-types";
import { FaBeer } from 'react-icons/fa';
const Blog = ({ blog, handlAddBookMark }) => {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={cover} />
        </figure>
        <div className="p-8">
          <div className="flex justify-between items-center mb-3">
            <div className="flex gap-6 items-center">
              <img className="w-14" src={author_img} alt="" />
              <div>
                <h3 className="text-2xl font-bold">{author}</h3>
                <p>{posted_date}</p>
              </div>
            </div>
            <div>
              <p>{reading_time} min read <button onClick={()=>handlAddBookMark(blog)} className="text-red-500 text-2xl"><FaBeer /></button> </p>
            </div>
          </div>
          <h2 className="text-5xl font-bold">{title}</h2>
          <p className="mt-5">
            {hashtags.map((tag, idx) => (
              <span key={idx} className="mr-4 text-gray-500">
                <a href="">#{tag}</a>{" "}
              </span>
            ))}
          </p>
          <button
            
            className="text-blue-500 underline mt-3"
          >
            <a href="">Mark as read</a>
          </button>
        </div>
      </div>
    </>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handlAddBookMark: PropTypes.func.isRequired,

};

export default Blog;
