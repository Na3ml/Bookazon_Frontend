import React from 'react'
import Book from "../../components/Book"
import AllHotels from "../../components/all-hotels";
import GenericButton from "../../components/generic-button";
function SearchResult() {
  return (
    <div>
      <Book/>
      <AllHotels />
    </div>
  )
}
export default SearchResult