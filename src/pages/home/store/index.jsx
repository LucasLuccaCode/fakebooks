import { Outlet } from "react-router-dom"
import styles from "./index.module.css"

export default function Store() {
  return (
    <div className={styles.store}>
      <h1>Loja</h1>
      <div className="detail">
        <Outlet />
      </div>
    </div>
  )
}