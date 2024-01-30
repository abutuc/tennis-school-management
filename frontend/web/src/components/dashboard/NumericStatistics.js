import { Box, Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const NUMERIC_STATISTICS = [
  {
    name: "Enrolled Students",
    currentValue: 3,
    variation: "positive",
    effect: "positive",
    variationValue: 1,
  },
  {
    name: "Active Coaches",
    currentValue: 2,
    variation: "negative",
    effect: "negative",
    variationValue: 1,
  },
  {
    name: "Pending Requests",
    currentValue: 4,
    variation: "positive",
    effect: "negative",
    variationValue: 1,
  },
  {
    name: "Unread Messages",
    currentValue: 1,
    variation: "negative",
    effect: "positive",
    variationValue: 2,
  },
];

const getStyles = (windowWidth) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    width: windowWidth > 1194 ? "49%" : "100%",
    marginBottom: windowWidth > 1194 ? 0 : 2,
  },
  statisticCardContainer: {
    width: "24%",
    height: "70px",
    background: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  statisticCardTitle: {
    fontWeight: "500",
    paddingTop: 1,
    color: "#000000",
    textAlign: "center",
    fontSize:
      (1455 > windowWidth && windowWidth > 1194) || windowWidth < 592
        ? "14px"
        : "16px",
  },
  statisticValueContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  statisticValueText: {
    fontSize: "1.2rem",
    fontWeight: "500",
  },
});

const getIconColor = (statisticEffect) => {
  return statisticEffect === "positive" ? "#00ab55" : "#ff4d4f";
};

const getIconFontSize = () => {
  return "large";
};

function NumericStatistics({ windowWidth }) {
  const styles = getStyles(windowWidth);

  return (
    <Box sx={styles.container}>
      {NUMERIC_STATISTICS.map((statistic) => (
        <Box sx={styles.statisticCardContainer} key={statistic.name}>
          <Typography noWrap sx={styles.statisticCardTitle}>
            {statistic.name}
          </Typography>
          <Box sx={styles.statisticValueContainer}>
            <Typography sx={styles.statisticValueText}>
              {statistic.currentValue}
            </Typography>
            {statistic.variation === "positive" ? (
              <ArrowDropUpIcon
                fontSize={getIconFontSize()}
                sx={{ color: getIconColor(statistic.effect) }}
              />
            ) : (
              <ArrowDropDownIcon
                fontSize={getIconFontSize()}
                sx={{ color: getIconColor(statistic.effect) }}
              />
            )}
            <Typography
              sx={{
                ...styles.statisticValueText,
                color: getIconColor(statistic.effect),
              }}
            >
              {statistic.variationValue}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default NumericStatistics;
