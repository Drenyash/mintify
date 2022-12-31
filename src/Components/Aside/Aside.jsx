import React, {useState} from 'react'
import LeftColItem from '../LeftColItem/LeftColItem'
import style from './Aside.module.scss'

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
    <aside className={style.leftCol}>
      <ul className={style.leftCol__list}>
        {colItem.map(element => 
          <LeftColItem key={element.id}>{element.text}</LeftColItem>
        )}
      </ul>
    </aside>
  )
}

export default Aside