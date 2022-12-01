import { NavLink } from "react-router-dom"
import styles from "./index.module.css"

export default function HomeAside (){
  return (
    <aside className={styles.aside}>
      <ul>
        <li>
          <NavLink to="dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="accounts">Accounts</NavLink>
        </li>
        <li>
          <NavLink to="sales">Sales</NavLink>
        </li>
        <li>
          <NavLink to="expenses">Expenses</NavLink>
        </li>
        <li>
          <NavLink to="reports">Reports</NavLink>
        </li>
      </ul>
    </aside>
  )
}