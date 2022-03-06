import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

import {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './App.css';

const App = () => {
    React.useEffect(() => {
        $(".form__input").on("blur", function(){
            if($(this).val().trim() !== '') $(this).siblings(".input__placeholder").addClass("active");
            else $(this).siblings(".input__placeholder").removeClass("active");
        });

        $(".tab__item").on("click", function(){
            $(".tab__item").removeClass("active");
            $(this).addClass("active");
            $(".tab__content").removeClass("active");
            $(".tab__content[data-tab="+$(this).attr("data-tab")+"]").addClass("active");
        });

        const close = () => {
            $(".close").removeClass("active");
            $(".menu").addClass("active");
            $("body").removeClass("scroll");
            $(".header").removeClass("fixed");
            $(".modal__menu").removeClass("active");
        }

        $(".menu").on("click", function(){
            $(this).removeClass("active");
            $(".close").addClass("active");
            $("body").addClass("scroll");
            $(".header").addClass("fixed");
            $(".modal__menu").addClass("active");
        });

        $(".close").on("click", function(){
            close();
        });

        $(window).resize(function(){
            if($(window).width() > 998){
                close();
            }
        });

        $(".dropdown").on("click", function(){
            $(this).children(".header__nav--link--arrow").toggleClass("active");
            $(".modal__menu--dropdown").slideToggle(100);
        });
    }, []);

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="slick__dot '+ className +'"></span>';
        },
    };

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

                        <img src="/assets/img/menu.svg" className="menu active" alt="Меню" />
                        <img src="/assets/img/close.svg" className="close" alt="Закрыть" />
                    </div>
                </div>
            </header>

            <div className="modal__menu">
                <div className="container">
                    <div className="modal__menu--inner flex">
                        <div className="modal__menu--link dropdown">
                            Мягкие окна

                            <img src="/assets/img/arrow-down.svg" className="header__nav--link--arrow" alt="Стрелка" />
                        </div>

                        <div className="modal__menu--dropdown flex">
                            <Link to="/besedka" className="modal__menu--link">
                                Для беседок
                            </Link>

                            <Link to="/terras" className="modal__menu--link">
                                Для террас
                            </Link>

                            <Link to="/verande" className="modal__menu--link">
                                Для веранд
                            </Link>

                            <Link to="/kafe" className="modal__menu--link">
                                Для кафе
                            </Link>
                        </div>

                        <Link to="/services" className="modal__menu--link">
                            Услуги
                        </Link>

                        <Link to="/works" className="modal__menu--link">
                            Наши работы
                        </Link>

                        <Link to="/prices" className="modal__menu--link">
                            Стоимость
                        </Link>

                        <Link to="/about" className="modal__menu--link">
                            О компании
                        </Link>

                        <Link to="/contacts" className="modal__menu--link">
                            Контакты
                        </Link>

                        <a href="tel:74992772326" className="button green header__call mobile__call">
                            <svg className="header__call--icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5003 19.9771H17.3728C2.63531 19.1296 0.542808 6.69455 0.250308 2.89955C0.226739 2.60449 0.261624 2.30767 0.352964 2.02611C0.444304 1.74455 0.590303 1.48378 0.782596 1.25874C0.974889 1.0337 1.2097 0.848817 1.47357 0.71468C1.73743 0.580544 2.02518 0.499792 2.32031 0.477051H6.45281C6.75323 0.476761 7.04681 0.566684 7.29553 0.735173C7.54425 0.903662 7.73665 1.14295 7.84781 1.42205L8.98781 4.22705C9.09757 4.49971 9.12481 4.79861 9.06614 5.08662C9.00747 5.37463 8.86548 5.63905 8.65781 5.84705L7.06031 7.45955C7.30985 8.87761 7.98895 10.1848 9.00573 11.2043C10.0225 12.2237 11.3279 12.9063 12.7453 13.1596L14.3728 11.5471C14.5839 11.3417 14.8508 11.203 15.1403 11.1483C15.4297 11.0936 15.7288 11.1254 16.0003 11.2396L18.8278 12.3721C19.1027 12.4867 19.3372 12.6806 19.5015 12.9291C19.6658 13.1775 19.7524 13.4692 19.7503 13.767V17.7271C19.7503 18.3238 19.5133 18.8961 19.0913 19.318C18.6693 19.74 18.097 19.9771 17.5003 19.9771ZM2.50031 1.97705C2.3014 1.97705 2.11063 2.05607 1.96998 2.19672C1.82933 2.33737 1.75031 2.52814 1.75031 2.72705V2.78705C2.09531 7.22705 4.30781 17.7271 17.4553 18.4771C17.5538 18.4831 17.6526 18.4697 17.7459 18.4376C17.8393 18.4054 17.9253 18.3551 17.9992 18.2896C18.073 18.2241 18.1333 18.1447 18.1763 18.0559C18.2194 17.9671 18.2446 17.8706 18.2503 17.7721V13.767L15.4228 12.6346L13.2703 14.7721L12.9103 14.7271C6.38531 13.9096 5.50031 7.38455 5.50031 7.31705L5.45531 6.95705L7.58531 4.80455L6.46031 1.97705H2.50031Z" fill="#21B24A"/>
                            </svg>

                            +7 (499) 277 23 26
                        </a>
                    </div>
                </div>
            </div>

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

            <div className="template">
                <div className="container">
                    <div className="flexcenter">
                        <p className="title center">
                            Стоимость мягких окон для беседок
                        </p>

                        <div className="tab__inner default__margin">
                            <div className="tab__item active" data-tab="1">
                                Мягкие окона более 50 м²
                            </div>

                            <div className="tab__item" data-tab="2">
                                Мягкие окона от 15 м²  до 50 м²
                            </div>

                            <div className="tab__item" data-tab="3">
                                Мягкие окона до 15 м²
                            </div>
                        </div>

                        <div className="tab__content flex active" data-tab="1">
                            <div className="price__item">
                                <p className="price__item--title">
                                    Стандарт
                                </p>

                                <p className="price__item--value">
                                    1 150 руб/м2
                                </p>
                            </div>

                            <div className="price__item">
                                <p className="price__item--title">
                                    Премиум
                                </p>

                                <p className="price__item--value">
                                    1 200 руб/м2
                                </p>
                            </div>

                            <div className="price__item">
                                <p className="price__item--title">
                                    Люкс
                                </p>

                                <p className="price__item--value">
                                    1 350 руб/м2
                                </p>
                            </div>

                            <div className="price__item">
                                <p className="price__item--title">
                                    Под ключ
                                </p>

                                <p className="price__item--value">
                                    1 550 руб/м2
                                </p>
                            </div>
                        </div>

                        <div className="tab__content flex" data-tab="2">
                            <div className="price__item">
                                <p className="price__item--title">
                                    Стандарт 2
                                </p>

                                <p className="price__item--value">
                                    1 150 руб/м2
                                </p>
                            </div>

                            <div className="price__item">
                                <p className="price__item--title">
                                    Премиум 2
                                </p>

                                <p className="price__item--value">
                                    1 200 руб/м2
                                </p>
                            </div>

                            <div className="price__item">
                                <p className="price__item--title">
                                    Люкс 2
                                </p>

                                <p className="price__item--value">
                                    1 350 руб/м2
                                </p>
                            </div>

                            <div className="price__item">
                                <p className="price__item--title">
                                    Под ключ 2
                                </p>

                                <p className="price__item--value">
                                    1 550 руб/м2
                                </p>
                            </div>
                        </div>

                        <div className="tab__content flex" data-tab="3">
                            <div className="price__item">
                                <p className="price__item--title">
                                    Стандарт 3
                                </p>

                                <p className="price__item--value">
                                    1 150 руб/м2
                                </p>
                            </div>

                            <div className="price__item">
                                <p className="price__item--title">
                                    Премиум 3
                                </p>

                                <p className="price__item--value">
                                    1 200 руб/м2
                                </p>
                            </div>

                            <div className="price__item">
                                <p className="price__item--title">
                                    Люкс 3
                                </p>

                                <p className="price__item--value">
                                    1 350 руб/м2
                                </p>
                            </div>

                            <div className="price__item">
                                <p className="price__item--title">
                                    Под ключ 3
                                </p>

                                <p className="price__item--value">
                                    1 550 руб/м2
                                </p>
                            </div>
                        </div>

                        <button className="button green price__button">
                            Оформить заказ
                        </button>
                    </div>
                </div>
            </div>

            <div className="template">
                <div className="container">
                    <div className="flexcenter about__inner">
                        <p className="title center">
                            Наши работы
                        </p>

                        <Swiper className="default__margin work__content" loop modules={[Navigation]} spaceBetween={30} slidesPerView={3} navigation breakpoints={{
                                998: {
                                    slidesPerView: 3
                                },
                                768: {
                                    slidesPerView: 2
                                },
                                0: {
                                    slidesPerView: 1
                                }
                            }}>
                            <SwiperSlide className="work__item flex">
                                <img src="assets/img/work1.jpg" className="work__item--img" alt="Наши работы" />

                                <p className="work__item--title">
                                    Мягкие окна для беседки в Серпуховском районе
                                </p>

                                <p className="work__item--more">
                                    Подробнее
                                </p>
                            </SwiperSlide>

                            <SwiperSlide className="work__item flex">
                                <img src="assets/img/work2.jpg" className="work__item--img" alt="Наши работы" />

                                <p className="work__item--title">
                                    Мягкие окна для беседки в Жуковском
                                </p>

                                <p className="work__item--more">
                                    Подробнее
                                </p>
                            </SwiperSlide>

                            <SwiperSlide className="work__item flex">
                                <img src="assets/img/work3.jpg" className="work__item--img" alt="Наши работы" />

                                <p className="work__item--title">
                                    Мягкие окна для беседки в Химках
                                </p>

                                <p className="work__item--more">
                                    Подробнее
                                </p>
                            </SwiperSlide>

                            <SwiperSlide className="work__item flex">
                                <img src="assets/img/work1.jpg" className="work__item--img" alt="Наши работы" />

                                <p className="work__item--title">
                                    Мягкие окна для беседки в Серпуховском районе
                                </p>

                                <p className="work__item--more">
                                    Подробнее
                                </p>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

            <div className="template">
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
            </div>

            <div className="template">
                <div className="container">
                    <div className="flexcenter">
                        <p className="title center">
                            Отзывы
                        </p>

                        <Swiper className="slider default__margin review__content" loop modules={[Pagination, Navigation]} spaceBetween={30} slidesPerView={2} pagination={pagination} navigation breakpoints={{
                                998: {
                                    slidesPerView: 2
                                },
                                0: {
                                    slidesPerView: 1
                                }
                            }}>
                            <SwiperSlide className="review__item flex">
                                <img src="/assets/img/quote.svg" className="review__item--quote" alt="Цитата" />

                                <p className="review__item--text">
                                    В последний момент перед новым годом поняли, что в праздники в беседке делать нечего. Все завалило снегом и он не перестает идти. Вызвали бригаду по установке мягких окон и не прогадала. Большое спасибо за быструю и своевременную работу.
                                </p>

                                <p className="review__item--name">
                                    Нина Петровна
                                </p>
                            </SwiperSlide>

                            <SwiperSlide className="review__item flex">
                                <img src="/assets/img/quote.svg" className="review__item--quote" alt="Цитата" />

                                <p className="review__item--text">
                                    В последний момент перед новым годом поняли, что в праздники в беседке делать нечего. Все завалило снегом и он не перестает идти. Вызвали бригаду по установке мягких окон и не прогадала. Большое спасибо за быструю и своевременную работу.
                                </p>

                                <p className="review__item--name">
                                    Нина Петровна
                                </p>
                            </SwiperSlide>

                            <SwiperSlide className="review__item flex">
                                <img src="/assets/img/quote.svg" className="review__item--quote" alt="Цитата" />

                                <p className="review__item--text">
                                    В последний момент перед новым годом поняли, что в праздники в беседке делать нечего. Все завалило снегом и он не перестает идти. Вызвали бригаду по установке мягких окон и не прогадала. Большое спасибо за быструю и своевременную работу.
                                </p>

                                <p className="review__item--name">
                                    Нина Петровна
                                </p>
                            </SwiperSlide>

                            <SwiperSlide className="review__item flex">
                                <img src="/assets/img/quote.svg" className="review__item--quote" alt="Цитата" />

                                <p className="review__item--text">
                                    В последний момент перед новым годом поняли, что в праздники в беседке делать нечего. Все завалило снегом и он не перестает идти. Вызвали бригаду по установке мягких окон и не прогадала. Большое спасибо за быструю и своевременную работу.
                                </p>

                                <p className="review__item--name">
                                    Нина Петровна
                                </p>
                            </SwiperSlide>

                            <SwiperSlide className="review__item flex">
                                <img src="/assets/img/quote.svg" className="review__item--quote" alt="Цитата" />

                                <p className="review__item--text">
                                    В последний момент перед новым годом поняли, что в праздники в беседке делать нечего. Все завалило снегом и он не перестает идти. Вызвали бригаду по установке мягких окон и не прогадала. Большое спасибо за быструю и своевременную работу.
                                </p>

                                <p className="review__item--name">
                                    Нина Петровна
                                </p>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

            <div className="template">
                <div className="container">
                    <div className="flexcenter">
                        <p className="title center">
                            Мягкие окна для беседок
                        </p>

                        <div className="text__inner default__margin">
                            <div className="text__item flex">
                                <p className="text wrap__text">
                                    Мягкие окна или как еще их называют Гибкие окна а также Жидкие окна, производятся из поливинилхлоридной пленки, совмещенной при помощи термосварки с тентовой ПВХ окантовкой,  которая обладает плотной структурой и отличными техническими характеристиками.
                                </p>

                                <p className="text wrap__text">
                                    Они прекрасно заменяют остекление, для устройства прозрачного ограждения различных помещений: веранды, мансарды, беседки, террасы.
                                </p>

                                <p className="text wrap__text">
                                    Жидкие окна можно использовать круглый год. Благодаря Мягким окнам, создаются комфортные условия в беседке, в летнее время, когда идет дождь или дует ветер. А так же пленка поможет защитить конструкцию от снега в зимнее время.
                                </p>

                                <p className="text wrap__text">
                                    Мы изготавливаем и устанавливаем мягкие окна (ПВХ шторы) любых размеров, учитывая все пожелания Заказчика относительно цветовых оттенков материала, их комбинирования и способа крепления.
                                </p>
                            </div>

                            <div className="text__item flex">
                                <p className="text wrap__text">
                                    Мягкие окна (ПВХ шторы) — это современный и практичный способ защиты беседок, веранд, летних террас, открытых павильонов от ненастной погоды, уличной пыли и назойливых насекомых.
                                </p>

                                <p className="text wrap__text">
                                    Преимущества мягких окон:
                                </p>

                                <div className="point__inner flex">
                                    <p className="text point__text">
                                        светопропускаемость 90%;
                                    </p>

                                    <p className="text point__text">
                                        обладают высокой прочностью на разрыв и растяжение;
                                    </p>

                                    <p className="text point__text">
                                        долговечность (при правильной эксплуатации);
                                    </p>

                                    <p className="text point__text">
                                        не боятся сильного мороза и жары;
                                    </p>

                                    <p className="text point__text">
                                        не гниют, устойчивы к образованию плесени и грибка;
                                    </p>

                                    <p className="text point__text">
                                        лучшая альтернатива остеклению по оптимальной цене;
                                    </p>

                                    <p className="text point__text">
                                        полностью безопасны для детей;
                                    </p>

                                    <p className="text point__text">
                                        легко и быстро монтировать и демонтировать в случае необходимости.
                                    </p>
                                </div>

                                <p className="text wrap__text">
                                    Работаем «ПОД КЛЮЧ» – от замеров до установки, быстро и качественно. Замер, консультация бесплатно!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form">
                <div className="container">
                    <div className="form__inner">
                        <div className="form__text--inner flex">
                            <p className="title">
                                Обсудим проект?
                            </p>

                            <p className="text default__margin">
                                Опишите Вашу задачу и отправьте нам заявку. Мы просчитаем бюджет, подберем инструменты и составим план работ по Вашему проекту и свяжемся с Вами в ближайшее время.
                            </p>
                        </div>

                        <div className="form__content flex">
                            <div className="form__input--inner">
                                <input className="input form__input" />

                                <p className="input__placeholder">
                                    Имя
                                </p>
                            </div>

                            <div className="form__input--inner">
                                <input className="input form__input" />

                                <p className="input__placeholder">
                                    Электронная почта
                                </p>
                            </div>

                            <div className="form__input--inner">
                                <input className="input form__input" />

                                <p className="input__placeholder">
                                    Номер телефона
                                </p>
                            </div>

                            <div className="form__input--inner">
                                <input className="input form__input" />

                                <p className="input__placeholder">
                                    Пару слов о Вашем проекте
                                </p>
                            </div>

                            <div className="form__input--label--inner">
                                <input id="agree" type="checkbox" className="input__checkbox" />

                                <label for="agree" className="form__input--label">
                                    Я согласен(на) на обработку персональных данных
                                </label>
                            </div>

                            <button className="button white form__button">
                                Отправить заявку
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