import React from 'react'
import s from './Contact.module.scss'
const Contact = () => {
  return (
    <>
        <section>
            <div className="container">
                <div className={s.wrapper}>

                <div className={s.card}>
                    <img src="/inst.svg" alt="" />
                    <div>
                        <h3>EMAIL</h3>
                        <h2>Support@VRNas.com</h2>
                    </div>
                </div>
                <div className={s.card}>
                    <img src="/local.svg" alt="" />
                    <div>
                        <h3>ADDRESS</h3>
                        <h2>Tanjung Sari Street no.48, Pontianak City</h2>
                    </div>
                </div>
                <div className={s.card}>
                    <img src="/phone.svg" alt="" />
                    <div>
                        <h3>PHONE</h3>
                        <h2>+123 456 7890</h2>
                    </div>
                </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default Contact