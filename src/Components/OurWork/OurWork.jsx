import React from 'react';

import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

const OurWork = () => {
	return(
		<section className="template">
		    <div className="container">
		        <div className="material__inner flexcenter">
		            <h2 className="title center">
		                Наши работы
		            </h2>

		            <div className="tab__inner tab__index default__margin">
		                <span className="tab__item tab active" data-tab="1">
		                    Все
		                </span>

		                <span className="tab__item tab" data-tab="2">
		                    Беседки
		                </span>

		                <span className="tab__item tab" data-tab="3">
		                    Террасы
		                </span>

		                <span className="tab__item tab" data-tab="4">
		                    Веранды
		                </span>

		                <span className="tab__item tab" data-tab="5">
		                    Кафе
		                </span>
		            </div>

		            <div className="tab__content flex tab__value active" data-tab="1">
		                <Swiper className="default__margin work__content" loop modules={[Navigation]} spaceBetween={30} slidesPerView={3} navigation breakpoints={{
		                        998: {
		                            slidesPerView: 3
		                        },
		                        768: {
		                            slidesPerView: 2
		                        },
		                        0: {
		                            slidesPerView: 1
		                        }
		                    }}>
		                    <SwiperSlide className="work__item flex">
		                        <img src="assets/img/work1.jpg" className="work__item--img" alt="Наши работы" />

		                        <p className="work__item--title">
		                            Мягкие окна для беседки в Серпуховском районе
		                        </p>

		                        <a href="https://google.com" className="work__item--more">
		                            Подробнее
		                        </a>
		                    </SwiperSlide>

		                    <SwiperSlide className="work__item flex">
		                        <img src="assets/img/work2.jpg" className="work__item--img" alt="Наши работы" />

		                        <p className="work__item--title">
		                            Мягкие окна для беседки в Жуковском
		                        </p>

		                        <a href="https://google.com" className="work__item--more">
		                            Подробнее
		                        </a>
		                    </SwiperSlide>

		                    <SwiperSlide className="work__item flex">
		                        <img src="assets/img/work3.jpg" className="work__item--img" alt="Наши работы" />

		                        <p className="work__item--title">
		                            Мягкие окна для беседки в Химках
		                        </p>

		                        <a href="https://google.com" className="work__item--more">
		                            Подробнее
		                        </a>
		                    </SwiperSlide>

		                    <SwiperSlide className="work__item flex">
		                        <img src="assets/img/work1.jpg" className="work__item--img" alt="Наши работы" />

		                        <p className="work__item--title">
		                            Мягкие окна для беседки в Серпуховском районе
		                        </p>

		                        <a href="https://google.com" className="work__item--more">
		                            Подробнее
		                        </a>
		                    </SwiperSlide>
		                </Swiper>
		            </div>

		            <div className="tab__content tab__value flex" data-tab="2">
		                <Swiper className="default__margin work__content" loop modules={[Navigation]} spaceBetween={30} slidesPerView={3} navigation breakpoints={{
		                        998: {
		                            slidesPerView: 3
		                        },
		                        768: {
		                            slidesPerView: 2
		                        },
		                        0: {
		                            slidesPerView: 1
		                        }
		                    }}>
		                    <SwiperSlide className="work__item flex">
		                        <img src="assets/img/work1.jpg" className="work__item--img" alt="Наши работы" />

		                        <p className="work__item--title">
		                            Мягкие окна для беседки в Серпуховском районе
		                        </p>

		                        <a href="https://google.com" className="work__item--more">
		                            Подробнее
		                        </a>
		                    </SwiperSlide>

		                    <SwiperSlide className="work__item flex">
		                        <img src="assets/img/work2.jpg" className="work__item--img" alt="Наши работы" />

		                        <p className="work__item--title">
		                            Мягкие окна для беседки в Жуковском 2
		                        </p>

		                        <a href="https://google.com" className="work__item--more">
		                            Подробнее
		                        </a>
		                    </SwiperSlide>

		                    <SwiperSlide className="work__item flex">
		                        <img src="assets/img/work3.jpg" className="work__item--img" alt="Наши работы" />

		                        <p className="work__item--title">
		                            Мягкие окна для беседки в Химках
		                        </p>

		                        <a href="https://google.com" className="work__item--more">
		                            Подробнее
		                        </a>
		                    </SwiperSlide>

		                    <SwiperSlide className="work__item flex">
		                        <img src="assets/img/work1.jpg" className="work__item--img" alt="Наши работы" />

		                        <p className="work__item--title">
		                            Мягкие окна для беседки в Серпуховском районе
		                        </p>

		                        <a href="https://google.com" className="work__item--more">
		                            Подробнее
		                        </a>
		                    </SwiperSlide>
		                </Swiper>
		            </div>

		            <div className="tab__content tab__value flex" data-tab="3">
		                <Swiper className="default__margin work__content" loop modules={[Navigation]} spaceBetween={30} slidesPerView={3} navigation breakpoints={{
		                        998: {
		                            slidesPerView: 3
		                        },
		                        768: {
		                            slidesPerView: 2
		                        },
		                        0: {
		                            slidesPerView: 1
		                        }
		                    }}>
		                    <SwiperSlide className="work__item flex">
		                        <img src="assets/img/work1.jpg" className="work__item--img" alt="Наши работы" />

		                        <p className="work__item--title">
		                            Мягкие окна для беседки в Серпуховском районе
		                        </p>

		                        <a href="https://google.com" className="work__item--more">
		                            Подробнее
		                        </a>
		                    </SwiperSlide>

		                    <SwiperSlide className="work__item flex">
		                        <img src="assets/img/work2.jpg" className="work__item--img" alt="Наши работы" />

		                        <p className="work__item--title">
		                            Мягкие окна для беседки в Жуковском 3
		                        </p>

		                        <a href="https://google.com" className="work__item--more">
		                            Подробнее
		                        </a>
		                    </SwiperSlide>

		                    <SwiperSlide className="work__item flex">
		                        <img src="assets/img/work3.jpg" className="work__item--img" alt="Наши работы" />

		                        <p className="work__item--title">
		                            Мягкие окна для беседки в Химках
		                        </p>

		                        <a href="https://google.com" className="work__item--more">
		                            Подробнее
		                        </a>
		                    </SwiperSlide>

		                    <SwiperSlide className="work__item flex">
		                        <img src="assets/img/work1.jpg" className="work__item--img" alt="Наши работы" />

		                        <p className="work__item--title">
		                            Мягкие окна для беседки в Серпуховском районе
		                        </p>

		                        <a href="https://google.com" className="work__item--more">
		                            Подробнее
		                        </a>
		                    </SwiperSlide>
		                </Swiper>
		            </div>

		            <div className="tab__content tab__value flex" data-tab="4">
		                <Swiper className="default__margin work__content" loop modules={[Navigation]} spaceBetween={30} slidesPerView={3} navigation breakpoints={{
		                        998: {
		                            slidesPerView: 3
		                        },
		                        768: {
		                            slidesPerView: 2
		                        },
		                        0: {
		                            slidesPerView: 1
		                        }
		                    }}>
		                    <SwiperSlide className="work__item flex">
		                        <img src="assets/img/work1.jpg" className="work__item--img" alt="Наши работы" />

		                        <p className="work__item--title">
		                            Мягкие окна для беседки в Серпуховском районе
		                        </p>

		                        <a href="https://google.com" className="work__item--more">
		                            Подробнее
		                        </a>
		                    </SwiperSlide>

		                    <SwiperSlide className="work__item flex">
		                        <img src="assets/img/work2.jpg" className="work__item--img" alt="Наши работы" />

		                        <p className="work__item--title">
		                            Мягкие окна для беседки в Жуковском 4
		                        </p>

		                        <a href="https://google.com" className="work__item--more">
		                            Подробнее
		                        </a>
		                    </SwiperSlide>

		                    <SwiperSlide className="work__item flex">
		                        <img src="assets/img/work3.jpg" className="work__item--img" alt="Наши работы" />

		                        <p className="work__item--title">
		                            Мягкие окна для беседки в Химках
		                        </p>

		                        <a href="https://google.com" className="work__item--more">
		                            Подробнее
		                        </a>
		                    </SwiperSlide>

		                    <SwiperSlide className="work__item flex">
		                        <img src="assets/img/work1.jpg" className="work__item--img" alt="Наши работы" />

		                        <p className="work__item--title">
		                            Мягкие окна для беседки в Серпуховском районе
		                        </p>

		                        <a href="https://google.com" className="work__item--more">
		                            Подробнее
		                        </a>
		                    </SwiperSlide>
		                </Swiper>
		            </div>

		            <div className="tab__content tab__value flex" data-tab="5">
		                <Swiper className="default__margin work__content" loop modules={[Navigation]} spaceBetween={30} slidesPerView={3} navigation breakpoints={{
		                        998: {
		                            slidesPerView: 3
		                        },
		                        768: {
		                            slidesPerView: 2
		                        },
		                        0: {
		                            slidesPerView: 1
		                        }
		                    }}>
		                    <SwiperSlide className="work__item flex">
		                        <img src="assets/img/work1.jpg" className="work__item--img" alt="Наши работы" />

		                        <p className="work__item--title">
		                            Мягкие окна для беседки в Серпуховском районе
		                        </p>

		                        <a href="https://google.com" className="work__item--more">
		                            Подробнее
		                        </a>
		                    </SwiperSlide>

		                    <SwiperSlide className="work__item flex">
		                        <img src="assets/img/work2.jpg" className="work__item--img" alt="Наши работы" />

		                        <p className="work__item--title">
		                            Мягкие окна для беседки в Жуковском 5
		                        </p>

		                        <a href="https://google.com" className="work__item--more">
		                            Подробнее
		                        </a>
		                    </SwiperSlide>

		                    <SwiperSlide className="work__item flex">
		                        <img src="assets/img/work3.jpg" className="work__item--img" alt="Наши работы" />

		                        <p className="work__item--title">
		                            Мягкие окна для беседки в Химках
		                        </p>

		                        <a href="https://google.com" className="work__item--more">
		                            Подробнее
		                        </a>
		                    </SwiperSlide>

		                    <SwiperSlide className="work__item flex">
		                        <img src="assets/img/work1.jpg" className="work__item--img" alt="Наши работы" />

		                        <p className="work__item--title">
		                            Мягкие окна для беседки в Серпуховском районе
		                        </p>

		                        <a href="https://google.com" className="work__item--more">
		                            Подробнее
		                        </a>
		                    </SwiperSlide>
		                </Swiper>
		            </div>
		        </div>
		    </div>
		</section>
	)
}

export default OurWork;