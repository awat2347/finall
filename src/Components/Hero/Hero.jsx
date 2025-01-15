import React from 'react'
import s from './Hero.module.scss'



const Hero = () => {
  return (
    <>

    <section className={s.Hero}>
        <div className="container">
        <div className={s.wrapper}>

       <div className={s.box}>

            <div className={s.text}>
                    <h1>Immerse Yourself in Virtual Reality</h1>
                    <p>Experience Unforgettable Events in VR. Bring your events to life like never before with our VR services</p>
                   
            </div>

            <button className={s.btn}>discover more</button>

            <div className={s.happy}>
                <div className={s.group}> 
                <img src="/Happy.png" alt="" />
                <div>
                    <h4>32k+</h4>
                    <p>Happy Client</p>
                </div>
                </div>
                <img className={s.video} src="/Video.png" alt="" />
            </div>

       </div>

       <div className={s.img}>
        <img src="man.png" alt="" />
        
       </div>

       <div className={s.img2}>
        <img src="man-2.png" alt="" />
        
       </div>

        </div>
        </div>
    </section>
        
    </>

  )
}

export default Hero