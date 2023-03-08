import React from "react";

import styles from "../../../sass/style.module.scss";

export default function Map() {
  return (
    <>
      <iframe className={styles.map} title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.4333059958726!2d30.425090099999995!3d50.395761799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c96c4800daf5%3A0x307082bbe8859703!2sCaptain!5e0!3m2!1sru!2sua!4v1678280652399!5m2!1sru!2sua"></iframe>
    </>
  )
}