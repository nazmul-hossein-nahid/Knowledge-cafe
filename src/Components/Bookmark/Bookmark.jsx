import React, { useState } from "react";

const Bookmark = ({ bookmark }) => {
    
  return (
    <div className="border-2 col-span-1">
      <h1 className="text-2xl font-bold text-center mt-5">BookMark</h1>
      {
       bookmark.map(book => <h2 key={book.id} className="text-xl font-bold">{book.title}</h2>)
      }
    </div>
  );
};

export default Bookmark;
