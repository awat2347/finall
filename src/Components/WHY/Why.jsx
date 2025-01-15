import React, { useState } from 'react';
import s from './Why.module.scss';

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={s.accordionItem}>
            <div className={s.accordionHeader} onClick={toggleAccordion}>
                <h2>{title}</h2>
                <span className={`${s.arrow} ${isOpen ? s.open : ''}`}>▼</span>
            </div>
            {isOpen && <div className={s.accordionContent}>{children}</div>}
        </div>
    );
};

const Why = () => {
    return (
        <section className={s.Why}>
            <div className="container">
                <div className={s.wrapper}>
                   
                    <div className={s.accordion}>
                        <div className={s.text}>
                            <h3>WHY CHOOSE US</h3>
                            <h1>Why Choose Us for Your VR Needs</h1>
                        </div>
                        <AccordionItem title="Passionate and Experienced Team">
                            <p>
                                We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences.
                            </p>
                        </AccordionItem>
                        <AccordionItem title="Customized Solutions">
                            <p> We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences.</p>
                        </AccordionItem>
                        <AccordionItem title="Exceptional Customer Service">
                            <p> We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences.</p>
                        </AccordionItem>
                    </div>

                    <div className={s.card}>
                        <img src="/choose.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Why;