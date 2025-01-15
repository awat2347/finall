import React from 'react'
import s from "./About.module.scss"


const About = () => {
  return (
    <>
       <section className={s.about}>
        <div className="container">

        <div className={s.wrapper}>

            <div className={s.box}>
                <img src="/about-man.png" alt="" />
            </div>

            <div className={s.about_us}>
                

                <h3>ABOUT US</h3>


                <h1>Bring your events to life like never before with our VR services.</h1>


                <p>VRNas is a leading provider of VR services for education, entertainment, architecture, and events. Our mission is to bring the power of virtual reality to everyone, allowing them to explore new worlds, learn in new ways, and experience events in a whole new light.</p>



                <div className={s.check}>
                    <div className={s.check_box}><img src="/box.svg" alt="" />
                        <p>Cutting-Edge Technology</p>
                    </div>

                    <div className={s.check_box}><img src="/box.svg" alt="" />
                        <p>Versatile Applications</p>
                    </div>

                    <div className={s.check_box}><img src="/box.svg" alt="" />
                        <p>Affordable and Accessible</p>
                    </div>
                </div>

                <div>
                    <button className={s.button_gradient}>
                    read more
                    </button>
                </div>
            </div>

        </div>

        </div>
        </section> 
    </>
  )
}

export default About