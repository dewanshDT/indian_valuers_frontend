import Nav from './Nav'
import styles from '../styles/Layout.module.css'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Nav />
        <main className={styles.main}>
          {children}
        </main>
      <Footer />
    </div>
  )
}

export default Layout