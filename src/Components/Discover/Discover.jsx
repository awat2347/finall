import React from 'react'
import s from './Discover.module.scss'


const Discover = () => {
  return (
    <>
        <section className={s.Discover}>
          <div className="container">
            <div className={s.wrapper}>

              <div className={s.text}>
                  <h5>Our Trusted Partners</h5>
                  <h1>Discover the Companies We Work With</h1>
              </div>

              <div className={s.img}>
           <img src="/Discover.png" alt="" />
              </div>

            </div>
          </div>
        </section>
    </>
  )
}

export default Discover