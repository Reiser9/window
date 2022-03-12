import React from 'react';

const TarifItem = ({name, price, points}) => {
	return(
		<div className="flexcenter tarifs__item">
		    <div className="flexcenter">
		        <h4 className="subtitle tarifs__item--title">
		            {name}
		        </h4>

		        <p className="subtitle tarifs__item--price">
		            от {price} руб/м2
		        </p>

		        <ul className="flex tarifs__item--point--inner">
		        	{points?.map((d, id) => <li key={id} className="text__point tarifs__item--point">
		                <img className="text__point--icon" src="/assets/img/check.webp" alt="Галочка" />

		                {d.text}
		            </li>)}
		        </ul>
		    </div>

		    <button className="button green tarifs__item--button">
		        Оформить заказ
		    </button>
		</div>
	)
}

export default TarifItem;