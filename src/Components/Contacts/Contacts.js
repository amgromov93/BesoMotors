import React from "react";

import styles from "../../sass/style.module.scss";

import Address from "./Adress/Address";
import Map from "./Map/Map";

export default function Contacts() {
  return (
    <>
        <div className={styles.contacts}>
          <Address/>
          <Map/>
        </div>
    </>
  )
}