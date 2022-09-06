import styles from "../scss/Scor.module.scss"
import Image from "next/image"

const Scor = () => {
  return (
    <section className={styles.scor}>
            <h1 className={styles.h1}>Brilliant Score Between 4.5 And 5</h1>
            <h4 className={styles.h4}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </h4>
      <div className={styles.container}>
         <div className={styles.grid}>
            <div className={styles.card}>
                <h2 className={styles.h2}>Devit M. Kolin</h2>
                <h3 className={styles.h3}>CEO & Founder</h3>
                <p id={styles.pp}>
                Lorem ipsum dolor sit amet coeteturvniamquis adipisicing elit, sed do eiusmod 
                tempor
                iddunt ut labore et dolore magna aliquaUt enim ad miniquis ullamc
                </p>
               <div className={styles.flexImage}>
                  <Image src="/static/icons/icons.png" width={28} height={28} />
                  <Image src="/static/icons/icons.png" width={28} height={28} className ={styles.margin}/>
                  <Image src="/static/icons/icons.png" width={28} height={28} className ={styles.margin}/>
                  <Image src="/static/icons/icons.png" width={28} height={28} className ={styles.margin}/>
                  <Image src="/static/icons/icons.png" width={28} height={28} className ={styles.margin}/>
               </div>
            </div>
            <div className={styles.card}>
            <h2 className={styles.h2}>Dulio S. Diler</h2>
                <h3 className={styles.h3}>CFO At JooTheme</h3>
                <p id={styles.pp}>
                Lorem ipsum dolor sit amet coeteturvniamquis adipisicing elit, sed do eiusmod 
                tempor
                iddunt ut labore et dolore magna aliquaUt enim ad miniquis ullamc
                </p>
                <div className={styles.flexImage}>
                  <Image src="/static/icons/icons.png" width={28} height={28} />
                  <Image src="/static/icons/icons.png" width={28} height={28} className ={styles.margin}/>
                  <Image src="/static/icons/icons.png" width={28} height={28} className ={styles.margin}/>
                  <Image src="/static/icons/icons.png" width={28} height={28} className ={styles.margin}/>
                  <Image src="/static/icons/icons.png" width={28} height={28} className ={styles.margin}/>
               </div>
            </div>
            <div className={styles.card}>
             <h2 className={styles.h2}>Endond Zein</h2>
                <h3 className={styles.h3}>Founder OpenBank</h3>
                <p id={styles.pp}>
                Lorem ipsum dolor sit amet coeteturvniamquis adipisicing elit, sed do eiusmod 
                tempor
                iddunt ut labore et dolore magna aliquaUt enim ad miniquis ullamc
                </p>
                <div className={styles.flexImage}>
                  <Image src="/static/icons/icons.png" width={28} height={28} />
                  <Image src="/static/icons/icons.png" width={28} height={28} className ={styles.margin}/>
                  <Image src="/static/icons/icons.png" width={28} height={28} className ={styles.margin}/>
                  <Image src="/static/icons/icons.png" width={28} height={28} className ={styles.margin}/>
                  <Image src="/static/icons/icons.png" width={28} height={28} className ={styles.margin}/>
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}

export default Scor