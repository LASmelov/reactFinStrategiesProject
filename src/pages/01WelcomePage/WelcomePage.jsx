import React from "react";
import "./assets/WelcomePage.css"
import acceptIcon from "./assets/images/accept.svg"
import falseIcon from "./assets/images/Close.svg"

const WelcomePage = () => {
    return (
        <div>
            <section className="section welcomePage">
        <h1 className="welcomePage__title">ДОБРО ПОЖАЛОВАТЬ В MYFIN</h1>
        <span className="welcomaPage__finance">FINANCE</span>
        <span className="welcomePage__strategy">STRATEGY</span>
        <div className="welcomePage__body">
            <div className="welcomePage__inner">

                <div className="welcomePage__description">
                    <span>Добро пожаловать в приложение myFin!</span>
                    <p></p>
                    <span>Мы рады приветствовать вас в нашем инновационном приложении, которое поможет вам эффективно
                        управлять своими финансами. Уникальная возможность нашего приложения - составление
                        персонализированной финансовой стратегии, которая будет адаптирована именно под ваши потребности
                        и цели.
                    <p></p>
                    Мы предлагаем вам пройти пробный период, в течение которого вы сможете оценить все преимущества
                    нашего приложения, включая опросник по составлению уникальной финансовой стратегии. Опросник
                    позволит нам лучше понять ваше финансовое положение, цели и предпочтения, чтобы разработать
                    оптимальный план действий.
                    <p></p>
                    Не упустите возможность взять первые шаги к финансовой независимости и успеху! Пройдите пробный
                    период и убедитесь сами, как myFin изменит взгляд на вашу финансовую жизнь.
                    <p></p>
                    Желаем вам приятного использования нашего приложения и успешного достижения ваших финансовых
                    целей!</span>
                </div>

                <div className="welcomePage__subscription">
                    <div className="subscription__body">
                        <div className="subscription__titleCard">
                            <span className="card__name">Командный набор</span>
                            <span className="card__cost">FREE</span>
                            <label className="card__period">Пробный период <br /> 1 неделя</label>
                        </div>

                        <ul className="subscription__condition">
                            <li className="subscription__items">
                                <img className="item__image" src={acceptIcon} alt=""/>
                                <p>Интеграция с банковскими системами</p>
                            </li>

                            <li className="subscription__items">
                                <img className="item__image" src={acceptIcon} alt=""/>
                                <p>Планирование бюджета и целей</p>
                            </li>

                            <li className="subscription__items">
                                <img className="item__image" src={acceptIcon} alt=""/>
                                <p>Безопасность и приватность</p>
                            </li>

                            <li className="subscription__items">
                                <img className="item__image" src={acceptIcon} alt=""/>
                                <p>Поддержка клиентов</p>
                            </li>

                            <li className="subscription__items">
                                <img className="item__image" src={falseIcon} alt=""/>
                                <p>Кастомизация и личные настройки</p>
                            </li>

                            <li className="subscription__items">
                                <img className="item__image" src={falseIcon} alt=""/>
                                <p>Доступ к обучающим материалам</p>
                            </li>

                            <li className="subscription__items">
                                <img className="item__image" src={falseIcon} alt=""/>
                                <p>Расширенные аналитические инструменты</p>
                            </li>
                        </ul>

                        <button className="subscription__button">TRY</button>

                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    )
}

export default WelcomePage;