import Image from "next/image";

export default function VertGrid({ title, list }) {
  return (
    <div className="blogsContainer">
      <h3>{title}</h3>
      <div className="grid vert">
        {list?.map((blog, index) => (
          <div className="blogPreview" key={index}>
            <div className="preview">
              <Image src={blog?.bgLink} alt={blog?.title} />
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
