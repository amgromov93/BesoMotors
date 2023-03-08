import React from "react";

import styles from "../../../sass/style.module.scss";

import vespa from "../../../img/vespa.png";
import kawasaki from "../../../img/kawasaki.png"
import details from "../../../img/details.png";
import kvadro from "../../../img/kvadro.png";
import banner from "../../../img/banerMoto.png";

export default function Services() {
  const bannerClasses = styles.services__pic + ' ' + styles.services__pic_banner;

  const servicesItems = [
    {
      id: 1,
      sticker: "",
      title: <h2 className={styles.services__title}>Сервісне <span className={styles.services__title_span}>обслуговування</span></h2>,
      description: "МоторСервіс надає послуги з діагностики, обслуговуванню та ремонту мотоциклів. Своєчасне проходження технічного обслуговування це, в першу чергу, запорука вашої безпеки.",
      image: <img className={styles.services__pic} src={vespa} alt="Vespa" width={250} />,
      style: "",
    },
    {
      id: 2,
      sticker: "Тюнінг",
      title: <h2 className={styles.services__title}>Покращення <span className={styles.services__title_span}>технічних якостей</span> транспорту</h2>,
      description: "Практично всі мотолюбителі прагнуть зробити свій транспортний засіб максимально особливим та відмінним від інших. Саме тюнінг мотоцикла допоможе у втіленні цього бажання.",
      image: <img className={styles.services__pic} src={kawasaki} alt="Kawasaki" width={250} />,
      style: "",
    },
    {
      id: 3,
      sticker: "",
      title: <h2 className={styles.services__title}><span className={styles.services__title_span}>Запчастини</span> для мотоциклів та квадроциклів</h2>,
      description: "У нас в сервісі ви можете придбати 100% оригінальні запчастини для вашої техніки. Не треба бігати по магазинам чи шукати в інтернеті потрібні деталі!",
      image: <img className={styles.services__pic} src={details} alt="Details" width={250} />,
      style: "",
    },
    {
      id: 4,
      sticker: "Фарбування",
      title: <h2 className={styles.services__title}><span className={styles.services__title_span}>Лакофарбові</span> роботи</h2>,
      description: "Ваш хром не такий сліпуче яскравий, як раніше? В загальну неперевершеність улюбленого байка закралась маленька, але дуже дратуюча подряпина і продовжує ятрити вам душу й серце? Не впадайте у відчай! Все можна змінити на краще.",
      image: <img className={styles.services__pic} src={kvadro} alt="Kvadro" width={250}/>,
      style: "",
    },
  ]

  return (
    <>
      <div className={styles.services__container}>
        <section>
          {servicesItems.map((item) => (
            <article key={item.id} className={styles.services__item}>
              {item.image}
              <div>
                <p className={styles.services__sticker}>{item.sticker}</p>
                {item.title}
                <p className={styles.services__description}>{item.description}</p>
              </div>
            </article>
          ))}
        </section>
      </div> 
      <div>
        <img className={bannerClasses} src={banner} alt="Kvadro" />
        <div className={styles.services__container_text}>
          <p className={styles.services__sticker}>Якісне обслуговування</p>
          <h2 className={styles.services__title}>Довіряйте профессіоналам</h2>
          <p className={styles.services__description}>Справний технічний стан транспорту - запорука вашого життя та задоволення від керування.</p>
        </div>
      </div>
    </>
  )
}