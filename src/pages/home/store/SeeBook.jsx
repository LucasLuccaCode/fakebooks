import { useLoaderData } from "react-router-dom"
import { useEffect } from "react"
import styles from "./SeeBook.module.css"

export default function SeeBook() {
  const book = useLoaderData()

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.see_book}>
      <img src={book.thumbnailUrl} alt="Foto do livro" />
      <div>
        <h2>{book.title}</h2>
        <p><strong>Autores:</strong> {book.authors.join(" - ")}</p>
        <p><strong>Páginas:</strong> {book.pageCount} páginas</p>
        <p><strong>Categorias:</strong> {book.categories.join(" - ")}</p>
        <p><strong>Data de publicação:</strong> {book.publishedDate.$date.substring(0, 10)}</p>
        <p><strong>Descrição:</strong> {book.longDescription}</p>
      </div>
    </div>
  )
}