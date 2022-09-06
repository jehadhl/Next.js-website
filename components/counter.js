import { useState } from "react"
import styles from "../scss/Counter.module.scss"
import SimpleLoader from 'react-simple-dots-loader'
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"

const Counter = (props) => {
  const [count , setCount] = useState(false)

  return (
    
      <section className={styles.Counter}>
        <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
       <div className={styles.flex}>
           <div className={styles.count}>
             <h1 className={styles.h1}>
              {count && <CountUp start={0} end={100} duration={2} delay={0}/> }
              +
             </h1>
             <div className={styles.simple}>
               <SimpleLoader color='#b9d2ff' className={styles.SimpleLoader}/>
             </div>
             <p className={styles.p}>
              10 Million Customers
             </p>
           </div>
           <div className={styles.count}>
              <h1 className={styles.h1}>
              {count &&<CountUp start={0} end={200} duration={2} delay={0}/>}
              M+
             </h1>
             <div className={styles.simple}>
               <SimpleLoader color='#b9d2ff'  className={styles.SimpleLoader}/>
             </div>
             <p className={styles.p}>
              10 Million Customers
             </p>
           </div>
           <div className={styles.count}>
              <h1 className={styles.h1}>
              {count && <CountUp start={0} end={75} duration={2} delay={0}/>}
              +
             </h1>
             <div className={styles.simple}>
               <SimpleLoader color='#b9d2ff'  className={styles.SimpleLoader}/>
             </div>
             <p className={styles.p}>
              10 Million Customers
             </p>
           </div>
           <div className={styles.count}>
           <h1 className={styles.h1}>
              {count && <CountUp start={0} end={20} duration={2} delay={0}/>}+  
             </h1>
             <div className={styles.simple}>
               <SimpleLoader color='#b9d2ff'  className={styles.SimpleLoader}/>
             </div>
             <p className={styles.p}>
              10 Million Customers
             </p>
           </div>
       </div>  
       </ScrollTrigger>
    </section>

  )
}

export default Counter