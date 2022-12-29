import React from 'react'

function Search() {
  return (
    <div className="search">
      <input type="text" placeholder='Search artwork'/>
      <svg width="13" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.667 11A5.301 5.301 0 0 0 8.93 9.875l2.931 2.93.943-.942-2.931-2.931A5.3 5.3 0 0 0 11 5.667 5.34 5.34 0 0 0 5.667.333 5.34 5.34 0 0 0 .333 5.667 5.34 5.34 0 0 0 5.667 11Zm0-9.333c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4Z" fill="#828282"/></svg>
    </div>
  )
}

export default Search