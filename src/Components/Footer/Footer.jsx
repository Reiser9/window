import React from 'react';
import {Link} from 'react-router-dom';

import './Footer.css';

const Footer = () => {
	return(
		<footer className="footer">
		    <div className="container">
		        <div className="flexcenter">
		            <div className="footer__content">
		                <Link to="/" className="footer__logo">
		                    Logotype
		                </Link>

		                <div className="footer__item">
		                    <h4 className="footer__item--title">
		                        Компания
		                    </h4>

		                    <div className="footer__item--nav--inner">
		                        <Link to="/prices" className="footer__item--nav--link">
		                            Стоимость
		                        </Link>

		                        <Link to="/about" className="footer__item--nav--link">
		                            О нас
		                        </Link>

		                        <Link to="/blog" className="footer__item--nav--link">
		                            Блог
		                        </Link>

		                        <Link to="/contacts" className="footer__item--nav--link">
		                            Контакты
		                        </Link>
		                    </div>
		                </div>

		                <div className="footer__item">
		                    <h4 className="footer__item--title">
		                        Мягкие окна
		                    </h4>

		                    <div className="footer__item--nav--inner">
		                        <Link to="/besedka" className="footer__item--nav--link">
		                            Для беседок
		                        </Link>

		                        <Link to="/terras" className="footer__item--nav--link">
		                            Для террас
		                        </Link>

		                        <Link to="/verande" className="footer__item--nav--link">
		                            Для веранд
		                        </Link>

		                        <Link to="/kafe" className="footer__item--nav--link">
		                            Для кафе
		                        </Link>
		                    </div>
		                </div>

		                <div className="footer__item">
		                    <h4 className="footer__item--title">
		                        Контакты
		                    </h4>

		                    <div className="footer__item--nav--inner">
		                        <p className="footer__item--nav--link">
		                            г. Москва, Илимская улица, 1Бс1
		                        </p>

		                        <a href="tel:74992772326" className="footer__item--nav--link">
		                            +7 (499) 277 23 26
		                        </a>

		                        <a href="mailto:okna@myagok.ru" className="footer__item--nav--link">
		                            okna@myagok.ru
		                        </a>

		                        <p className="footer__item--nav--link">
		                            Пн. - Пт. 11:00 - 19:00 Сб. - Вс. Выходной
		                        </p>
		                    </div>
		                </div>
		            </div>

		            <p className="footer__copy">
		                &copy; 2020 — Все права защищены.
		            </p>
		        </div>
		    </div>
		</footer>
	)
}

export default Footer;