import React from 'react'
import style from './Button.module.scss'

function Button({children, ...props}) {
  return (
    <button className={style.btn}>{children}</button>
  )
}

export default Button