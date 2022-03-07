import React from 'react';

import './InfoBlock.css';

const InfoBlock = () => {
	return(
		<section className="template">
		    <div className="container">
		        <div className="flex about__inner">
		            <img src="/assets/img/about.jpg" className="about__img" alt="О нас" />

		            <div className="about__text--inner flex">
		                <p className="text">
		                    Наша компания занимается производством и монтажом мягких окон с 2015 года. За это время нами реализованы десятки проектов по обустройству беседок и террас во многих районах Подмосковья. Предлагаем вам подробнее ознакомиться с нашими выполненными работами. Примеры проектов позволят вам оценить профессионализм наших сотрудников и качество выполненных работ. Помогут определится с выбором материалов для изготовления мягких окон и сопутствующей фурнитуры.
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

export default InfoBlock;