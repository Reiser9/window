import React from 'react';

import './GreyBlock.css';

const GreyBlock = () => {
	return(
		<section className="grey">
		    <div className="container">
		        <div className="grey__inner">
		            <img src="/assets/img/img.jpg" className="grey__img" alt="Картинка" />

		            <div className="grey__text--inner flex">
		                <h2 className="title white__color">
		                    Монтаж мягких окон от 1150 руб/м2 в Серпухова
		                </h2>

		                <ul className="grey__text--point--inner flex">
		                    <li className="text point__text white__color">
		                        Минимальная сумма монтажа 8000 рублей.
		                    </li>

		                    <li className="text point__text white__color">
		                        Стоимость монтажа в кирпичные, бетонные, керамические или бревенчатые поверхности может быть увеличена по согласованию с заказчиком.
		                    </li>

		                    <li className="text point__text white__color">
		                        Обустройство дополнительных конструкций для крепления оплачивается отдельно.
		                    </li>
		                </ul>

		                <a href="https://google.com" className="grey__text--link">
		                    Подробнее
		                </a>
		            </div>
		        </div>
		    </div>
		</section>
	)
}

export default GreyBlock;