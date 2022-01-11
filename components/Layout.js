import Nav from './Nav'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div >
        <main>
          
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout