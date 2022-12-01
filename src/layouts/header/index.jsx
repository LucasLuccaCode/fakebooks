import { Link } from "react-router-dom"
import styles from "./index.module.css"

export default function Header(){
  return (
    <header className={styles.header}>
      <h1>Fakebooks</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Entrar</Link>
          </li>
          <li>
            <Link to="/register">Cadastrar</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}