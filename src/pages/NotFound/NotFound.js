import React from "react";
import { Link } from "react-router-dom";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import styles from "../../sass/style.module.scss";

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.notFound}>
          <Link to="/">
            <button className={styles.notFound__button}>На головну</button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}