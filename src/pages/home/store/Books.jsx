import { Link, useLoaderData } from "react-router-dom"
import styles from "./Books.module.css"
import { useState } from "react"

export async function loader({ params }) {
  const res = await fetch(`../../../../books.json`)
  const books = await res.json()
  const { bookId } = params
  return bookId ? books[bookId - 1] : books
}

export default function Books() {
  const books = useLoaderData()
  const perPage = 12
  const [page, setPage] = useState(perPage)

  const nextPageBooks = () => {
    let newPage = page + perPage
    if (newPage > books.length) newPage = books.length - 1
    setPage(newPage)
  }

  const currentPagesBook = () => books.slice(0, page)

  return (
    <>
      <ul className={styles.books}>
        {
          currentPagesBook().map(book => (
            <li key={book._id}>
              <img src={book.thumbnailUrl} alt="" />
              <h3>{book.title}</h3>
              <div>
                <p>{book.authors.join(", ")}</p>
                <p><strong>Paginas:</strong> {book.pageCount}</p>
              </div>
              <Link className="btn" to={`${book._id}`}>Ver mais</Link>
            </li>
          ))
        }
      </ul>
      <button className={`btn ${styles.next_books}`} onClick={nextPageBooks}>Mais livros</button>
    </>
  )
}