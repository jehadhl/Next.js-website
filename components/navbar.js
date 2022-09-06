import Link from 'next/link'
import styles from '../scss/Navbar.module.scss'
import Image from 'next/image'
import Button from './button'
import { useEffect, useRef, useState } from 'react'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import className from "classnames"



const Navbar = (props) => {
    const [fix , setFix] = useState(false)
     const [isMobile , setIsMobile] = useState(false)
    useEffect(()=> {

        const fixed = () => {
            if (window.scrollY >= 150 ){
                setFix(true)
            }
            else {
                setFix(false)
            }
        }
    
        window.addEventListener("scroll" , fixed)

    },[])

  return (
   <div className={fix ? styles.fixed : styles.header}>
        <Link href={props}>
            <a  className={styles.imageLogo}>
                <Image src={fix ? "/static/logos/logo.png" : "/static/logos/logo-white.png"   } width={155} height={54} className={styles.imageLogo}/>
            </a>
        </Link>
        

        <nav className={styles.navbar} >
            <ul className={isMobile ? styles.navLinkMobile : styles.navLink}>
                <li><Link href={""}><a>Home</a></Link></li>
                <li><Link href={""}><a>About Us</a></Link></li>
                <li><Link href={""}><a>Pages</a></Link></li>
                <li><Link href={""}><a>Features</a></Link></li>
                <li><Link href={""}><a>Pricing</a></Link></li>
                <li><Link href={""}><a>Blogs</a></Link></li>
                <li><Link href={""}><a>Contact Us</a></Link></li>
            </ul>
        </nav>

        <div className={styles.all}>
           <Button />
           <button className={styles.mobile} onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <AiOutlineClose/> : <HiOutlineMenuAlt3/>}
           </button>
        </div>
  </div>
  )
}

export default Navbar



