import styles from "../scss/Features.module.scss"
import Image from "next/image"
import Link from "next/link"

const Features5 = () => {
  return (
     <section className={styles.Features}>
      <div className={styles.Features5}>
       <div className={styles.container}>
           
           <div className={styles.col2}>
              <h1 className={styles.h1}>
                Online and Ecommerce Payment 
                <br/>
                Processing
              </h1>
              <p className={styles.p}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod cste et dolore magnam aliquam quaerat voluptatem.
              </p>
              <p className={styles.p}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod cste et dolore magnam aliquam quaerat voluptatem.
              </p>

              <div className={styles.link}>
                <Link href={""}>
                    <a>
                       Read more + 
                    </a>
                </Link>
              </div>
           </div>

           <div className={styles.col1}>
              <Image src="/static/images/facility-img-5.png" width={514} height={520} className={styles.image}/>
           </div>
         </div>
       </div>
     </section>
  )
}

export default Features5