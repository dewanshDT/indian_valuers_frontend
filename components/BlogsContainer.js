import Image from "next/image";
import travel from "../public/Travel.png";

const BlogsContainer = () => {
  return (
    <div className="blogsContainer">
      <h3>featured bolgs</h3>
      <div className="grid">
        {/* this will be rendered dynamically according to the to the data from the backend */}
        <GridItem
        type = {"travel"}
        title = {"Tibet travel tips Before you travel to Nepal"}
        bgLink={travel}
        />
      </div>
    </div>
  );
};

export default BlogsContainer;

const GridItem = ({title, bgLink, type}) => {
  return (
    <div className="gridItem">
      <Image src={bgLink} alt={title} />
      <div className="content">
        <h6>{type}</h6>
        <h5>{title}</h5>
      </div>
    </div>
  );
};
