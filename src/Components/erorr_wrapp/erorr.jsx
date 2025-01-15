import React from 'react'
import s from './erorr.module.scss'
const erorr = () => {
  return (
    <>
       <section>
        <div className="container">
            <div className={s.wrapper}>
                <div className={s.text}>

                
                <div className={s.erorr}>
                <h4>404 Error</h4>
                <h1>Page Not Found</h1>
                </div>
                    <div className={s.Oops}>
                    <p></p>
                    <ul>
                        <li></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        </section> 
    </>
  )
}

export default erorr