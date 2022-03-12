import React from 'react';

import './Gallery.css';

const Gallery = () => {
	return(
		<section className="template">
		    <div className="container">
		        <div className="gallery__inner flexcenter">
		            <h2 className="title center">
		                Куда устанавливаются мягкие окна
		            </h2>

		            <div className="gallery__content default__margin">
		                <div className="gallery__tab--inner tab__index flex">
		                    <button className="button gallery__tab tab active" data-tab="1">
		                        Для беседок
		                    </button>

		                    <button className="button gallery__tab tab" data-tab="2">
		                        Для террас
		                    </button>

		                    <button className="button gallery__tab tab" data-tab="3">
		                        Для веранд
		                    </button>

		                    <button className="button gallery__tab tab" data-tab="4">
		                        Для кафе
		                    </button>

		                    <button className="button gallery__tab tab" data-tab="5">
		                        Для навеса
		                    </button>
		                </div>

		                <div className="gallery__item tab__value active" data-tab="1">
		                    <img className="gallery__content--img" src="/assets/img/about.jpg" alt="Картинка" />

		                    <div className="gallery__content--text flex">
		                        <p className="text">
		                            Мы успешно работаем в этой сфере по сей день, благодаря наличию надежно устоявшегося принципа – производить тщательный отбор специалистов на любую должность в компании. Мы ручаемся за наших сотрудников, они выполняют работу в срок и должным образом.
		                        </p>

		                        <button className="button white single__button">
		                            Подробнее
		                        </button>
		                    </div>
		                </div>

		                <div className="gallery__item tab__value" data-tab="2">
		                    <img className="gallery__content--img" src="/assets/img/about.jpg" alt="Картинка" />

		                    <div className="gallery__content--text flex">
		                        <p className="text">
		                            Мы успешно работаем в этой сфере по сей день, благодаря наличию надежно устоявшегося принципа – производить тщательный отбор специалистов на любую должность в компании. Мы ручаемся за наших сотрудников, они выполняют работу в срок и должным образом. 2
		                        </p>

		                        <button className="button white single__button">
		                            Подробнее
		                        </button>
		                    </div>
		                </div>

		                <div className="gallery__item tab__value" data-tab="3">
		                    <img className="gallery__content--img" src="/assets/img/about.jpg" alt="Картинка" />

		                    <div className="gallery__content--text flex">
		                        <p className="text">
		                            Мы успешно работаем в этой сфере по сей день, благодаря наличию надежно устоявшегося принципа – производить тщательный отбор специалистов на любую должность в компании. Мы ручаемся за наших сотрудников, они выполняют работу в срок и должным образом. 3
		                        </p>

		                        <button className="button white single__button">
		                            Подробнее
		                        </button>
		                    </div>
		                </div>

		                <div className="gallery__item tab__value" data-tab="4">
		                    <img className="gallery__content--img" src="/assets/img/about.jpg" alt="Картинка" />

		                    <div className="gallery__content--text flex">
		                        <p className="text">
		                            Мы успешно работаем в этой сфере по сей день, благодаря наличию надежно устоявшегося принципа – производить тщательный отбор специалистов на любую должность в компании. Мы ручаемся за наших сотрудников, они выполняют работу в срок и должным образом. 4
		                        </p>

		                        <button className="button white single__button">
		                            Подробнее
		                        </button>
		                    </div>
		                </div>

		                <div className="gallery__item tab__value" data-tab="5">
		                    <img className="gallery__content--img" src="/assets/img/about.jpg" alt="Картинка" />

		                    <div className="gallery__content--text flex">
		                        <p className="text">
		                            Мы успешно работаем в этой сфере по сей день, благодаря наличию надежно устоявшегося принципа – производить тщательный отбор специалистов на любую должность в компании. Мы ручаемся за наших сотрудников, они выполняют работу в срок и должным образом. 5
		                        </p>

		                        <button className="button white single__button">
		                            Подробнее
		                        </button>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		</section>
	)
}

export default Gallery;