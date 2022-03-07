import React from 'react';

import {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Review.css';

const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
        return '<span class="slick__dot '+ className +'"></span>';
    },
};

const Review = () => {
	return(
		<section className="template">
		    <div className="container">
		        <div className="flexcenter">
		            <h2 className="title center">
		                Отзывы
		            </h2>

		            <Swiper className="slider default__margin review__content" loop modules={[Pagination, Navigation]} spaceBetween={30} slidesPerView={2} pagination={pagination} navigation breakpoints={{
		                    998: {
		                        slidesPerView: 2
		                    },
		                    0: {
		                        slidesPerView: 1
		                    }
		                }}>
		                <SwiperSlide className="review__item flex">
		                    <img src="/assets/img/quote.webp" className="review__item--quote" alt="Цитата" />

		                    <p className="review__item--text">
		                        В последний момент перед новым годом поняли, что в праздники в беседке делать нечего. Все завалило снегом и он не перестает идти. Вызвали бригаду по установке мягких окон и не прогадала. Большое спасибо за быструю и своевременную работу.
		                    </p>

		                    <p className="review__item--name">
		                        Нина Петровна
		                    </p>
		                </SwiperSlide>

		                <SwiperSlide className="review__item flex">
		                    <img src="/assets/img/quote.webp" className="review__item--quote" alt="Цитата" />

		                    <p className="review__item--text">
		                        В последний момент перед новым годом поняли, что в праздники в беседке делать нечего. Все завалило снегом и он не перестает идти. Вызвали бригаду по установке мягких окон и не прогадала. Большое спасибо за быструю и своевременную работу.
		                    </p>

		                    <p className="review__item--name">
		                        Нина Петровна
		                    </p>
		                </SwiperSlide>

		                <SwiperSlide className="review__item flex">
		                    <img src="/assets/img/quote.webp" className="review__item--quote" alt="Цитата" />

		                    <p className="review__item--text">
		                        В последний момент перед новым годом поняли, что в праздники в беседке делать нечего. Все завалило снегом и он не перестает идти. Вызвали бригаду по установке мягких окон и не прогадала. Большое спасибо за быструю и своевременную работу.
		                    </p>

		                    <p className="review__item--name">
		                        Нина Петровна
		                    </p>
		                </SwiperSlide>

		                <SwiperSlide className="review__item flex">
		                    <img src="/assets/img/quote.webp" className="review__item--quote" alt="Цитата" />

		                    <p className="review__item--text">
		                        В последний момент перед новым годом поняли, что в праздники в беседке делать нечего. Все завалило снегом и он не перестает идти. Вызвали бригаду по установке мягких окон и не прогадала. Большое спасибо за быструю и своевременную работу.
		                    </p>

		                    <p className="review__item--name">
		                        Нина Петровна
		                    </p>
		                </SwiperSlide>

		                <SwiperSlide className="review__item flex">
		                    <img src="/assets/img/quote.webp" className="review__item--quote" alt="Цитата" />

		                    <p className="review__item--text">
		                        В последний момент перед новым годом поняли, что в праздники в беседке делать нечего. Все завалило снегом и он не перестает идти. Вызвали бригаду по установке мягких окон и не прогадала. Большое спасибо за быструю и своевременную работу.
		                    </p>

		                    <p className="review__item--name">
		                        Нина Петровна
		                    </p>
		                </SwiperSlide>
		            </Swiper>
		        </div>
		    </div>
		</section>
	)
}

export default Review;