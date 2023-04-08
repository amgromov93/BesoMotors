import React from "react";

import styles from "../../../sass/style.module.scss";

export default function Address() {
  return (
    <section id="contacts" className={styles.address}>
      <p className={styles.address__title}>Наша адреса</p>
      <h3 className={styles.address__company__name}>Beso Motors</h3>
      <article className={styles.address__box}>
        <p>Україна, місто Київ, 03169</p>
        <p>Провулок Изяславський, 53</p>
        <p>Телефон: +380500314985</p>
        <p>Електронна пошта: amgromov93@gmail.com</p>
      </article>
    </section>
  )
}