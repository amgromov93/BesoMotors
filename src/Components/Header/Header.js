import React, { useState } from "react";
import { Link } from "react-scroll";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo from "../../img/anarchyLogo.svg";
import burger from "../../img/HamburgerMenu.svg";
import close from "../../img/close.png";
import vespaTitle from "../../img/vespaHeader.png";

import styles from "../../sass/style.module.scss";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [fix, setFix] = useState(false);

  const vespaClasses = styles.header__company + ' ' + styles.header__company_vespa;
  const hondaClasses = styles.header__company + ' ' + styles.header__company_honda;
  const yamahaClasses = styles.header__company + ' ' + styles.header__company_yamaha;
  const bmwClasses = styles.header__company + ' ' + styles.header__company_bmw;
  const harleyClasses = styles.header__company + ' ' + styles.header__company_harley;
  const indianClasses = styles.header__company + ' ' + styles.header__company_indian;
  const brpClasses = styles.header__company + ' ' + styles.header__company_brp;

  const companies = [
    {
      id: 1,
      title: "Vespa",
      style: vespaClasses,
    },
    {
      id: 2,
      title: "Honda",
      style: hondaClasses,
    },
    {
      id: 3,
      title: "Yamaha",
      style: yamahaClasses,
    },
    {
      id: 4,
      title: "BMW",
      style: bmwClasses,
    },
    {
      id: 5,
      title: "Harley",
      style: harleyClasses,
    },
    {
      id: 6,
      title: "Indian",
      style: indianClasses,
    },
    {
      id: 7,
      title: "brp",
      style: brpClasses,
    },
  ]

  const offers = [
    {
      id: 1,
      title: "Бонусна система",
      description: "Знижки та бонуси для постійних клієнтів",
      style: '',
      img: <p className={styles.header__offers__logo_bonus}></p>,
    },
    {
      id: 2,
      title: "Євакуація транспорту",
      description: "Допоможемо євакуювати ваш транспорт",
      style: '',
      img: <p className={styles.header__offers__logo_delivery}></p>,
    },
    {
      id: 3,
      title: "Транспортування на сервіс",
      description: "Наш робітник сам відвезе ваш транспорт на сервіс",
      style: '',
      img: <p className={styles.header__offers__logo_evacuation}></p>,
    },
    {
      id: 4,
      title: "Мийка",
      description: "Нема нічого кращого ніж блискучий, чистий транспорт",
      style: '',
      img: <p className={styles.header__offers__logo_washing}></p>,
    },
  ]

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  function setFixed() {
    if (window.scrollY >= 40 && window.innerWidth >= 992) {
      setFix(true)
    } else {
      setFix(false)
    }
  }

  window.addEventListener("scroll", setFixed);

  return (
    <header className={styles.header} id="top">
      <div className={styles.header__background}>
        <div className={styles.header__container}>
          <div className={fix ? styles.header__fixed : null}>
            <div className={styles.header__menu}>
              <Link href="/" to="top" duration={500} spy={true} smooth={true}>
                <img src={logo} width={220} alt="logo"/>
              </Link>
              <div className={styles.header__nenu}>
                <button onClick={() => setToggle(!toggle)} 
                        className={styles.header__burger}>
                        <img  className={toggle ? styles.header__burger_fixed : null} 
                              src={toggle ? close : burger} 
                              width={20} height={20} 
                              alt="menu"/>
                </button>
                <div className={toggle ? styles.header__nav : styles.header__nav_items}>
                  <Link onClick={() => setToggle(!toggle)} className={styles.header__links} activeClass="active" to="services" spy={true} smooth={true} offset={-50} duration={500}>
                    Послуги
                  </Link>
                  <Link onClick={() => setToggle(!toggle)} className={styles.header__links} activeClass="active" to="reviews" spy={true} smooth={true} offset={-150} duration={500}>
                    Відгуки
                  </Link>
                  <Link onClick={() => setToggle(!toggle)} className={styles.header__links} activeClass="active" to="contacts" spy={true} smooth={true} offset={-150} duration={500}>
                    Контакти
                  </Link>
                </div>
              </div> 
            </div>
          </div>
          <div className={fix ? styles.header__description__box : styles.header__description__box_margin}>
            <h1 className={styles.header__title}>Твій сервіс з ремонту мототехніки в Києві</h1>
            <p className={styles.header__description}>Ремонт та обслуговування мотоциклів, квадроциклів, моторолерів в Києві. Ваша техніка в надійних руках!</p>
            <a className={styles.header__tel} href="tel:+380960951488">Записатися на діагностику</a>
          </div>
          <div className={styles.header__titleImage}> 
            <img src={vespaTitle} width="520" alt="vespa"></img>
          </div>
          <div className={styles.header__titleContainer}>
            <div className={styles.header__offers}>
              {offers.map((offer) => (
                <div key={offer.id} className={styles.header__offers__item}>
                  <div className={styles.header__offers__strip}></div>
                  {offer.img}
                  <h4 className={styles.header__offers__title}>{offer.title}</h4>
                  <p className={styles.header__offersItem__text}>{offer.description}</p>
                </div>
                )
              )}
            </div>
            <div className={styles.header__offer}>
              <p className={styles.header__offer__sticker}>Якісне обслуговування</p>
              <h2 className={styles.header__offer__title}>Довіряйте профессіоналам</h2>
              <p className={styles.header__offer__description}>Справний технічний стан транспорту - запорука вашого життя та задоволення від керування.</p>
            </div>
          </div>
          <Slider {...settings} className={styles.header__slider}>
            {companies.map((item) => (
                <div key={item.id}>
                  <div className={styles.header__slide}>
                    <p className={item.style}></p>
                  </div>
                </div>
              )
            )}
          </Slider>
        </div>
        <div className={styles.header__white}></div>
      </div>
    </header>
  )
}