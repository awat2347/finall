import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Импорт стилей AOS
import s from './our_service.module.scss';

const Our_service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Продолжительность анимации
      offset: 200, // Смещение
      easing: 'ease-in-out', // Тип анимации
      once: false, // Запуск анимации только один раз
    });
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className={s.wrapper}>
            <nav  data-aos="fade-down-left"  data-aos-anchor-placement="top-center"
             data-aos-duration="2500"
             className={s.nav}>
              <div className={s.text}>
                <p>OUR SERVICE</p>
                <h1>Our Service</h1>
              </div>

              <div className={s.p}>
                <p>
                  We use the latest VR hardware and software to create high-quality VR
                  experiences that are accessible and affordable. Our goal is to provide
                  exceptional customer service and support, and our team is always
                  available to answer any questions and address any concerns you may
                  have.
                </p>
              </div>
            </nav>

            <div className={s.box}>
              <div className={s.vr_block_1}>
                <div  data-aos="fade-right" data-aos-duration="1500" className={s.vr}>
                  <img src="/vr-1.png" alt="" />
                  <div>
                    <h1>VR Development</h1>
                    <p>From concept to creation, our team of VR developers will bring your vision to life.</p>
                  </div>
                  <button className={s.learnMore}>LEARN MORE</button>
                </div>

                <div data-aos="fade-right" data-aos-duration="1500" className={s.vr}>
                  <img src="/vr-2.png" alt="" />
                  <div>
                    <h1>VR Games</h1>
                    <p>We offer a wide selection of VR games that are suitable for players of all ages and skill levels.</p>
                  </div>
                  <button className={s.learnMore}>LEARN MORE</button>
                </div>
              </div>

              <div className={s.vr_block_2}>
                <div data-aos="zoom-in" data-aos-duration="1000" className={s.vr}>
                  <img src="/vr-3.png" alt="" />
                  <div>
                    <h1>VR Design</h1>
                    <p>Our talented VR designers will create immersive and engaging environments that will captivate your audience.</p>
                  </div>
                  <button className={s.learnMore}>LEARN MORE</button>
                </div>

                <div  data-aos="zoom-in" data-aos-duration="1000" className={s.vr}>
                  <img src="/vr-4.png" alt="" />
                  <div>
                    <h1>VR Events</h1>
                    <p>We offer a wide selection of VR games that are suitable for players of all ages and skill levels.</p>
                  </div>
                  <button className={s.learnMore}>LEARN MORE</button>
                </div>
              </div>

              <div className={s.vr_block_3}>
                <div data-aos="fade-left" data-aos-duration="1500" className={s.vr}>
                  <img src="/vr-5.png" alt="" />
                  <div>
                    <h1>VR Consulting</h1>
                    <p>Our VR consultants will work with you to ensure that your VR experience meets your goals and exceeds your expectations.</p>
                  </div>
                  <button className={s.learnMore}>LEARN MORE</button>
                </div>

                <div data-aos="fade-left" data-aos-duration="1500" className={s.vr}>
                  <img src="/vr-6.png" alt="" />
                  <div>
                    <h1>VR Entertainment</h1>
                    <p>
                      Create a VR escape room, or offer VR experiences at a theme park, we
                      have the expertise and experience to make it happen.
                    </p>
                  </div>
                  <button className={s.learnMore}>LEARN MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Our_service;
