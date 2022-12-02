import { useLoaderData } from "react-router-dom"
import styles from "./Books.module.css"
import { useState } from "react"
import Book from "./Book"
import EventButton from "../../../components/EventButton"

export async function loader({ params }) {
  const res = await fetch(`../../../../books.json`)
  const books = await res.json()

  if(params.bookId){
    const book = books.find( book => book._id === Number(params.bookId) )

    if(!book) throw new Response("", {
      status: 400,
      statusText:"Este livro não existe"
    })
    return book
  }
  return books
}

export default function Books() {
  const perPage = 12
  
  const books = useLoaderData()
  const [page, setPage] = useState(perPage)

  const nextPageBooks = () => {
    let newPage = page + perPage
    if (newPage > books.length) newPage = books.length - 1
    setPage(newPage)
  }

  const currentPagesBook = () => books.slice(0, page)

  return (
    <>
      <h1>Loja</h1>

      <ul className={styles.books}>
        {
          currentPagesBook().map(book => <Book book={book} key={book._id} />)
        }
      </ul>
      
      <EventButton
        text="Mais livros"
        event={nextPageBooks}
        extraClass={styles.next_books}
      />
    </>
  )
}