import styles from '../scss/Images.module.scss'

const Images = () => {
  return (
 <div className={styles.headershape}>
    <div className={styles.headershapeitem}>
    <img src="/static/images/header-3-shape1.png" alt="shape"  className={styles.image2}/>
    </div>
    <div className={styles.headershapeitem}>
    <img src="/static/images/header-3-shape2.png" alt="shape"  className={styles.image2}/>
    </div>
    <div className={styles.headershapeitem}>
    <img src="/static/images/header-3-shape3.png" alt="shape"  className={styles.image2}/>
        </div>
    <div className={styles.headershapeitem}>
    <img src="/static/images/header-3-shape4.png" alt="shape"  className={styles.image2}/>
    </div>
 </div>
  )
}

export default Images