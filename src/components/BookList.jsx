import React, { useState } from "react"
import { useBookContext } from "../BookContext"
import BookCard from "./BookCard"
import FilterBooks from "./FilterBooks"

const BookList = () => {
  const { books } = useBookContext()
  const [filter, setFilter] = useState("All")

  const filteredBooks = () => {
    if (filter === "Read") {
      return books.filter((book) => book.status === "Read")
    } else if (filter === "Unread") {
      return books.filter((book) => book.status === "Unread")
    }
    return books
  }

  return (
    <div>
      <h2>My Library</h2>
      <FilterBooks
        total={books.length}
        read={books.filter((b) => b.status === "Read").length}
        unread={books.filter((b) => b.status === "Unread").length}
        setFilter={setFilter}
        currentFilter={filter}
      />
      {filteredBooks().length === 0 ? (
        <p>No books in this category.</p>
      ) : (
        <ul>
          {filteredBooks().map((book) => (
            <li key={book.id}>
              <BookCard book={book} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookList
