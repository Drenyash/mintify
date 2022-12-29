import React from 'react'

function Sort() {
  return (
    <div className="sort content__sort">
      <div className="sort__settings">
        <select name="" id="">
          <option value="Recent">Recent</option>
        </select>
        <select name="" id="">
          <option value="Low to hight">Low to hight</option>
        </select>
        <select name="" id="">
          <option value="All">All</option>
        </select>
      </div>
      <div className="sort__style">
        <button className='sort__button sort__button_column'>
          <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.25.25v6h6v-6h-6Zm4.5 4.5h-3v-3h3v3Zm-4.5 3v6h6v-6h-6Zm4.5 4.5h-3v-3h3v3Zm3-12v6h6v-6h-6Zm4.5 4.5h-3v-3h3v3Zm-4.5 3v6h6v-6h-6Zm4.5 4.5h-3v-3h3v3Z" fill="#22B9CA"/></svg>
        </button>
        <button className='sort__button sort__button_list'>
          <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 4.75h3c.412 0 .75-.338.75-.75a.752.752 0 0 0-.75-.75H7a.752.752 0 0 0-.75.75c0 .412.338.75.75.75Zm0 3h3c.412 0 .75-.338.75-.75a.752.752 0 0 0-.75-.75H7a.752.752 0 0 0-.75.75c0 .412.338.75.75.75Zm0 3h3c.412 0 .75-.338.75-.75a.752.752 0 0 0-.75-.75H7a.752.752 0 0 0-.75.75c0 .412.338.75.75.75Zm-3.75-7.5h1.5v1.5h-1.5v-1.5Zm0 3h1.5v1.5h-1.5v-1.5Zm0 3h1.5v1.5h-1.5v-1.5Zm9.75-9H1A.752.752 0 0 0 .25 1v12c0 .412.338.75.75.75h12c.412 0 .75-.338.75-.75V1A.752.752 0 0 0 13 .25Zm-.75 12H1.75V1.75h10.5v10.5Z" fill="#333"/></svg>
        </button>
      </div>
    </div>
  )
}

export default Sort