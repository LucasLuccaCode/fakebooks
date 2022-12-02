import UserForm from "../../components/form/UserForm"
import { redirect } from "react-router-dom"
import styles from "./index.module.css"

export async function action ({ request }){
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log("Form login")
  return redirect("/")
}

export default function Login (){
  return (
    <div className={styles.login}>
      <h1>Logue na sua conta</h1>
      <UserForm page="login" />
    </div>
  )
}