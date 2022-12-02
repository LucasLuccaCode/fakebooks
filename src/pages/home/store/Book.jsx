import { Link } from "react-router-dom"
import styles from "./Books.module.css"

export default function Book({ book }) {
  return (
    <li className={styles.book}>
      <img 
        src={book.thumbnailUrl || "no-image"} 
        alt={`Imagem do livro ${book.title}`}
      />
      <h3>{book.title}</h3>
      <div>
        <p>{book.authors.join(", ")}</p>
        <p><strong>Paginas:</strong> {book.pageCount}</p>
      </div>
      <Link className="btn" to={`${book._id}`}>Ver mais</Link>
    </li>
  )
}