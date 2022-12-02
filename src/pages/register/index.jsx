import UserForm from "../../components/form/UserForm"
import styles from "./index.module.css"
import { redirect } from "react-router-dom"

export async function action ({ request }){
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log("Form register")
  return redirect("/")
}

export default function Register (){
  return (
    <div className={styles.register}>
      <h1>Crie uma conta</h1>

      <UserForm page="register" />
    </div>
  )
}