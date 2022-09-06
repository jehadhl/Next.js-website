
import Link from "next/link";
import Image from "next/image";
import styles from "../scss/Partener.module.scss"


const Partener = () => {
  return (
    <div className={styles.coantiner}>
    <div className={styles.partener}>
        <div className={styles.scroll}>
        <div className={styles.slide}>
			<Image src="/static/logos/home-3-logo-1.png" height={100} width={250} alt=""  className={styles.image}/>
		</div>
		<div className={styles.slide}>
			<Image src="/static/logos/home-3-logo-2.png" height={100} width={250} alt="" className={styles.image}/>
		</div>
		<div className={styles.slide}>
			<Image src="/static/logos/home-3-logo-2.png" height={100} width={250} alt="" className={styles.image}/>
		</div>
		<div className={styles.slide}>
			<Image src="/static/logos/home-3-logo-2.png" height={100} width={250} alt="" className={styles.image}/>
		</div>
		<div className={styles.slide}>
			<Image src="/static/logos/home-3-logo-2.png" height={100} width={250} alt="" className={styles.image}/>
		</div>
		<div className={styles.slide}>
			<Image src="/static/logos/home-3-logo-2.png" height={100} width={250} alt="" className={styles.image}/>
		</div>
		<div className={styles.slide}>
			<Image src="/static/logos/home-3-logo-2.png" height={100} width={250} alt="" className={styles.image}/>
		</div>
		<div className={styles.slide}>
			<Image src="/static/logos/home-3-logo-2.png" height={100} width={250} alt="" className={styles.image}/>
		</div>
        </div>
    </div>
    </div>
  )
}

export default Partener