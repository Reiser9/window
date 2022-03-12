import React from 'react';

import './Tarifs.css';

import TarifItem from './TarifItem/TarifItem.jsx';

const tarifsData = [
	{
		name: 'Стандарт',
		price: '1 100',
		points: [
			{
				text: 'Пленка Китай 700 мкм до -20 C0'
			},
			{
				text: 'Окантовка ОКСФОРД Премиум'
			},
			{
				text: 'Комплект креплений через каждые 40 см'
			}
		]
	},
	{
		name: 'Премиум',
		price: '1 150',
		points: [
			{
				text: 'Пленка Ю. КОрея 700 мкм до -40 C0'
			},
			{
				text: 'Окантовка тканью ОКСФОРД Премиум или ПВХ (выбор из цветов по каталогу)'
			},
			{
				text: 'Комплект креплений через каждые 40 см'
			}
		]
	},
	{
		name: 'Под ключ',
		price: '1 550',
		points: [
			{
				text: 'В комплектации «Стандарт» включая замер, доставку и монтаж при заказе более 20 м2 и установке в деревянное плоское основание'
			}
		]
	}
]

const Tarifs = () => {
	return(
		<section className="template">
		    <div className="container">
		        <div className="flexcenter tarifs__inner">
		            <h2 className="title center">
		                Купить мягкие окна в Серпухова
		            </h2>

		            <p className="text tarifs__text">
		                Мягкие окна ПВХ - это отличная альтернатива классическому остеклению. Простота монтажа, долговечность, недорогая стоимость мягких окон… У нас можно купить шторы из гибкого ПВХ недорого и без ущерба качеству.
		            </p>

		            <div className="default__margin tarifs__content">
		            	{tarifsData.map((d, id) => <TarifItem key={id} name={d.name} price={d.price} points={d.points} />)}
		            </div>
		        </div>
		    </div>
		</section>
	)
}

export default Tarifs;