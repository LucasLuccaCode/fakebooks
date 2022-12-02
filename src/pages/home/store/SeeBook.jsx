import { useLoaderData, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import styles from "./SeeBook.module.css"
import { MdArrowBack } from "react-icons/md"

export default function SeeBook() {
  const book = useLoaderData()
  const navigate = useNavigate()

  const handleImageError= e => {
    const el = e.target
    el.remove()
  }

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <div onClick={() => navigate(-1)} className={styles.back}>
      <MdArrowBack />
    </div>
    <div className={styles.see_book}>
      <img src={book.thumbnailUrl || "no-image"} alt="Imagem de capa do livro" onError={handleImageError}  />
      <div>
        <h2>{book.title}</h2>
        <p><strong>Autores:</strong> {book.authors.join(" - ")}</p>
        <p><strong>Páginas:</strong> {book.pageCount} páginas</p>
        <p><strong>Categorias:</strong> {book.categories.join(" - ")}</p>
        <p><strong>Data de publicação:</strong> {book.publishedDate.$date.substring(0, 10)}</p>
        <p><strong>Descrição:</strong> {book.longDescription}</p>
      </div>
    </div>
    </>
  )
}