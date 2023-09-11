import React, { useState } from "react";
import Header from "../Header/Header";
import Blogs from "../Blogs/Blogs";
import Bookmark from "../Bookmark/Bookmark";

const Layout = () => {
  const [bookmark, setBookmark] = useState([]);

  const handlAddBookMark =(blog)=>{
    const newArray = [...bookmark,blog]
    setBookmark(newArray)
  }

  return (
    <>
      <Header></Header>
      <main className="grid grid-cols-3 gap-5 mt-10">
        <Blogs handlAddBookMark={handlAddBookMark}></Blogs>
        <Bookmark bookmark={bookmark}></Bookmark>
      </main>
    </>
  );
};

export default Layout;
