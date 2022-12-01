import styles from "./index.module.css"
import { Outlet } from "react-router-dom" 

export default function Details (){
  return (
    <div className={styles.details}>
      <Outlet />
    </div>
  )
}