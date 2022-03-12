import React from 'react';

const Card = ({img, name}) => {
	return(
		<div className="material__item flex">
		    <img src={img} className="work__item--img" alt="Картинка" />

		    <p className="work__item--title">
		        {name}
		    </p>

		    <a href="https://google.com" className="work__item--more">
		        Подробнее
		    </a>
		</div>
	)
}

export default Card;