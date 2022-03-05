import React from 'react';
import {Link} from 'react-router-dom';

import './App.css';

const App = () => {
    return(
        <>
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <Link to="/" className="logo">
                            <img src="/assets/img/logo.png" className="logo__img" alt="Логотип" />
                        </Link>

                        <div className="header__nav">
                            <div className="header__nav--link">
                                Мягкие окна

                                <img src="/assets/img/arrow-down.svg" className="header__nav--link--arrow" alt="Стрелка" />

                                <div className="dropdown__menu">
                                    <Link to="/besedka" className="dropdown__menu--link">
                                        Для беседок
                                    </Link>

                                    <Link to="/terras" className="dropdown__menu--link">
                                        Для террас
                                    </Link>

                                    <Link to="/verande" className="dropdown__menu--link">
                                        Для веранд
                                    </Link>

                                    <Link to="/kafe" className="dropdown__menu--link">
                                        Для кафе
                                    </Link>
                                </div>
                            </div>

                            <Link to="/services" className="header__nav--link">
                                Услуги
                            </Link>

                            <Link to="/works" className="header__nav--link">
                                Наши работы
                            </Link>

                            <Link to="/prices" className="header__nav--link">
                                Стоимость
                            </Link>

                            <Link to="/about" className="header__nav--link">
                                О компании
                            </Link>

                            <Link to="/contacts" className="header__nav--link">
                                Контакты
                            </Link>
                        </div>

                        <a href="tel:74992772326" className="button green header__call">
                            <svg className="header__call--icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5003 19.9771H17.3728C2.63531 19.1296 0.542808 6.69455 0.250308 2.89955C0.226739 2.60449 0.261624 2.30767 0.352964 2.02611C0.444304 1.74455 0.590303 1.48378 0.782596 1.25874C0.974889 1.0337 1.2097 0.848817 1.47357 0.71468C1.73743 0.580544 2.02518 0.499792 2.32031 0.477051H6.45281C6.75323 0.476761 7.04681 0.566684 7.29553 0.735173C7.54425 0.903662 7.73665 1.14295 7.84781 1.42205L8.98781 4.22705C9.09757 4.49971 9.12481 4.79861 9.06614 5.08662C9.00747 5.37463 8.86548 5.63905 8.65781 5.84705L7.06031 7.45955C7.30985 8.87761 7.98895 10.1848 9.00573 11.2043C10.0225 12.2237 11.3279 12.9063 12.7453 13.1596L14.3728 11.5471C14.5839 11.3417 14.8508 11.203 15.1403 11.1483C15.4297 11.0936 15.7288 11.1254 16.0003 11.2396L18.8278 12.3721C19.1027 12.4867 19.3372 12.6806 19.5015 12.9291C19.6658 13.1775 19.7524 13.4692 19.7503 13.767V17.7271C19.7503 18.3238 19.5133 18.8961 19.0913 19.318C18.6693 19.74 18.097 19.9771 17.5003 19.9771ZM2.50031 1.97705C2.3014 1.97705 2.11063 2.05607 1.96998 2.19672C1.82933 2.33737 1.75031 2.52814 1.75031 2.72705V2.78705C2.09531 7.22705 4.30781 17.7271 17.4553 18.4771C17.5538 18.4831 17.6526 18.4697 17.7459 18.4376C17.8393 18.4054 17.9253 18.3551 17.9992 18.2896C18.073 18.2241 18.1333 18.1447 18.1763 18.0559C18.2194 17.9671 18.2446 17.8706 18.2503 17.7721V13.767L15.4228 12.6346L13.2703 14.7721L12.9103 14.7271C6.38531 13.9096 5.50031 7.38455 5.50031 7.31705L5.45531 6.95705L7.58531 4.80455L6.46031 1.97705H2.50031Z" fill="#21B24A"/>
                            </svg>

                            +7 (499) 277 23 26
                        </a>

                        <img src="/assets/img/menu.svg" className="menu" alt="Меню" />
                    </div>
                </div>
            </header>

            <div className="single">
                <div className="container">
                    <div className="flex">
                        <div className="breadcrumb">
                            <Link to="/" className="breadcrumb__link">
                                Главная
                            </Link>

                            <div className="breadcrumb__split">/</div>

                            <Link to="/windows" className="breadcrumb__link">
                                Мягкие окна
                            </Link>

                            <div className="breadcrumb__split">/</div>

                            <div className="breadcrumb__current">
                                Для беседок
                            </div>
                        </div>

                        <div className="flex single__text--inner">
                            <h2 className="single__title">
                                Мягкие окна для беседок
                            </h2>

                            <p className="single__text">
                                Мы предлагаем  заказать изготовление мягких окон для беседок по чертежам, согласно предоставленным размерам, так же осуществим монтаж конструкций. 
                            </p>

                            <button className="button white single__button">
                                Подробнее
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="container">
                    <div className="flexcenter">
                        <div className="footer__content">
                            <Link to="/" className="footer__logo">
                                Logotype
                            </Link>

                            <div className="footer__item">
                                <p className="footer__item--title">
                                    Компания
                                </p>

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
                                <p className="footer__item--title">
                                    Мягкие окна
                                </p>

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
                                <p className="footer__item--title">
                                    Контакты
                                </p>

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
        </>
    )
}

export default App;