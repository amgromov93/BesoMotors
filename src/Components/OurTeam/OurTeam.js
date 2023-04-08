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
    <section className={styles.ourTeam}>
      <h2 className={styles.ourTeam__title}>Відгуки про <span className={styles.ourTeam__title_span}>ANARCHY MOTORS</span></h2>
      <Slider {...settings}>
        <div>
          <article className={styles.ourTeam__box}>
            <div className={styles.ourTeam__image}></div>
            <p className={styles.ourTeam__description}>Ось що я вам скажу, хлопці: у цьому розлюченому всесвіті є всього лише три надійні речі — своя голова, друзі та мотоцикл.</p>
            <p className={styles.ourTeam__workerName}>Ігор Владіміров</p>
          </article>
        </div>
        <div>
          <article className={styles.ourTeam__box}>
            <div className={styles.ourTeam__image}></div>
            <p className={styles.ourTeam__description}>Ось що я вам скажу, хлопці: у цьому розлюченому всесвіті є всього лише три надійні речі — своя голова, друзі та мотоцикл.</p>
            <p className={styles.ourTeam__workerName}>Ігор Владіміров</p>
          </article>
        </div>
        <div>
          <article className={styles.ourTeam__box}>
            <div className={styles.ourTeam__image}></div>
            <p className={styles.ourTeam__description}>Ось що я вам скажу, хлопці: у цьому розлюченому всесвіті є всього лише три надійні речі — своя голова, друзі та мотоцикл.</p>
            <p className={styles.ourTeam__workerName}>Ігор Владіміров</p>
          </article>
        </div>
        <div>
          <article className={styles.ourTeam__box}>
            <div className={styles.ourTeam__image}></div>
            <p className={styles.ourTeam__description}>Ось що я вам скажу, хлопці: у цьому розлюченому всесвіті є всього лише три надійні речі — своя голова, друзі та мотоцикл.</p>
            <p className={styles.ourTeam__workerName}>Ігор Владіміров</p>
          </article>
        </div>
        <div>
          <article className={styles.ourTeam__box}>
            <div className={styles.ourTeam__image}></div>
            <p className={styles.ourTeam__description}>Ось що я вам скажу, хлопці: у цьому розлюченому всесвіті є всього лише три надійні речі — своя голова, друзі та мотоцикл.</p>
            <p className={styles.ourTeam__workerName}>Ігор Владіміров</p>
          </article>
        </div>
        <div>
          <article className={styles.ourTeam__box}>
            <div className={styles.ourTeam__image}></div>
            <p className={styles.ourTeam__description}>Ось що я вам скажу, хлопці: у цьому розлюченому всесвіті є всього лише три надійні речі — своя голова, друзі та мотоцикл.</p>
            <p className={styles.ourTeam__workerName}>Ігор Владіміров</p>
          </article>
        </div>
      </Slider>
    </section>
  )
}