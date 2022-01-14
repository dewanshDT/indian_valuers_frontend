import React from "react";
import Image from "next/image";

const BlogGrid = ({ title, list }) => {
  return (
    <div className="blogsContainer">
      <h3>{title}</h3>
      <div className="grid">
        {list?.map((blog, index) => {
          return (
            <GridItem blog={blog} key={index} />
          );
        })}
      </div>
    </div>
  );
};

const GridItem = ({blog, index}) => {
  return (
    <div className="gridItem small" key={index}>
      {blog?<Image src={blog?.bgLink} />:""}
      <div className="content">
        <h6>{blog?.type}</h6>
        <h5>{blog?.title}</h5>
        <p>{blog?.time}</p>
      </div>
    </div>
  );
};

export default BlogGrid;
