import { useRouteError } from "react-router-dom"
import styles from "./index.module.css"

export default function NotPage() {
  const error = useRouteError()

  return (
    <div className={styles.not_page}>
      <h1>Erro ao carregar pagina.</h1>
      <p>{error.statusText}</p>
    </div>
  )
}