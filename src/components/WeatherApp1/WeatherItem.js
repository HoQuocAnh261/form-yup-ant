import React from "react";
import PropTypes from "prop-types";
import styles from "./weatherapp1.module.css";
import {
  EnvironmentOutlined,
  MenuOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import TemperItem from "./TemperItem";
import {
  TiWeatherSunny,
  TiWeatherPartlySunny,
  TiWeatherDownpour,
} from "react-icons/ti";

function WeatherItem({
  location = "Tuscany",
  temper = 23,
  status = "It's Sun day",
  imgUrl = "/images/weather1.jpg",
}) {
  const urlImg = `url(${imgUrl})`;
  return (
    <div className={styles.item} style={{ backgroundImage: urlImg }}>
      <div className={styles.header}>
        <div className={styles.left}>
          <EnvironmentOutlined /> {location}
          <div className={styles.temperature}>
            {temper}
            <sup>o</sup>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <MenuOutlined />
          </div>

          <div className={styles.rotate}>{status}</div>
        </div>
      </div>
      <div className={styles.footer}>
        <p>Weather Today</p>
        <div className={styles.footer_container}>
          <TemperItem icon={<TiWeatherSunny />} temper={23} time="5:00 AM" />
          <TemperItem
            icon={<TiWeatherPartlySunny />}
            temper={16}
            time="6:00 AM"
          />
          <TemperItem
            icon={<TiWeatherDownpour color="gray" />}
            temper={3}
            time="7:00 AM"
          />
          <TemperItem icon={<TiWeatherSunny />} temper={23} time="8:00 AM" />
        </div>
      </div>
    </div>
  );
}

WeatherItem.propTypes = {};

export default WeatherItem;
