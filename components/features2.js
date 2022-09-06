import styles from "../scss/Features.module.scss"
import Image from 'next/image'
import Link from "next/link"

const Features2 = () => {
  return (
<> 
    <section className={styles.features2}>
       <div className={styles.content}>
          <h1 className={styles.h1}>
          Globally Organized In A Wide Of Languages
          </h1>
          <p  className={styles.p}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamc Nemo enim ipsam voluptatem quia
          </p><p> voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia sit amet, consectetur
          </p>

          <Link href={""}>
           <a className={styles.link}>
             Read More
           </a>
          </Link>
       </div>
       <div className={styles.fetimage}>
          <img src="/static/images/home-facility-bg-3.png" className={styles.imagesfull}/> 
       </div>
    </section>

    <section className={styles.Features3}>
        <div className={styles.containerfet}>
            <div className={styles.fetimage}>
                <img src="/static/images/home-seamless.png" className={styles.imagesfull}/> 
                <img src="/static/images/smartphone1.png" className={styles.imagesfull2} />
             </div>   
             
         <div className={styles.content}>
            <h1 className={styles.h1}>
            Unchangeable Payment 
            <br/>
            Experiences
            </h1>
            <p  className={styles.p}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamc Nemo enim ipsam voluptatem quia
            </p>
            <p> voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia sit amet, consectetur
            </p>

          <Link href={""}>
           <a className={styles.link}>
             Get started
           </a>
          </Link>
       </div>
       </div>
    </section>
</>
  )
}

export default Features2