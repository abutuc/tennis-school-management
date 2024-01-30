import { Box } from "@mui/material";
import OngoingLessons from "../components/dashboard/OnGoingLessons";
import NumericStatistics from "../components/dashboard/NumericStatistics";
import WeatherForecast from "../components/dashboard/WeatherForecast";
import UpcomingEventsCarousel from "../components/dashboard/UpcomingEvents";
import FinancialSummary from "../components/dashboard/FinancialSummary";
import EquipmentManagement from "../components/dashboard/EquipmentManagement";
import { useEffect, useState } from "react";

const getStyles = () => ({
  container: {
    width: "95%",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "12px",
  },
  rowContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});
function Dashboard() {
  const [windowWidth, setWindowWidth] = useState(0);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const styles = getStyles();

  return (
    <Box sx={styles.container}>
      <Box sx={styles.rowContainer}>
        <NumericStatistics windowWidth={windowWidth} />
        <WeatherForecast windowWidth={windowWidth} />
      </Box>

      <Box sx={styles.rowContainer}>
        <OngoingLessons windowWidth={windowWidth} />
        <UpcomingEventsCarousel windowWidth={windowWidth} />
      </Box>
      <Box sx={styles.rowContainer}>
        <FinancialSummary windowWidth={windowWidth} />
        <EquipmentManagement windowWidth={windowWidth} />
      </Box>
    </Box>
  );
}

export default Dashboard;
