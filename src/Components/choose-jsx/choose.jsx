import React, { useState } from 'react';
import s from './choose.module.scss';

const Choose = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Passionate and Experienced Team",
      content: "We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences."
    },
    {
      title: "Customized Solutions",
      content: "We offer tailored VR solutions that meet your specific needs and requirements. Our goal is to provide the best possible service and ensure that your VR experience is unique and effective."
    },
    {
      title: "Exceptional Customer Service",
      content: "We pride ourselves on our responsive and dedicated customer service. Our team is always available to assist you and ensure that your experience with us is smooth and satisfactory."
    }
  ];

  return (
    <>
      <section>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.img}>
              <img src="/man_choose.png" alt="" />
            </div>

            <div className={s.box}>
              <div className={s.text}>
                <h3>WHY CHOOSE US</h3>
                <h1>Why Choose Us for Your VR Needs</h1>
              </div>

              <div className={s.cardion}>
                {accordionData.map((item, index) => (
                  <div key={index} className={s.accordion}>
                    <div className={s.accordionTitle} onClick={() => toggleAccordion(index)}>
                      <h2>{item.title}</h2>
                      <span>{activeIndex === index ? '-' : '+'}</span>
                    </div>
                    {activeIndex === index && (
                      <div className={s.accordionContent}>
                        <p>{item.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Choose;