import React from 'react'
import s from './Affordable.module.scss'
const Affordable = () => {
  return (
    <>
      <section className={s.Affordable}>
        <div className="container">
          <div className={s.wrapper}>

            <div className={s.text}>
              <p>our pricing</p>
              <h1>Affordable VR Services for Everyone</h1>
              <h4>At VRNas, we believe that everyone should have access to the benefits of VR. That's why we offer a range of pricing options to meet the needs of any budget.</h4>
            </div>


            <div className={s.box}>

                <div className={s.Packages}>
                <div className={s.card}>
                  <img src="/clude.svg" alt="" />
                  <div>
                    <h4>Customizable Packages</h4>
                    <p>We understand that each project is unique, so we offer customizable packages to ensure that you get the services you need at a price that works for you. Our team will work with you to create a package that meets your specific goals and budget.</p>
                    </div>
                </div>

                <div className={s.card}>
                  <img src="/clude.svg" alt="" />
                  <div>
                    <h4>Customizable Packages</h4>
                    <p>We understand that each project is unique, so we offer customizable packages to ensure that you get the services you need at a price that works for you. Our team will work with you to create a package that meets your specific goals and budget.</p>
                    </div>
                </div>

                <div className={s.card}>
                  <img src="/clude.svg" alt="" />
                  <div>
                    <h4>Customizable Packages</h4>
                    <p>We understand that each project is unique, so we offer customizable packages to ensure that you get the services you need at a price that works for you. Our team will work with you to create a package that meets your specific goals and budget.</p>
                    </div>
                </div>
                </div>

              

                <div className={s.start}>
                <div className={s.started}>
                  <h4>Start from</h4>
                  <h1>$99</h1>
                  <button>get started</button>
                  <p>30 Days Moneyback Guarantee</p>
                </div>
                </div>
            </div> 

          </div>
        </div>
      </section>
    </>
  )
}

export default Affordable