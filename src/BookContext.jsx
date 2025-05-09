import React, { createContext, useState, useEffect, useContext } from "react"

const BookContext = createContext()

export const useBookContext = () => useContext(BookContext)

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(() => {
    const storedBooks = localStorage.getItem("books")
    return storedBooks ? JSON.parse(storedBooks) : []
  })

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books))
  }, [books])

  const addBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book])
  }

  const deleteBook = (index) => {
    setBooks((prevBooks) => prevBooks.filter((_, i) => i !== index))
  }

  const updateBookStatus = (index, newStatus) => {
    setBooks((prevBooks) =>
      prevBooks.map((book, i) =>
        i === index ? { ...book, status: newStatus } : book
      )
    )
  }

  return (
    <BookContext.Provider
      value={{ books, addBook, deleteBook, updateBookStatus }}
    >
      {children}
    </BookContext.Provider>
  )
}
