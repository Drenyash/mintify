import React from 'react'
import style from './ErrorPage.module.scss'

function ErrorPage() {
  return (
    <div className={style.errorPage}>
      <h2 className={style.errorPage__title}>404</h2>
      <p className={style.errorPage__text}>Страница не найдена</p>
    </div>
  )
}

export default ErrorPage