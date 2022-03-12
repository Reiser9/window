import React from 'react';

import './Send.css';

const Send = () => {
	return(
		<section className="help">
		    <div className="container">
		        <div className="help__inner">
		            <div className="help__text--inner flex">
		                <h3 className="help__text--title">
		                    Не можете определиться с выбором?
		                </h3>

		                <p className="help__text--text">
		                    Оставьте заявку и мы свяжемся с Вами в ближайшее время
		                </p>
		            </div>

		            <div className="help__form--inner">
		                <input className="input help__form--input" placeholder="Ваш номер телефона" />

		                <button className="button white help__form--button">
		                    Отправить заявку
		                </button>
		            </div>
		        </div>
		    </div>
		</section>
	)
}

export default Send;