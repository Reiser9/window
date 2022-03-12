import React from 'react';

import SliderCustom from '../SliderCustom/SliderCustom.jsx';

const HowWork = () => {
	return(
		<section className="template">
		    <div className="container">
		        <div className="material__inner flexcenter">
		            <h2 className="title center">
		                Как мы работаем
		            </h2>

		            <SliderCustom />

		            <button className="button green default__margin">
		                Оформить заказ
		            </button>
		        </div>
		    </div>
		</section>
	)
}

export default HowWork;