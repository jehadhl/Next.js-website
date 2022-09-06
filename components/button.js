import Link from "next/link"
import styles from "../scss/Navbar.module.scss"

const Button = () => {
  return (
    <Link href={""}>
      <a className={styles.button}>
        Sign/login
      </a>
    </Link>
  )
}

export default Button