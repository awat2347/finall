import React from 'react'
import s from "./TESTIMONIAL.module.scss"


const TESTIMONIAL = () => {
  return (
    <>
        <section className={s.testimonial}>
        <div className="container">
            <div className={s.wrapper}>

                <div className={s.main}>
                <h3>TESTIMONIAL</h3>
                <h1>What Our Clients Are Saying</h1>
                </div>

                <div className={s.boxs}>

                <div className={s.card_1}>
                <div className={s.icon}><img src="/avatar-1.svg" alt="" /></div>

                <div className={s.text}>
                  <p> The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs. </p>
                  <h4>Robert Fox - CEO Anono</h4>
                </div>
                </div>


                <div className={s.card_2}>
                <div className={s.icon}><img src="/avatar-2.svg" alt="" /></div>

                <div className={s.text}>
                  <p> The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs. </p>
                  <h4>Robert Fox - CEO Anono</h4>
                </div>
                </div>

                <div className={s.card_3}>
                <div className={s.icon}><img src="/avatar-3.svg" alt="" /></div>

                <div className={s.text}>
                  <p> The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs. </p>
                  <h4>Robert Fox - CEO Anono</h4>
                </div>
                </div>

                <div className={s.card_4}>
                <div className={s.icon}><img src="/avatar-4.svg" alt="" /></div>

                <div className={s.text}>
                  <p> The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs. </p>
                  <h4>Robert Fox - CEO Anono</h4>
                </div>
                </div>

                <div className={s.card_5}>
                <div className={s.icon}><img src="/avatar-5.svg" alt="" /></div>

                <div className={s.text}>
                  <p> The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs. </p>
                  <h4>Robert Fox - CEO Anono</h4>
                </div>
                </div>

                <div className={s.card_6}>
                <div className={s.icon}><img src="/avatar-6.svg" alt="" /></div>

                <div className={s.text}>
                  <p> The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs. </p>
                  <h4>Robert Fox - CEO Anono</h4>
                </div>
                </div>
                </div>

            </div>
        </div>
        </section>
    </>
  )
}

export default TESTIMONIAL