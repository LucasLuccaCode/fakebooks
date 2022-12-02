import { Form } from "react-router-dom"
import styles from "./UserForm.module.css"

export default function UserForm({ page }) {
  return (
    <Form method="post" className={styles.form}>
      {page !== "login" && (<div>
        <label htmlFor="name">Nome:</label>
        <input type="text" name="name" id="name" />
      </div>)}
      <div>
        <label htmlFor="email">E-mail:</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Senha:</label>
        <input type="password" name="password" id="password" />
      </div>

      <button className="btn" type="submit">Cadastrar</button>
    </Form>
  )
}