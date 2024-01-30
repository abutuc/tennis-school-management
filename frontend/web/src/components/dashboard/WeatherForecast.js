import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import {
  WiDayRain,
  WiDaySunny,
  WiCloudy,
  WiSnow,
  WiThunderstorm,
  WiThermometer,
  WiHumidity,
  WiRaindrop,
  WiStrongWind,
} from "weather-icons-react";
import MoodIcon from "@mui/icons-material/Mood";

const weatherData = {
  condition: "Rain",
  temperature: 298.48 - 273.15,
  humidity: 64,
  rain: 6,
  windSpeed: 10,
};

const getWeatherIcon = (condition) => {
  const iconSize = 40;
  switch (condition.toLowerCase()) {
    case "sunny":
      return <WiDaySunny size={iconSize} color="#FFD700" />;
    case "rain":
      return <WiDayRain size={iconSize} color="#90CAF9" />;
    case "clouds":
      return <WiCloudy size={iconSize} color="#B0BEC5" />;
    case "snow":
      return <WiSnow size={iconSize} color="#FFFFFF" />;
    case "thunderstorm":
      return <WiThunderstorm size={iconSize} color="#8B4513" />;
    default:
      return null;
  }
};

const getCurrentDateTime = () => {
  const now = new Date();

  return {
    day: now.getDate(),
    month: now.getMonth(),
    dayOfTheWeek: now.toLocaleDateString("en-US", { weekday: "long" }),
    time: now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    }),
  };
};

const getStyles = (windowWidth) => ({
  container: {
    display: "flex",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: windowWidth > 1194 ? "49%" : "100%",
    height: "70px",
    background: "#ffffff",
    transition: "background-color 0.3s, box-shadow 0.3s",
    justifyContent: "space-around",
    alignItems: "center",
  },
  weatherIconAndDateContainer: {
    display: "flex",
    width: "25%",
    justifyContent: "space-evenly",
    flexDirection: windowWidth < 592 ? "column" : "row",
    alignItems: windowWidth < 592 ? "center" : null,
  },
  innerDateContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  dateAndStatusText: {
    fontSize:
      (1455 > windowWidth && windowWidth > 1194) || windowWidth < 592
        ? "14px"
        : "16px",
    textAlign: "center",
  },
  weatherConditionsOuterContainer: {
    width: "50%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  weatherConditionContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    width: "25%",
  },
  weatherIconSize: 28,
  weatherConditionText: "body2",
  weatherIconContainer: {
    width: windowWidth < 592 ? "30px" : "40px",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
});

const getWeatherEvaluation = () => {
  let evaluationText = "All good to train!";
  let icon = <MoodIcon sx={{ color: "#4CAF50" }} />;
  // do some logic here to evaluate the weather conditions
  return {
    text: evaluationText,
    icon: icon,
  };
};

const WeatherForecast = ({ windowWidth }) => {
  const currentDateTime = getCurrentDateTime();
  const styles = getStyles(windowWidth);
  const weatherEvaluation = getWeatherEvaluation();

  return (
    <Box sx={styles.container}>
      <Box sx={styles.weatherIconAndDateContainer}>
        <Box sx={styles.weatherIconContainer}>
          {getWeatherIcon(weatherData.condition)}
        </Box>
        <Box sx={styles.innerDateContainer}>
          <Typography noWrap variant="body" sx={styles.dateAndStatusText}>
            {currentDateTime.dayOfTheWeek}, {currentDateTime.day}/
            {currentDateTime.month}
          </Typography>
          <Typography noWrap variant="body" sx={styles.dateAndStatusText}>
            {currentDateTime.time}
          </Typography>
        </Box>
      </Box>
      <Divider flexItem variant="middle" orientation="vertical" />
      <Box sx={styles.weatherConditionsOuterContainer}>
        <Box sx={styles.weatherConditionContainer}>
          <WiThermometer size={styles.weatherIconSize} />
          <Typography variant={styles.weatherConditionText}>{`${Math.round(
            weatherData.temperature
          )}°C`}</Typography>
        </Box>

        <Box sx={styles.weatherConditionContainer}>
          <WiHumidity size={styles.weatherIconSize} />
          <Typography
            variant={styles.weatherConditionText}
          >{`${weatherData.humidity}%`}</Typography>
        </Box>

        {weatherData.rain && (
          <Box sx={styles.weatherConditionContainer}>
            <WiRaindrop size={styles.weatherIconSize} />
            <Typography
              variant={styles.weatherConditionText}
            >{`${weatherData.rain}mm`}</Typography>
          </Box>
        )}

        <Box sx={styles.weatherConditionContainer}>
          <WiStrongWind size={styles.weatherIconSize} />
          <Typography
            noWrap
            variant={styles.weatherConditionText}
          >{`${weatherData.windSpeed} m/s`}</Typography>
        </Box>
      </Box>
      <Divider
        flexItem
        variant="middle"
        orientation="vertical"
        sx={{ paddingRight: 2 }}
      />
      <Box sx={styles.weatherConditionContainer}>
        <Typography variant="body" sx={styles.dateAndStatusText}>
          {weatherEvaluation.text}
        </Typography>
        {weatherEvaluation.icon}
      </Box>
    </Box>
  );
};

export default WeatherForecast;
