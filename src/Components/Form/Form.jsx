import React from 'react';
import $ from 'jquery';

import './Form.css';

const Form = () => {
	React.useEffect(() => {
	    $(".form__input").on("blur", function(){
	        if($(this).val().trim() !== '') $(this).siblings(".input__placeholder").addClass("active");
	        else $(this).siblings(".input__placeholder").removeClass("active");
	    });
	}, []);

	return(
		<section className="form">
		    <div className="container">
		        <div className="form__inner">
		            <div className="form__text--inner flex">
		                <h2 className="title">
		                    Обсудим проект?
		                </h2>

		                <p className="text default__margin">
		                    Опишите Вашу задачу и отправьте нам заявку. Мы просчитаем бюджет, подберем инструменты и составим план работ по Вашему проекту и свяжемся с Вами в ближайшее время.
		                </p>
		            </div>

		            <div className="form__content flex">
		                <div className="form__input--inner">
		                    <input className="input form__input" />

		                    <p className="input__placeholder">
		                        Имя
		                    </p>
		                </div>

		                <div className="form__input--inner">
		                    <input className="input form__input" />

		                    <p className="input__placeholder">
		                        Электронная почта
		                    </p>
		                </div>

		                <div className="form__input--inner">
		                    <input className="input form__input" />

		                    <p className="input__placeholder">
		                        Номер телефона
		                    </p>
		                </div>

		                <div className="form__input--inner">
		                    <input className="input form__input" />

		                    <p className="input__placeholder">
		                        Пару слов о Вашем проекте
		                    </p>
		                </div>

		                <div className="form__input--label--inner">
		                    <input id="agree" type="checkbox" className="input__checkbox" />

		                    <label for="agree" className="form__input--label">
		                        Я согласен(на) на обработку персональных данных
		                    </label>
		                </div>

		                <button className="button white form__button">
		                    Отправить заявку
		                </button>
		            </div>
		        </div>
		    </div>
		</section>
	)
}

export default Form;