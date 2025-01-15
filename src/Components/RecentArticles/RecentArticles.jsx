import React from "react";
import s from "./RecentArticles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";

const RecentArticles = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className={s.wrapper}>
            <nav className={s.nav}>
              <div>
                <p>OUR ARTICLES</p>
                <h1>Stay Up-to-Date with Our VR Insights</h1>
              </div>
              <button>see all</button>
            </nav>

            <div className={s.box}>
              <div className={s.Popular}>
                <Swiper
                  modules={[Navigation, Pagination]} // Подключаем модули
                  navigation // Включаем навигацию
                  pagination={{ clickable: true }} // Включаем пагинацию
                  spaceBetween={70}
                  slidesPerView={1}
                >
                  <SwiperSlide className={s.ebatslider}>
                    <div className={s.text1}>

                      <p>VR Games</p>
                      <h1>Entertainment Goes Virtual: The Rise of VR Gaming</h1>

                    </div>
                  </SwiperSlide>

                  <SwiperSlide className={s.ebatslider}>
                    <div className={s.text1}>

                      <p>VR Games</p>
                      <h1>Entertainment Goes Virtual: The Rise of VR Gaming</h1>

                    </div>
                  </SwiperSlide>

                  <SwiperSlide className={s.ebatslider}>
                    <div className={s.text1}>

                      <p>VR Games</p>
                      <h1>Entertainment Goes Virtual: The Rise of VR Gaming</h1>

                    </div>
                  </SwiperSlide>


                </Swiper>;
              </div>

              <div className={s.Recent}>
                <h1>Recent Article</h1>
                <div className={s.cards}>
                  <div className={s.card}>
                    <div className={s.img}>
                      <img src="/Recent-1.png" alt="" />
                    </div>
                    <div className={s.text}>
                      <h4>VR Education</h4>
                      <h3>
                        The Future of Education: How VR is Revolutionizing the
                        Classroom
                      </h3>
                    </div>
                    <button>
                      <img src="/arow.svg" alt="" />
                    </button>
                  </div>

                  <div className={s.card}>
                    <div className={s.img}>
                      <img src="/Recent-2.png" alt="" />
                    </div>
                    <div className={s.text}>
                      <h4>VR Education</h4>
                      <h3>
                        The Future of Education: How VR is Revolutionizing the
                        Classroom
                      </h3>
                    </div>
                    <button>
                      <img src="/arow.svg" alt="" />
                    </button>
                  </div>

                  <div className={s.card}>
                    <div className={s.img}>
                      <img src="/Recent-3.png" alt="" />
                    </div>
                    <div className={s.text}>
                      <h4>VR Education</h4>
                      <h3>
                        The Future of Education: How VR is Revolutionizing the
                        Classroom
                      </h3>
                    </div>
                    <button>
                      <img src="/arow.svg" alt="" />
                    </button>
                  </div>

                  <div className={s.card}>
                    <div className={s.img}>
                      <img src="/Recent-2.png" alt="" />
                    </div>
                    <div className={s.text}>
                      <h4>VR Education</h4>
                      <h3>
                        The Future of Education: How VR is Revolutionizing the
                        Classroom
                      </h3>
                    </div>
                    <button>
                      <img src="/arow.svg" alt="" />
                    </button>
                  </div>

                  <div className={s.card}>
                    <div className={s.img}>
                      <img src="/Recent-2.png" alt="" />
                    </div>
                    <div className={s.text}>
                      <h4>VR Education</h4>
                      <h3>
                        The Future of Education: How VR is Revolutionizing the
                        Classroom
                      </h3>
                    </div>
                    <button>
                      <img src="/arow.svg" alt="" />
                    </button>
                  </div>

                  <div className={s.card}>
                    <div className={s.img}>
                      <img src="/Recent-3.png" alt="" />
                    </div>
                    <div className={s.text}>
                      <h4>VR Education</h4>
                      <h3>
                        The Future of Education: How VR is Revolutionizing the
                        Classroom
                      </h3>
                    </div>
                    <button>
                      <img src="/arow.svg" alt="" />
                    </button>
                  </div>
                </div>
                <button className={s.btn}>see all</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentArticles;
