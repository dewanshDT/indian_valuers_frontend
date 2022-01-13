import Head from "next/head";
import Banner from "../components/Banner";
import BlogGrid from "../components/BlogGrid";
import BlogsContainer from "../components/BlogsContainer";
import "../styles/Home.module.css";
import miniBlog from "../public/MiniBlog.png";
import styles from "../styles/Home.module.css";
import VertGrid from "../components/VertGrid";
import aeroplane from '../public/Aeroplane.png';
import Subscribe from "../components/Subscribe";

export default function Home() {
  const editorsChoice = [
    {
      type: "tech",
      title: "Best VR Headset for PC & Gaming this year",
      time: "Jan 11, 2022",
      about: "aero is a mordern webflow blog template, eazy to use and fully responsive.",
      bgLink: aeroplane,
      author: "varul verma"
    },
  ];
  const posts = [
    {
      type: "tech",
      title: "Best VR Headset for PC & Gaming this year",
      time: "Jan 11, 2022",
      about: "aero is a mordern webflow blog template, eazy to use and fully responsive.",
      bgLink: aeroplane,
      author: "varul verma"
    },
    {
      type: "tech",
      title: "Best VR Headset for PC & Gaming this year",
      time: "Jan 11, 2022",
      about: "aero is a mordern webflow blog template, eazy to use and fully responsive.",
      bgLink: aeroplane,
      author: "varul verma"
    },
    {
      type: "tech",
      title: "Best VR Headset for PC & Gaming this year",
      time: "Jan 11, 2022",
      about: "aero is a mordern webflow blog template, eazy to use and fully responsive.",
      bgLink: aeroplane,
      author: "varul verma"
    },
  ]
  const blogList = [
    {
      type: "tech",
      title: "Best VR Headset for PC & Gaming this year",
      time: "Jan 11, 2022",
      bgLink: miniBlog,
      author: "varul verma"
    },
    {
      type: "tech",
      title: "Best VR Headset for PC & Gaming this year",
      time: "Jan 11, 2022",
      bgLink: miniBlog,
      author: "varul verma"
    },
    {
      type: "tech",
      title: "Best VR Headset for PC & Gaming this year",
      time: "Jan 11, 2022",
      bgLink: miniBlog,
      author: "varul verma"
    },
    {
      type: "tech",
      title: "Best VR Headset for PC & Gaming this year",
      time: "Jan 11, 2022",
      bgLink: miniBlog,
      author: "varul verma"
    },
  ];

  return (
    <>
      <Head>
        <title>Indian Valuers</title>
      </Head>
      <Banner />
      <div className={styles.home}>
        <BlogsContainer />
        <BlogGrid title="Tech" list={blogList} />
        <div className={styles.colSec}>
          <div className={styles.articles}>
            <VertGrid title="editor's choice" list={editorsChoice} />
            <VertGrid title="lastest posts" list={posts} />
          </div>
          <div className={styles.sidebar}>
            <Subscribe />
            <div className={styles.section}>
              <h4>
                About us                
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, corporis voluptates ipsum consequatur, aliquam recusandae, facere rem amet suscipit magnam dolor perferendis exercitationem velit architecto. Aperiam iste illum excepturi blanditiis.
              </p>
            </div>
            <div className={styles.section}>
              <h4>Topics</h4>
              <p>
              <span className={styles.tag}>Art</span>
              <span className={styles.tag}>nature</span>
              <span className={styles.tag}>adventure</span>
              <span className={styles.tag}>tech</span>
              <span className={styles.tag}>travel</span>
              <span className={styles.tag}>photo</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
