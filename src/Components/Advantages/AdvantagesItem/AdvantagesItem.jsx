import React from 'react';

const AdvantagesItem = ({title, text, icon}) => {
	return(
		<div className="points__item flexcenter">
		    <img className="points__item--img" src={icon} alt="Иконка" />

		    <h4 className="points__item--title">
		        {title}
		    </h4>

		    <p className="points__item--text">
		        {text}
		    </p>
		</div>
	)
}

export default AdvantagesItem;