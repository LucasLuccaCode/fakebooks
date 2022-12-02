import styles from "./index.module.css"
import { NavLink, Outlet } from "react-router-dom"

export default function Sales() {
  return (
    <div className={styles.sales}>
      <h1>Vendas</h1>

      <nav>
        <ul>
          <li>
            <NavLink to="overview">Painel</NavLink>
          </li>
          <li>
            <NavLink to="subscriptions">Assinaturas</NavLink>
          </li>
          <li>
            <NavLink to="invoices">Faturas</NavLink>
          </li>
          <li>
            <NavLink to="customers">Clientes</NavLink>
          </li>
          <li>
            <NavLink to="deposits">Depósitos</NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.detail}>
        <Outlet />
      </div>
    </div>
  )
}