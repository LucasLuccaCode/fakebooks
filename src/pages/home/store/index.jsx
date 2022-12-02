import { Outlet } from "react-router-dom"
import styles from "./index.module.css"

export default function Store() {
  return (
    <div className={styles.store}>
      <Outlet />
    </div>
  )
}