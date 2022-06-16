import React from "react";
import styles from "./weatherapp1.module.css";
import { TiWeatherSunny } from "react-icons/ti";

function TemperItem({
  icon = <TiWeatherSunny />,
  time = "5:00 AM",
  temper = 23,
}) {
  return (
    <div className={styles.temper_item}>
      <div>{icon}</div>
      <div className={styles.time}>{time}</div>
      <div className={styles.temper}>
        {temper}
        <sup>o</sup>
      </div>
    </div>
  );
}

export default TemperItem;
