import React from "react"
import { useBookContext } from "../BookContext"

const BookCard = ({ book }) => {
  const { deleteBook, updateBookStatus } = useBookContext()

  const handleDelete = () => {
    deleteBook(book.id)
  }

  const handleStatusToggle = () => {
    const newStatus = book.status === "Read" ? "Unread" : "Read"
    updateBookStatus(book.id, newStatus)
  }

  return (
    <div>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Status: {book.status}</p>
      <button onClick={handleStatusToggle}>
        Mark as {book.status === "Read" ? "Unread" : "Read"}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default BookCard
