import Image from "next/image";

export default function VertGrid({ title, list }) {
  return (
    <div className="blogsContainer">
      <h3>{title}</h3>
      <div className="grid vert">
        {list?.map((blog) => (
          <div className="blogPreview">
            <div className="preview">
              <Image src={blog?.bgLink} />
            </div>
            <div className="blogContent">
              <div className="blogType">{blog?.type}</div>
              <div className="blogTitle">{blog?.title}</div>
              <div className="blogAbout">{blog?.about}</div>
              <div className="blogAuthor">By {blog?.author}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
