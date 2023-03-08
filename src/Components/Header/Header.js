import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../img/Logo.png";
import burger from "../../img/HamburgerMenu.svg";

import styles from "../../sass/style.module.scss";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const vespaClasses = styles.header__company + ' ' + styles.header__company_vespa;
  const hondaClasses = styles.header__company + ' ' + styles.header__company_honda;
  const yamahaClasses = styles.header__company + ' ' + styles.header__company_yamaha;
  const bmwClasses = styles.header__company + ' ' + styles.header__company_bmw;
  const harleyClasses = styles.header__company + ' ' + styles.header__company_harley;

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
  ]

  return (
    <header className={styles.header}>
      <div className={styles.header__background_mobile}>
        <div className={styles.header__container}>
          <div className={styles.header__menu}>
            <Link to="/">
              <img src={logo} alt="logo"/>
            </Link>
            <div className={styles.header__nenu}>
              <button onClick={() => setToggle(!toggle)} className={styles.header__burger}><img src={burger} alt="menu"/></button>
              <nav className={toggle ? styles.header__nav : styles.header__nav_none}>
                <Link to="/about">
                  <button className={styles.header__links}>Про нас</button>
                </Link>
                <Link to="/services">
                  <button className={styles.header__links}>Послуги</button>
                </Link>
                <Link to="/contacts">
                  <button className={styles.header__links}>Контакти</button>
                </Link>
              </nav>
            </div> 
          </div>
          <div className={styles.header__description__box}>
            <h1 className={styles.header__title}>Твій сервіс з ремонту мототехніки</h1>
            <p className={styles.header__description}>Ремонт та обслуговування мотоциклів, квадроциклів, моторолерів в Києві. Ваша техніка в надійних руках!</p>
            <a className={styles.header__tel} href="tel:+380500314985">Записатися на діагностику</a>
          </div>
          <div className={styles.header__company__box}>
            {companies.map((item) => (
              <p key={item.id} className={item.style}></p>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}