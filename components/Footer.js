import styles from '../styles/Layout.module.css'
import logo from '../public/logo.svg'
import Image from 'next/image'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.content}>
                <section>
                    <Image src={logo} alt="logo" />
                    <p>Indian valuers is a industrial blogging website for curious readers and bloggers.</p>
                </section>
                <section>
                    <ul>
                        <li><b>MENUE</b></li>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>FAQ</li>
                    </ul>
                    <ul>
                        <li><b>CATEGORIES</b></li>
                        <li>Technologies</li>
                        <li>Adventures</li>
                        <li>Photography</li>
                    </ul>
                    <ul>
                        <li><b>SOCIAL</b></li>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </ul>

                </section>
            </div>
            <div className={styles.content}>
                <p>Other details to be added in the footer | Phone No. | Address | Names ETC</p>
            </div>
        </div>
    ) 
}