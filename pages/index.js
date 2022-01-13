import Head from "next/head";
import Banner from "../components/Banner";
import BlogGrid from "../components/BlogGrid";
import BlogsContainer from "../components/BlogsContainer";
import "../styles/Home.module.css";
import miniBlog from "../public/MiniBlog.png";
import styles from "../styles/Home.module.css";

export default function Home() {
  const blogList = [
    {
      type: "tech",
      title: "Best VR Headset for PC & Gaming this year",
      time: "Jan 11, 2022",
      bgLink: miniBlog,
    },
    {
      type: "tech",
      title: "Best VR Headset for PC & Gaming this year",
      time: "Jan 11, 2022",
      bgLink: miniBlog,
    },
    {
      type: "tech",
      title: "Best VR Headset for PC & Gaming this year",
      time: "Jan 11, 2022",
      bgLink: miniBlog,
    },
    {
      type: "tech",
      title: "Best VR Headset for PC & Gaming this year",
      time: "Jan 11, 2022",
      bgLink: miniBlog,
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
      </div>
    </>
  );
}
