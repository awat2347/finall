import React from 'react'
import s from "./Expertise.module.scss"


const Expertise = () => {
  return (
    <>
        <section className={s.Expertise}>
        <div className="container">
            <div className={s.wrapper}>

                <div className={s.card}>
                    <div className={s.img}>
                    <img src="/Expertise-1.svg" alt="" />
                    </div>
                    <div>
                        <h2>Expertise</h2>
                        <p>Our team consists of experienced VR developers, designers, and technicians who have a passion for VR and a commitment to delivering quality work and give the best service</p>
                        </div>
                </div>

                <div className={s.card}>
                    <div className={s.img}>
                    <img src="/Expertise-2.svg" alt="" />
                    </div>
                    <div>
                        <h2>Customization</h2>
                        <p>Every client is unique, and we believe every VR experience should be too. We'll work with you to create a customized solution that meets your specific needs and goals</p>
                        </div>
                </div>

                <div className={s.card}>
                    <div className={s.img}>
                    <img src="/Expertise-3.svg" alt="" />
                    </div>
                    <div>
                        <h2>Service</h2>
                        <p>We believe in providing exceptional customer service, from initial consultation to final delivery. Our goal is to ensure you're satisfied with every aspect of your VR experience.</p>
                        </div>
                </div>

              
            </div>
        </div>
        </section>
    </>
  )
}

export default Expertise