import React from 'react';
import {Link} from 'react-router-dom';

import './Single.css';

const Single = () => {
	return(
		<section className="single">
			<img src="/assets/img/main-img2.webp" className="single__bg" alt="Фон" />

		    <div className="container">
		        <div className="flex">
		            <div className="breadcrumb">
		                <Link to="/" className="breadcrumb__link">
		                    Главная
		                </Link>

		                <div className="breadcrumb__split">/</div>

		                <Link to="/windows" className="breadcrumb__link">
		                    Мягкие окна
		                </Link>

		                <div className="breadcrumb__split">/</div>

		                <div className="breadcrumb__current">
		                    Для беседок
		                </div>
		            </div>

		            <div className="flex single__text--inner">
		                <h2 className="single__title">
		                    Мягкие окна для беседок
		                </h2>

		                <p className="single__text">
		                    Мы предлагаем  заказать изготовление мягких окон для беседок по чертежам, согласно предоставленным размерам, так же осуществим монтаж конструкций. 
		                </p>

		                <button className="button white single__button">
		                    Подробнее
		                </button>
		            </div>
		        </div>
		    </div>
		</section>
	)
}

export default Single;