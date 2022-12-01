import styles from "./index.module.css"

import Header from "../../layouts/header"
import Main from "../../layouts/main"
import Footer from "../../layouts/footer"

export default function Root(){
  return (
    <section className={styles.container}>
      <Header />
      <Main />
      {/* <Footer /> */}
    </section>
  )
}