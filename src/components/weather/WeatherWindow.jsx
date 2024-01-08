import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWeather } from "features/weather/weatherSlice";
import uniqid from "uniqid";
import { Input } from "antd";
import "components/weather/weather.scss";
import sunriseIcon from "images/sunrise.png";
import sunsetIcon from "images/sunset.png";
import { LoadingOutlined } from "@ant-design/icons";
const { Search } = Input;
const WeatherWindow = () => {
  const [placeName, setPlaceName] = useState("");
  const weather = useSelector((state) => state.weather.weatherData);
  const loading = useSelector((state) => state.weather.isLoading);
  const reqErr = useSelector((state) => state.weather.error);
  const dispatch = useDispatch();

  return (
    <section className="weather_container">
      <div className="window_container">
        <Search
          placeholder="PlaceName"
          style={{ width: "304px" }}
          enterButton
          allowClear
          onChange={(event) => {
            setPlaceName(event.target.value);
          }}
          onSearch={() => {
            dispatch(getWeather(placeName));
          }}
        />
        {reqErr ? (
          <p className="request_error">
            Please enter a valid place &nbsp;<span>{reqErr}</span>
          </p>
        ) : (
          weather &&
          weather.map(({ name, weather, main, wind, sys, visibility }) =>
            loading ? (
              <div className="weather_info" key={uniqid()}>
                <div className="title_img_container">
                  <h2>
                    {name} <span>{sys.country}</span>
                  </h2>

                  <img
                    src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                  />
                  <span>{weather[0].description}</span>
                </div>
                <div className="temp_info_container">
                  <p>
                    <span>Temperature</span>&nbsp;{Math.round(main.temp)}&#8451;
                  </p>
                  <p>
                    <span>Feels like</span>&nbsp;{Math.round(main.feels_like)}
                    &#8451;
                  </p>
                  <p>
                    <span>Max temperature in {name}</span>&nbsp;
                    {Math.round(main.temp_max)}&#8451;
                  </p>
                  <p>
                    <span>Min temperature in {name}</span>&nbsp;
                    {Math.round(main.temp_min)}&#8451;
                  </p>
                </div>

                <div className="wind_visibility_container">
                  <p>
                    <span>Wind Speed&nbsp;</span>
                    {wind.speed}
                  </p>
                  <p>
                    <span>Visibility</span>&nbsp;{visibility}
                  </p>
                </div>

                <div className="sun_location_container">
                  <div className="sunLocation_info">
                    <p>
                      <span>Sunrise</span>&nbsp;
                      {new Date(sys.sunrise * 1000).toLocaleTimeString()}
                    </p>
                    <img src={sunriseIcon} alt="Sunrise Picture" />
                  </div>
                  <div className="sunLocation_info">
                    <p>
                      <span>Sunset</span>&nbsp;
                      {new Date(sys.sunset * 1000).toLocaleTimeString()}
                    </p>
                    <img src={sunsetIcon} alt="Sunset Picture" />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <LoadingOutlined className="loading_icon" />
              </div>
            ),
          )
        )}
      </div>
    </section>
  );
};

export default WeatherWindow;
