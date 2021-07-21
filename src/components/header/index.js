import React from 'react'
import SearchBar from "./elements/SearchBar"

function Header({fillData}) {
  return (
    <div>
      <SearchBar fillData={fillData} />
    </div>
  )
}

export default Header;
