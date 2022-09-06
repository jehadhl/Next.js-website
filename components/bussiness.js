import Link from "next/link"
import styles from  "../scss/Bussiness.module.scss"
import Image from "next/image"


const Bussiness = () => {
  return (
    <section className={styles.contaniner}>
        <div className={styles.fullbussines}>
            <div className={styles.col1}>
                  <h1 className={styles.h1}>
                  Made To Grow With Your
                  <br/>
                  Business
                  </h1>
                  <p className={styles.p}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  </p>
                  <p className={styles.p}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  </p>
                  <div className={styles.link}>
                    <Link href={""}>
                        <a>
                            get started
                        </a>
                    </Link>
                  </div>
            </div>
             <div className={styles.col2}>
                <div className={styles.flex}>
                    <Image src="/static/icons/home-3-service-1.png" width={48} height={48} alt=""/>
                    <h2 className={styles.h2}>Fully Safe And Secure</h2>
                    <p className={styles.p}>Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed deimod empor inddunt ut ualor sit amet</p>
                </div>
                <div className={styles.flex}>
                    <Image src="/static/icons/home-3-service-2.png" width={48} height={48} alt=""/>
                    <h2 className={styles.h2}>Fully Safe And Secure</h2>
                    <p className={styles.p}>Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed deimod empor inddunt ut ualor sit amet</p>
                </div>
                <div className={styles.flex}>
                    <Image src="/static/icons/home-3-service-3.png" width={48} height={48} alt=""/>
                    <h2 className={styles.h2}>Fully Safe And Secure</h2>
                    <p className={styles.p}>Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed deimod empor inddunt ut ualor sit amet</p>
                </div>
                <div className={styles.flex}>
                    <Image src="/static/icons/home-3-service-4.png" width={48} height={48} alt=""/>
                    <h2 className={styles.h2}>Fully Safe And Secure</h2>
                    <p className={styles.p}>Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed deimod empor inddunt ut ualor sit amet</p>
                </div>
            </div>
      </div>
    </section>
  )
}

export default Bussiness