import React from 'react'
import s from './pricing.module.scss'
const Pricing = () => {
  return (
    <>
      <section className={s.Pricing}>
      <div className="container">
        <div className={s.wrapper}>

            <div className={s.text}>
            <h5>our pricing</h5>
            <h1>Affordable VR Services for Everyone</h1>
            <p>At VRNas, we believe that everyone should have access to the benefits of VR. That's why we offer a range of pricing options to meet the needs of any budget.</p>
            </div>


            <div className={s.box}>

            <div className={s.cards}>

            <div className={s.card}>
            <img src="/clude.svg" alt="" />
            <div>
                <h3>Customizable Packages</h3>
                <p>We understand that each project is unique, so we offer customizable packages to ensure that you get the services you need at a price that works for you. Our team will work with you to create a package that meets your specific goals and budget.</p>
            </div>
            </div>

            <div className={s.card}>
            <img src="/clude.svg" alt="" />
            <div>
                <h3>Flexible Payment Options</h3>
                <p>We offer flexible payment options to make it easy for you to get started with our services. We accept various payment methods, including credit cards, bank transfers, and PayPal, and we can also work with you to create a payment plan that suits your needs.</p>
            </div>
            </div>

            <div className={s.card}>
            <img src="/clude.svg" alt="" />
            <div>
                <h3>Satisfaction Guarantee</h3>
                <p>We stand behind our services and are committed to ensuring that you are completely satisfied with the final product. If for any reason you are not happy with our services, we will work with you to make it right or provide a full refund.</p>
            </div>
            </div>

            </div>


            <div className={s.get_started}>
                <div className={s.start}>
                <h5>Start from</h5>
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

export default Pricing