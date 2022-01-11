import Image from 'next/image'
import logo from '../public/logo.svg'
import facebook from '../public/facebook.svg'
import twitter from '../public/twitter.svg'
import search from '../public/search.svg'
import instagram from '../public/instagram.svg'
import bg from '../public/Rectangle.png'
import navbarStyles from '../styles/Nav.module.css'

export const Nav = () => {
    return (
       <div className={navbarStyles.rec} >
           <div className={navbarStyles.Nav}>
                <div className={navbarStyles.menu}>
                <span className={navbarStyles.categories}>
                    Categories
                    </span>    
                    
                <span className={navbarStyles.blogs}>
                    Blogs
                    </span>    

                    
                <span className={navbarStyles.about}>
                    About Us
                    </span>    
                 </div>  
                 
                 <div className={navbarStyles.logo}>
                     <Image src={logo} />
                 </div>

                <div className={navbarStyles.social}>
                    <Image src={twitter} />
                    <Image src={facebook} />
                    <Image src={instagram} />
                    <Image src={search} /> 
                </div>
                
            </div>
            
            <div className={navbarStyles.button}>
                 <p className={navbarStyles.btext}>
                     READ MORE
                 </p>
            </div>
              

            <div className={navbarStyles.banner}>
                <p className={navbarStyles.text}>
                What does it take to be an Indian Valuer ? Ask the writers’ of this blog
                </p>
                
                <Image src={bg} className={bg} />
            </div> 
            
     </div>      
    )
}

export default Nav