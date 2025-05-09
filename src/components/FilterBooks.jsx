import React from "react"

const FilterBooks = ({ total, read, unread, setFilter, currentFilter }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={() => setFilter("All")}>All Books ({total})</button>
      <button onClick={() => setFilter("Read")}>Read Books ({read})</button>
      <button onClick={() => setFilter("Unread")}>
        Unread Books ({unread})
      </button>
    </div>
  )
}

export default FilterBooks
