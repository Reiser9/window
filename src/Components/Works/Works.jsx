import React from 'react';

import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './Works.css';

const Works = () => {
	return(
		<section className="template">
		    <div className="container">
		        <div className="flexcenter about__inner">
		            <h2 className="title center">
		                Наши работы
		            </h2>

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
		    </div>
		</section>
	)
}

export default Works;