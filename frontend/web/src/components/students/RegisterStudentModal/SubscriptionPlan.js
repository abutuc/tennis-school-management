import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  FormControl,
  Input,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
} from "@mui/material";

const getStyles = () => ({
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: 480,
    paddingTop: 2,
    justifyContent: "space-around",
  },
  inputLabel: {
    fontSize: "20px",
  },
  input: {
    paddingTop: 2,
  },
  feeSummary: {
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.08)",
    width: "100%",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    height: 120,
  },
  feeSummaryTitle: {
    textAlign: "center",
    fontSize: 19,
    fontWeight: 500,
  },
  feeContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 80,
  },
  valueContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

const calculateMonthlyFee = (formState) => {
  var monthlyFee = 0;
  if (formState.weeklyPracticeHours !== null) {
    monthlyFee += parseInt(formState.weeklyPracticeHours) * 10;
  }

  if (formState.coachingResources === "true") {
    monthlyFee += 10;
  }
  if (formState.schoolMobileApp === "true") {
    monthlyFee += 5;
  }
  if (formState.federateTournaments === "true") {
    monthlyFee += 10;
  }
  return monthlyFee;
};

function SubscriptionPlan({ formState, handleInputChange }) {
  const fixedOneTimeFee = 20;
  const [monthlyFee, setMonthlyFee] = useState(0);
  const styles = getStyles();

  useEffect(() => {
    setMonthlyFee(calculateMonthlyFee(formState));
  }, [formState]);

  return (
    <Box sx={styles.container}>
      <FormControl variant="standard">
        <InputLabel shrink={true} style={styles.inputLabel}>
          Weekly Practice Hours
        </InputLabel>
        <Input
          defaultValue={formState.weeklyPracticeHours}
          id="weekly-practice-hours"
          type="number"
          sx={styles.input}
          onChange={(e) =>
            handleInputChange("weeklyPracticeHours", e.target.value)
          }
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel shrink={true} style={styles.inputLabel}>
          Access to Extra Coaching Resources and Materials
        </InputLabel>
        <RadioGroup
          aria-labelledby="coaching-resources"
          value={formState.coachingResources ?? " "}
          name="coaching-resources"
          row
          sx={styles.input}
          onChange={(e) =>
            handleInputChange("coachingResources", e.target.value)
          }
        >
          <FormControlLabel value={true} control={<Radio />} label="Yes" />
          <FormControlLabel value={false} control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel shrink={true} style={styles.inputLabel}>
          Access to School Mobile App
        </InputLabel>
        <RadioGroup
          aria-labelledby="school-mobile-app"
          value={formState.schoolMobileApp ?? " "}
          name="school-mobile-app"
          row
          sx={styles.input}
          onChange={(e) => handleInputChange("schoolMobileApp", e.target.value)}
        >
          <FormControlLabel value={true} control={<Radio />} label="Yes" />
          <FormControlLabel value={false} control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel shrink={true} style={styles.inputLabel}>
          Access to Federate Tournaments
        </InputLabel>
        <RadioGroup
          aria-labelledby="federate-tournaments"
          value={formState.federateTournaments ?? " "}
          name="federate-tournaments"
          row
          sx={styles.input}
          onChange={(e) =>
            handleInputChange("federateTournaments", e.target.value)
          }
        >
          <FormControlLabel value={true} control={<Radio />} label="Yes" />
          <FormControlLabel value={false} control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <Box component={Paper} sx={styles.feeSummary}>
        <Typography sx={styles.feeSummaryTitle}>Fee Summary</Typography>
        <Box sx={styles.feeContainer}>
          <Box sx={styles.valueContainer}>
            <Typography>Annual one-time fee</Typography>
            <Typography>{fixedOneTimeFee}€</Typography>
          </Box>
          <Box sx={styles.valueContainer}>
            <Typography>Monthly fee</Typography>
            <Typography>{monthlyFee}€</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SubscriptionPlan;
