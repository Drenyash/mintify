import React, {useState} from 'react'
import LeftColItem from './LeftColItem'

function Aside() {
  const [colItem, setColItem] = useState([
    {id: 1, text: 'Status'},
    {id: 2, text: 'Price'},
    {id: 3, text: 'Collections'},
    {id: 4, text: 'Chains'},
    {id: 5, text: 'Categories'},
    {id: 6, text: 'Sale'},
  ])
  return (
    <aside className='left-col'>
      <ul className="left-col__list">
        {colItem.map(element => 
          <LeftColItem key={element.id}>{element.text}</LeftColItem>
        )}
      </ul>
    </aside>
  )
}

export default Aside