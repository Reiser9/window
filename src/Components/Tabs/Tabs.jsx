import React from 'react';
import $ from 'jquery';

import './Tabs.css';

const Tabs = () => {
	React.useEffect(() => {
	    $(".tab__item").on("click", function(){
	        $(".tab__item").removeClass("active");
	        $(this).addClass("active");
	        $(".tab__content").removeClass("active");
	        $(".tab__content[data-tab="+$(this).attr("data-tab")+"]").addClass("active");
	    });
	}, []);

	return(
		<section className="template">
		    <div className="container">
		        <div className="flexcenter">
		            <h2 className="title center">
		                Стоимость мягких окон для беседок
		            </h2>

		            <div className="tab__inner default__margin">
		                <span className="tab__item active" data-tab="1">
		                    Мягкие окона более 50 м²
		                </span>

		                <span className="tab__item" data-tab="2">
		                    Мягкие окона от 15 м²  до 50 м²
		                </span>

		                <span className="tab__item" data-tab="3">
		                    Мягкие окона до 15 м²
		                </span>
		            </div>

		            <div className="tab__content flex active" data-tab="1">
		                <div className="price__item">
		                    <p className="price__item--title">
		                        Стандарт
		                    </p>

		                    <p className="price__item--value">
		                        1 150 руб/м2
		                    </p>
		                </div>

		                <div className="price__item">
		                    <p className="price__item--title">
		                        Премиум
		                    </p>

		                    <p className="price__item--value">
		                        1 200 руб/м2
		                    </p>
		                </div>

		                <div className="price__item">
		                    <p className="price__item--title">
		                        Люкс
		                    </p>

		                    <p className="price__item--value">
		                        1 350 руб/м2
		                    </p>
		                </div>

		                <div className="price__item">
		                    <p className="price__item--title">
		                        Под ключ
		                    </p>

		                    <p className="price__item--value">
		                        1 550 руб/м2
		                    </p>
		                </div>
		            </div>

		            <div className="tab__content flex" data-tab="2">
		                <div className="price__item">
		                    <p className="price__item--title">
		                        Стандарт 2
		                    </p>

		                    <p className="price__item--value">
		                        1 150 руб/м2
		                    </p>
		                </div>

		                <div className="price__item">
		                    <p className="price__item--title">
		                        Премиум 2
		                    </p>

		                    <p className="price__item--value">
		                        1 200 руб/м2
		                    </p>
		                </div>

		                <div className="price__item">
		                    <p className="price__item--title">
		                        Люкс 2
		                    </p>

		                    <p className="price__item--value">
		                        1 350 руб/м2
		                    </p>
		                </div>

		                <div className="price__item">
		                    <p className="price__item--title">
		                        Под ключ 2
		                    </p>

		                    <p className="price__item--value">
		                        1 550 руб/м2
		                    </p>
		                </div>
		            </div>

		            <div className="tab__content flex" data-tab="3">
		                <div className="price__item">
		                    <p className="price__item--title">
		                        Стандарт 3
		                    </p>

		                    <p className="price__item--value">
		                        1 150 руб/м2
		                    </p>
		                </div>

		                <div className="price__item">
		                    <p className="price__item--title">
		                        Премиум 3
		                    </p>

		                    <p className="price__item--value">
		                        1 200 руб/м2
		                    </p>
		                </div>

		                <div className="price__item">
		                    <p className="price__item--title">
		                        Люкс 3
		                    </p>

		                    <p className="price__item--value">
		                        1 350 руб/м2
		                    </p>
		                </div>

		                <div className="price__item">
		                    <p className="price__item--title">
		                        Под ключ 3
		                    </p>

		                    <p className="price__item--value">
		                        1 550 руб/м2
		                    </p>
		                </div>
		            </div>

		            <button className="button green price__button">
		                Оформить заказ
		            </button>
		        </div>
		    </div>
		</section>
	)
}

export default Tabs;