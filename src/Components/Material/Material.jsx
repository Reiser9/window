import React from 'react';

import './Material.css';

import Card from '../Card/Card.jsx';

const materialData = [
	{
		img: 'assets/img/material1.jpg',
		name: 'Москитная сетка'
	},
	{
		img: 'assets/img/material2.jpg',
		name: 'Карабин'
	},
	{
		img: 'assets/img/material3.jpg',
		name: 'Карабин'
	}
]

const Material = () => {
	return(
		<section className="template">
		    <div className="container">
		        <div className="material__inner flexcenter">
		            <h2 className="title center">
		                Какие материалы мы используем
		            </h2>

		            <div className="material__content default__margin">
		            	{materialData.map((d, id) => <Card key={id} name={d.name} img={d.img} />)}
		            </div>
		        </div>
		    </div>
		</section>
	)
}

export default Material;