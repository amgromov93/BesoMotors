import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "../../sass/style.module.scss"

export default function OurTeam() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  return (
    <section className={styles.ourTeam} id="reviews">
      <h2 className={styles.ourTeam__title}>Відгуки про <span className={styles.ourTeam__title_span}>ANARCHY MOTORS</span></h2>
      <Slider {...settings}>
        <div>
          <article className={styles.ourTeam__box}>
            <div className={styles.ourTeam__image}></div>
            <p className={styles.ourTeam__description}>Ціни сподобались, якість 10з10! Пофарбували раму, фарбу підібрали чітко, красені.</p>
            <p className={styles.ourTeam__workerName}>Ігор</p>
          </article>
        </div>
        <div>
          <article className={styles.ourTeam__box}>
            <div className={styles.ourTeam__image}></div>
            <p className={styles.ourTeam__description}>Чудовий сервіс! Роботу зробили швидко та якісно! </p>
            <p className={styles.ourTeam__workerName}>Ярослав</p>
          </article>
        </div>
        <div>
          <article className={styles.ourTeam__box}>
            <div className={styles.ourTeam__image}></div>
            <p className={styles.ourTeam__description}>Гарна локація! Чудові майстри! Рекомендую !</p>
            <p className={styles.ourTeam__workerName}>Влада</p>
          </article>
        </div>
        <div>
          <article className={styles.ourTeam__box}>
            <div className={styles.ourTeam__image}></div>
            <p className={styles.ourTeam__description}>Обслуговую в хлопців мотоцикл вже більше року, роботою задоволений, завжди якісно.  Рекомендую </p>
            <p className={styles.ourTeam__workerName}>Женя</p>
          </article>
        </div>
        <div>
          <article className={styles.ourTeam__box}>
            <div className={styles.ourTeam__image}></div>
            <p className={styles.ourTeam__description}>Професіонали своєї справи!</p>
            <p className={styles.ourTeam__workerName}>Любомир</p>
          </article>
        </div>
        <div>
          <article className={styles.ourTeam__box}>
            <div className={styles.ourTeam__image}></div>
            <p className={styles.ourTeam__description}>Дякую за роботу! Дуже задоволений, все на вищому рівні!</p>
            <p className={styles.ourTeam__workerName}>Ярослав</p>
          </article>
        </div>
      </Slider>
    </section>
  )
}