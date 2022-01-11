import Image from "next/image";
import logo from "../public/logo.svg";
import facebook from "../public/facebook.svg";
import twitter from "../public/twitter.svg";
import search from "../public/search.svg";
import instagram from "../public/instagram.svg";
import bg from "../public/Rectangle.png";
import styles from "../styles/Nav.module.css";

export const Nav = () => {
  return (
      <nav className={styles.navigation}>
          <div className={styles.menue}>
              <div className={styles.menueItem}>categories</div>
              <div className={styles.menueItem}>blogs</div>
              <div className={styles.menueItem}>about us</div>
          </div>

          <div className={styles.logo}>
              <Image src={logo} />
          </div>

          <div className={styles.menue}>
              <div className={styles.menueItem}><Image src={search} /></div> 
              <div className={styles.menueItem}><Image src={instagram} /></div> 
              <div className={styles.menueItem}><Image src={facebook} /></div> 
              <div className={styles.menueItem}><Image src={twitter} /></div> 
          </div>
      </nav>
  )
};

export default Nav;
