import React, { useState } from "react"
import { useBookContext } from "../BookContext"
import { useNavigate } from "react-router-dom"

const AddBook = () => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [status, setStatus] = useState("Unread")
  const { addBook } = useBookContext()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && author) {
      addBook({ title, author, status })
      setTitle("")
      setAuthor("")
      setStatus("Unread")
      navigate("/all-books")
    } else {
      alert("Please enter title and author.")
    }
  }

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Read">Read</option>
            <option value="Unread">Unread</option>
          </select>
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  )
}

export default AddBook
