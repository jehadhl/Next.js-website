import styles from '../scss/Features.module.scss'
import Image from 'next/image'

const Features = () => {
  return (
    <section className={styles.features1}>
      <div className={styles.container}>
        <h1 className={styles.h1}>
          Our Valuable Features
        </h1>
        <div className={styles.conatiner2}>
        <div className={styles.conatiner1}>
          <Image src="/static/icons/feature-3-icon-1.png" width={76} height={76} />
          <div className={styles.space}/>
          <h2 className={styles.h2}>Secured Payments</h2>
          <p className={styles.p}>Lorem ipsum dolor sit amet, consec- tetur adipisicing elit, sed do ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>
        <div className={styles.conatiner1}>
          <Image src="/static/icons/feature-3-icon-2.png" width={76} height={76}/>
          <div className={styles.space}/>
          <h2 className={styles.h2}>Amazing Experiences</h2>
          <p className={styles.p}>Lorem ipsum dolor sit amet, consec- tetur adipisicing elit, sed do ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>
        <div className={styles.conatiner1}>
          <Image src="/static/icons/feature-3-icon-3.png" width={76} height={76}/>
          <div className={styles.space}/>
          <h2 className={styles.h2}>Faster Growth</h2>
          <p className={styles.p}>Lorem ipsum dolor sit amet, consec- tetur adipisicing elit, sed do ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>
        <div className={styles.conatiner1}>
          <Image src="/static/icons/feature-3-icon-4.png" width={76} height={76}/>
          <div className={styles.space}/>
          <h2 className={styles.h2}>Global Payments</h2>
          <p className={styles.p}>Lorem ipsum dolor sit amet, consec- tetur adipisicing elit, sed do ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>
        </div>
        </div>
    </section>
  )
}

export default Features