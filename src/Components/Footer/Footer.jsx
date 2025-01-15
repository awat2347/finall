import React from 'react'
import s from "./Footer.module.scss"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
        <div className={s.logo1}>
              <img src="/Logo.png" alt="" />
              <div>
                <img src="/icon_footer-1.png" alt="" />
                <img src="/icon_footer-2.png" alt="" />
                <img src="/icon_footer-3.png" alt="" />
                <img src="/icon_footer-4.png" alt="" />
              </div>
            </div>
          <div className={s.footer}>
            <div className={s.logo}>
              <img src="/Logo.png" alt="" />
              <div>
                <img src="/icon_footer-1.png" alt="" />
                <img src="/icon_footer-2.png" alt="" />
                <img src="/icon_footer-3.png" alt="" />
                <img src="/icon_footer-4.png" alt="" />
              </div>
            </div>

            <div className={s.quicklinks}>
              <h3>Quicklinks</h3>
              <Link to={"/"}> Home </Link>
              <Link to={"Pricing_Plan"}> Pricing Plan </Link>
              <Link to={"/"}> Service </Link>
              <Link to={"/"}> Blog </Link>
              <Link to={"/"}> Our Team </Link>
            </div>

            <div className={s.support}>
              <h3>Support</h3>
              <Link to={"/"}> About us </Link>
              <Link to={"Touch"}> Contact us </Link>
              <Link to={"/"}> FAQ </Link>
              <Link to={"/"}> Tems & Conditions </Link>
              <Link to={"/"}> Privacy Policy </Link>
            </div>

            <div className={s.need}>
              <h3>Need Help?</h3>

              <div>
                <img src="need-1.svg" alt="" />
                <h3>Tanjung Sari Street no.48, Pontianak City</h3>
              </div>

              <div>
                <img src="need-2.svg" alt="" />
                <h3>Support@VRNas.com</h3>
              </div>

              <div>
                <img src="need-3.svg" alt="" />
                <h3>+123 456 7890</h3>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer