import React from 'react'
import s from './Touch.module.scss'
const Touch = () => {
  return (
    <>
      <section>
      <div className="container">
        <div className={s.wrapper}>

            <div className={s.text}>
                <h3>CONTACT US</h3>
                <h1>Get in Touch</h1>
                <p>At VRNas, we're always happy to hear from our clients and potential clients. Whether you have a question about our VR services, want to discuss a potential project, or just want to say hello, we're here to help.</p>
            </div>

            <div className={s.input}>
            <div className={s.inp}>
              <div>
                <input placeholder='First Name' type="text" name="" id="" />
                <input placeholder='Last Name' type="text" name="" id="" />
                </div>
                <div>
                <input placeholder='Email' type="text" name="" id="" />
                <input placeholder='Phone Number' type="number" name="" id="" />
                </div>
            
                
                </div>
                <div className={s.btn}>
            <input placeholder='Message' type="text" name="" id="" />
            <button>send message</button>
            </div>
            </div>
           <div className={s.map}>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23977.01284568793!2d69.24599197431638!3d41.30610930000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5200a480655%3A0xeabc5e2bd1cdaae9!2sIT-Academy!5e0!3m2!1sru!2s!4v1736850349391!5m2!1sru!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
           </div>
        </div>
      </div>  
      </section>
         
    </>
  )
}

export default Touch