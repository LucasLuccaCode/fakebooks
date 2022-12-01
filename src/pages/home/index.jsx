import Aside from "./aside"
import Details from "./details"
import styles from "./index.module.css"

export default function Home(){
  return (
    <div className={styles.home}>
      <Aside />
      <Details />
    </div>
  )
}