import bg from "../public/Rectangle.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="banner">
      <Image src={bg} alt="" />
      <div className="bannerContainer">
        <h1>
          What does it take to be an Indian Valuer? Ask the writers of this blog
        </h1>
        <button className="btnTransparent">read more</button>
      </div>
    </div>
  );
};

export default Banner;
