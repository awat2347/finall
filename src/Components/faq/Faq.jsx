import React, { useState } from 'react';
import s from './Faq.module.scss';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "What is virtual reality?",
      content: "Virtual reality (VR) is a technology that uses headsets or other devices to create a simulated environment. Users can interact with this environment as if it were real, allowing for immersive experiences in gaming, education, training, and more."
    },
    {
      title: "What types of VR services do you offer?",
      content: "We offer a variety of VR services tailored to different needs, including VR development, design, and consulting services."
    },
    {
      title: "How much do your VR services cost?",
      content: "The cost of our VR services varies based on the project scope and requirements. Please contact us for a detailed quote."
    },
    {
      title: "What equipment do I need to use your VR services?",
      content: "You will need a compatible VR headset and a suitable computer or console. We can provide recommendations based on your needs."
    },
    {
      title: "Can I try out your VR services before I commit?",
      content: "Yes, we offer demo sessions so you can experience our VR services firsthand before making a commitment."
    }
  ];

  return (
    <>
      <section>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.text}>
              <h3>FAQ</h3>
              <h1>Frequently Asked Questions</h1>
              <p>At VRNas, we want to make sure that you have all the information you need to make informed decisions about our VR services. Here are some of the most common questions we receive:</p>
            </div>

            <div className={s.accordion}>
              {accordionData.map((item, index) => (
                <div key={index} className={`${s.accordionItem} ${activeIndex === index ? s.active : ''}`}>
                  <div className={s.accordionTitle} onClick={() => toggleAccordion(index)}>
                    <h2>{item.title}</h2>
                    <span className={s.icon}>{activeIndex === index ? '-' : '+'}</span>
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
      </section>
    </>
  );
}

export default Faq;