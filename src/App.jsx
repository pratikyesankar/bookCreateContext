import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import BookList from "./components/BookList"
import AddBook from "./components/AddBook"
import { BookProvider } from "./BookContext"

const App = () => {
  return (
    <BookProvider>
      <Router>
        <nav>
          <ul style={{ listStyle: "none", padding: 0, display: "flex" }}>
            <li style={{ marginRight: "20px" }}>
              <Link to="/all-books">All Books</Link>
            </li>
            <li>
              <Link to="/add-book">Add Book</Link>
            </li>
          </ul>
        </nav>
        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/all-books" element={<BookList />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/" element={<BookList />} />
          </Routes>
        </div>
      </Router>
    </BookProvider>
  )
}

export default App
