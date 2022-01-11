import Head from 'next/head'
import Banner from '../components/Banner'
import BlogsContainer from '../components/BlogsContainer'
import '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='home'>
      <Head>
        <title>Indian Valuers</title>
      </Head>
      <Banner />
      <BlogsContainer />
    </div>
  )
}
