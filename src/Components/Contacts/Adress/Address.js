import React from "react";

import styles from "../../../sass/style.module.scss";

export default function Address() {
  return (
    <section id="contacts" className={styles.address}>
      <p className={styles.address__title}>Наша адреса</p>
      <h3 className={styles.address__company__name}>ANARCHY MOTORS</h3>
      <article className={styles.address__box}>
        <p>Україна, місто Київ, 03169</p>
        <p>Провулок Изяславський, 53</p>
        <a href="tel:+380960951488">+380960951488</a>
        <a href="mailto:anarchymotorskyiv@gmail.com">anarchymotorskyiv@gmail.com</a>
      </article>
    </section>
  )
}