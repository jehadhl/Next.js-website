

import styles from "../scss/Footer.module.scss"
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <>
        <section className={styles.footer}>
            <div className={styles.iamge}>
            <Image src="/static/images/circle.png" width={600} height={500} className={styles.absolute}/>
            </div>
        <div className={styles.row1}>
            <h1 className={styles.h1}>
            493 Businesses! Create 
                <br/>
            Your Bank Account Now
            </h1>
            <p className={styles.p}>What’s next in Aila Bank?<u>Learn More</u></p>
            <div className={styles.button}>
            <Link href={""}>
                <a className={styles.link}>
                Create Your Account
                </a>
            </Link>
            </div>
        </div>
        </section>
        <footer className={styles.row2}>
                <div className={styles.image}>
                <Image src="/static/images/circle.png" width={600} height={500} className={styles.absolute2}/>
                </div>

                <div className={styles.container}>
                     <div className={styles.footerwrap}>
                        <div className={styles.col1}>
                          <Image src="/static/logos/logo-white.png" width={164} height={55}/>
                           <p className={styles.p}>
                           quisquam est qui dolorem aliquam quaerat luptatem. sed do eiusmod tempor inc
                            quisquam est qui dolorem aliquam quaerat luptatem.   
                            sed do eiusmod tempor inc
                           </p>
                        </div>
                        <div className={styles.col}>
                           <div className={styles.footercontenttitle}>
                             <h3 className={styles.h3}>Support</h3>
                            </div>
                            <ul className={styles.ul}>
                                <li  className={styles.li}><a className={styles.link}>FAQ&apos;s</a></li>
                                <li  className={styles.li}><a className={styles.link}>Privacy Policy</a></li>
                                <li  className={styles.li}><a className={styles.link}>Terms & Conditions</a></li>
                                <li  className={styles.li}><a className={styles.link}>Blogs</a></li>
                                <li  className={styles.li}><a className={styles.link}>Contact Us</a></li>
                            </ul>
                        </div>
                        <div className={styles.col}>
                        <div className={styles.footercontenttitle}>
                             <h3 className={styles.h3}>Company</h3>
                            </div>
                            <ul className={styles.ul}>
                                <li  className={styles.li}><a className={styles.link}>About Us</a></li>
                                <li  className={styles.li}><a className={styles.link}>Services</a></li>
                                <li  className={styles.li}><a className={styles.link}>Features</a></li>
                                <li  className={styles.li}><a className={styles.link}>Our Pricing</a></li>
                                <li  className={styles.li}><a className={styles.link}>Blogs</a></li>
                            </ul>
                        </div>
                        <div className={styles.col}>
                        <div className={styles.footercontenttitle}>
                             <h3 className={styles.h3}>Support</h3>
                            </div>
                            <ul className={styles.ul}>
                                <li  className={styles.li}><a className={styles.link}>Address: 456 Labisto Parkways, CA, United States</a></li>
                                <li  className={styles.li}><a className={styles.link}>Message: info@alia.com</a></li>
                                <li  className={styles.li}><a className={styles.link}>Terms & Conditions</a></li>
                                <li  className={styles.li}><a className={styles.link}>Phone: (+00) 678 345 98</a></li>
                                <li  className={styles.li}><a className={styles.link}>Faq: +(456) 332-897-234</a></li>
                            </ul>
                        </div>
                     </div>
                     <div className={styles.copy}>
                            <h4 className={styles.h4}>
                            Copyright @2022 Design & Developed by <u>jehad</u>
                            </h4>
                            <div className={styles.icons}>
                               <Image src="/static/images/facebook.png" width={25} height={25} className={styles.image1}/>
                               <Image src="/static/images/instagram.png" width={25} height={25} className={styles.image1}/>
                               <Image src="/static/images/pinterest.png" width={25} height={25} className={styles.image1}/>
                               <Image src="/static/images/youtube.png" width={25} height={25} className={styles.image1}/>
                            </div>
                    </div>
                </div>
        </footer>
  </>
  )
}

export default Footer
