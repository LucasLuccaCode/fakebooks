import { NavLink } from "react-router-dom"
import styles from "./index.module.css"

export default function HomeAside (){
  return (
    <aside className={styles.aside}>
      <ul>
        <li>
          <NavLink to="dashboard">Painel de controle</NavLink>
        </li>
        <li>
          <NavLink to="accounts">Contas</NavLink>
        </li>
        <li>
          <NavLink to="sales">Vendas</NavLink>
        </li>
        <li>
          <NavLink to="expenses">Despesas</NavLink>
        </li>
        <li>
          <NavLink to="reports">Relatório</NavLink>
        </li>
        <li>
          <NavLink to="store">Loja</NavLink>
        </li>
      </ul>
    </aside>
  )
}