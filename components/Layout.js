import Nav from './Nav'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Nav />
        <main className={styles.main}>
          {children}
        </main>
    </div>
  )
}

export default Layout