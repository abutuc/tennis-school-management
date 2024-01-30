import React, { useEffect, useRef } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Chart from "chart.js/auto";

const getStyles = (windowWidth) => ({
  container: {
    width: windowWidth > 1194 ? "49%" : "100%",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  innerContainer: {
    display: "flex",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
    width: "20%",
  },
  statContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  statValueContainer: {
    display: "flex",
    alignItems: "center",
  },
  statValue: {
    fontSize: "20px",
  },
  graphContainer: {
    paddingLeft: 1,
    width: "80%",
    height: 250,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
});

const FinancialSummary = ({ windowWidth }) => {
  const chartRef = useRef(null);

  const totalRevenue = 5000;
  const totalExpenses = 3000;
  const netIncome = totalRevenue - totalExpenses;

  useEffect(() => {
    const monthlyData = [
      { month: "Jan", value: 2000 },
      { month: "Feb", value: 2500 },
      { month: "Mar", value: 3000 },
      { month: "Apr", value: 3500 },
      { month: "May", value: 4000 },
      { month: "Jun", value: 4200 },
      { month: "Jul", value: 4800 },
      { month: "Aug", value: 5200 },
      { month: "Sep", value: 4800 },
      { month: "Oct", value: 5500 },
      { month: "Nov", value: 6000 },
      { month: "Dec", value: 6500 },
    ];
    if (chartRef.current) {
      const existingChart = Chart.getChart(chartRef.current);
      if (existingChart) {
        existingChart.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      new Chart(ctx, {
        type: "line",
        data: {
          labels: monthlyData.map((data) => data.month),
          datasets: [
            {
              label: "Monthly Progress",
              data: monthlyData.map((data) => data.value),
              fill: false,
              borderColor: "#9c27b0",
              tension: 0.4,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: "Month",
              },
            },
            y: {
              title: {
                display: true,
                text: "Value",
              },
            },
          },
        },
      });
    }
  }, []);

  const styles = getStyles(windowWidth);

  return (
    <Card sx={styles.container}>
      <CardContent>
        <Typography variant="h6">Financial Summary</Typography>
        <Box sx={styles.innerContainer}>
          <Box sx={styles.statsContainer}>
            <Box sx={styles.statContainer}>
              <Typography noWrap variant="subtitle2" color="textSecondary">
                Total Revenue
              </Typography>
              <Box sx={styles.statValueContainer}>
                <Typography variant="h5" color="primary" sx={styles.statValue}>
                  {totalRevenue}
                </Typography>
                <AttachMoneyIcon color="primary" sx={styles.statValue} />
              </Box>
            </Box>
            <Box sx={styles.statContainer}>
              <Typography noWrap variant="subtitle2" color="textSecondary">
                Total Expenses
              </Typography>
              <Box sx={styles.statValueContainer}>
                <Typography variant="h5" color="error" sx={styles.statValue}>
                  {totalExpenses}
                </Typography>
                <AttachMoneyIcon color="error" sx={styles.statValue} />
              </Box>
            </Box>
            <Box sx={styles.statContainer}>
              <Typography variant="subtitle2" color="textSecondary">
                Net Income
              </Typography>
              <Box sx={styles.statValueContainer}>
                <Typography
                  variant="h5"
                  sx={{
                    ...styles.statValue,
                    color: netIncome >= 0 ? "#4caf50" : "#f44336",
                  }}
                >
                  {netIncome}
                </Typography>
                <AttachMoneyIcon
                  sx={{
                    ...styles.statValue,
                    color: netIncome >= 0 ? "#4caf50" : "#f44336",
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box sx={styles.graphContainer}>
            <canvas ref={chartRef} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FinancialSummary;
