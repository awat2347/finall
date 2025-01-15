import React from 'react'
import s from "./STARTED.module.scss"
const STARTED = () => {
  return (
    <>
        <section>
            <div className="container">
                <div className={s.wrapper}>

                    <div className={s.text}>
                        <h3>HOW TO GET STARTED</h3>
                        <h1>Bringing Your Virtual Reality
                        Dreams to Life</h1>
                    </div>

                    <div className={s.img}>
                        <img src="/started.png" alt="" />
                    </div>

                    <button className={s.button_gradient}>GET STARTED</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default STARTED