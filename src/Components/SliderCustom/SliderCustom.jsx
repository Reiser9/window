import React from 'react';

import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './SliderCustom.css';

const slidesData = [
	{
		title: 'Оставляете заявку',
		text: 'Мы успешно работаем в этой сфере по сей день, благодаря наличию надежно устоявшегося принципа – производить тщательный отбор специалистов на любую должность в компании. Мы ручаемся за наших сотрудников, они выполняют работу в срок и должным образом.',
		img: '/assets/img/howwork1.jpg'
	},
	{
		title: 'Замер объекта',
		text: 'Мы успешно работаем в этой сфере по сей день, благодаря наличию надежно устоявшегося принципа – производить тщательный отбор специалистов на любую должность в компании. Мы ручаемся за наших сотрудников, они выполняют работу в срок и должным образом.',
		img: '/assets/img/howwork1.jpg'
	},
	{
		title: 'Производим',
		text: 'Мы успешно работаем в этой сфере по сей день, благодаря наличию надежно устоявшегося принципа – производить тщательный отбор специалистов на любую должность в компании. Мы ручаемся за наших сотрудников, они выполняют работу в срок и должным образом.',
		img: '/assets/img/howwork1.jpg'
	},
	{
		title: 'Доставка и монтаж',
		text: 'Мы успешно работаем в этой сфере по сей день, благодаря наличию надежно устоявшегося принципа – производить тщательный отбор специалистов на любую должность в компании. Мы ручаемся за наших сотрудников, они выполняют работу в срок и должным образом.',
		img: '/assets/img/howwork1.jpg'
	},
	{
		title: 'Результат',
		text: 'Мы успешно работаем в этой сфере по сей день, благодаря наличию надежно устоявшегося принципа – производить тщательный отбор специалистов на любую должность в компании. Мы ручаемся за наших сотрудников, они выполняют работу в срок и должным образом.',
		img: '/assets/img/howwork1.jpg'
	}
]

const SliderCustom = () => {
	const [slide, setSlide] = React.useState(1);

	return(
		<div className="default__margin flexcenter">
			<div className="slider__paggination">
				{slidesData.map((d, id) => <div key={id} className={`slider__paggination--item flexcenter${slide === id + 1 ? ' active' : ''}${slide > id + 1 ? ' actived' : ''}`}>
						<p className="slider__paggination--number">
							{id + 1}
						</p>

						<p className="slider__paggination--item--text">
							{d.title}
						</p>
				</div>)}
			</div>

			<Swiper onSlideChange={(slide) => setSlide(slide.snapIndex + 1)} onSwiper={(slide) => setSlide(slide.snapIndex + 1)} className="slider__custom" modules={[Navigation]} spaceBetween={30} slidesPerView={1} navigation>
				{slidesData.map((d, id) => <SwiperSlide key={id} className="slider__custom--item">
					<div className="slider__custom--text--inner flex">
						<h4 className="slider__custom--title">
							{d.title}:
						</h4>

						<p className="text slider__custom--text">
							{d.text}
						</p>
					</div>

					<img src={d.img} className="slider__custom--img" alt="Картинка" />
				</SwiperSlide>)}
			</Swiper>
		</div>
	)
}

export default SliderCustom;