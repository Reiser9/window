import React from 'react';

import './MainBlock.css';

const MainBlock = () => {
	return(
		<section className="main">
		    <div className="container">
		        <div className="flex main__inner">
		            <div className="flex main__text--inner">
		                <h2 className="main__text--title">
		                    Мягкие окна в Серпухова под ключ <span className="green__color">от 1 250 руб/м2</span>
		                </h2>

		                <ul className="flex main__text--point--inner">
		                    <li className="text__point main__text--point">
		                        <img className="text__point--icon" src="/assets/img/check.webp" alt="Галочка" />

		                        Производим монтаж в течении 1 дня
		                    </li>

		                    <li className="text__point main__text--point">
		                        <img className="text__point--icon" src="/assets/img/check.webp" alt="Галочка" />

		                        Срок производства рассчитывается индивидуально для каждого заказчика
		                    </li>
		                </ul>

		                <button className="button white main__text--button">
		                    Рассчитать стоимость
		                </button>
		            </div>
		        </div>
		    </div>
		</section>
	)
}

export default MainBlock;