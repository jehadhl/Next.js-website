import styles from '../scss/Home.module.scss'
import Link from 'next/link'


const Hero = () => {
  return (
    
    <>
       <div className={styles.conatinerHero}>
         <h1 className={styles.titlehero}>
         Banking Is Now
        <br/>
         With Digital Equipments
         </h1>
            <p className={styles.subTitle}>
                The advantage of online banking is that you can pay bills superfast and your 
                account is automatically credited or debited for each dposit and payment
            </p>
            <button className={styles.Getstarted}>
                <Link href={""}>
                <a>
                    Get Started
                </a>
                </Link>
            </button>
       </div>
    </>
  )
}

export default Hero