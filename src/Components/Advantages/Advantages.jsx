import React from 'react';

import './Advantages.css';

import AdvantagesItem from './AdvantagesItem/AdvantagesItem.jsx';

const advantagesData = [
	{
		icon: '/assets/img/point1.webp',
		title: 'Большой срок службы',
		text: 'Срок службы составляет 10 лет, при соблюдении правил эксплуатации.'
	},
	{
		icon: '/assets/img/point2.webp',
		title: 'Простой монтаж',
		text: 'Мы проведём инструктаж по установке, если хотите выполнить монтаж самостоятельно.'
	},
	{
		icon: '/assets/img/point3.webp',
		title: 'Очень быстро',
		text: 'Мы работаем 24/7, поэтому ваш заказ будет выполнен и смонтирован в кратчайшие сроки!'
	},
	{
		icon: '/assets/img/point4.webp',
		title: 'Лучшие пленки',
		text: 'Мы не экономим на ваших окнах и используем только лучшие всепогодные пленки!'
	},
	{
		icon: '/assets/img/point5.webp',
		title: 'Любые варианты окантовки',
		text: 'Немецкая ткань ПВХ в десяти расцветках («Стандарт»). С нами надёжно и практично!'
	},
	{
		icon: '/assets/img/point6.webp',
		title: 'Прочные москитные сетки',
		text: 'Мы используем только прочнейшие москитные сетки, выдерживающие очень большие нагрузки.'
	}
]

const Advantages = () => {
	return(
		<section className="template">
		    <div className="container">
		        <div className="flexcenter points__inner">
		            <h2 className="title center">
		                Наши преимущества
		            </h2>

		            <div className="default__margin points__content">
		            	{advantagesData.map((d, id) => <AdvantagesItem key={id} title={d.title} text={d.text} icon={d.icon} />)}
		            </div>
		        </div>
		    </div>
		</section>
	)
}

export default Advantages;