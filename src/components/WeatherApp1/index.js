import React from "react";
import PropTypes from "prop-types";
import styles from "./weatherapp1.module.css";
import WeatherItem from "./WeatherItem";

function WeatherApp1(props) {
  return (
    <div className={styles.container}>
      <WeatherItem />
      <WeatherItem imgUrl="/images/weather3.jpg" temper={10} />
      <WeatherItem imgUrl="/images/weather2.jpg" temper={23} />
    </div>
  );
}

WeatherApp1.propTypes = {};

export default WeatherApp1;
