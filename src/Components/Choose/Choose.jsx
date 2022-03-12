import React from 'react';

import './Choose.css';

const Choose = () => {
	return(
		<section className="choose">
		    <img className="choose__man" src="/assets/img/man.webp" alt="Человек" />

		    <div className="container">
		        <div className="choose__inner flex">
		            <h3 className="title">
		                Не можете выбрать? Мы вам подскажем!
		            </h3>

		            <p className="choose__text">
		                Мы успешно работаем в этой сфере по сей день, благодаря наличию надежно устоявшегося принципа – производить тщательный отбор специалистов на любую должность в компании.
		            </p>

		            <button className="button white choose__button">
		                Написать нам
		            </button>
		        </div>
		    </div>
		</section>
	)
}

export default Choose;