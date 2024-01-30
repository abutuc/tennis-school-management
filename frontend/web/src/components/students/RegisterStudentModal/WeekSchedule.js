import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const shortDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const styles = {
  root: {
    marginTop: 2,
  },
  dayCell: {
    height: "30px",
    border: "1px solid #ddd",
    borderRadius: "2px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  timeCell: {
    height: "30px",
    border: "1px solid #ddd",
    textAlign: "center",
  },
  eventCell: {
    height: "30px",
    border: "1px solid #ddd",
    borderRadius: "2px",
    cursor: "pointer",
    "&:hover": {
      background: "grey",
    },
  },
  selectedCell: {
    background: "green",
    "&:hover": {
      background: "green",
    },
  },
};

const renderWeekDays = (windowWidth) => {
  let daysArray;
  if (windowWidth > 800) {
    daysArray = days;
  } else {
    daysArray = shortDays;
  }
  return (
    <Grid container spacing={0}>
      <Grid item xs key={"empty"}>
        <Paper sx={styles.timeCell}>
          <Typography variant="subtitle2">{``}</Typography>
        </Paper>
      </Grid>
      {daysArray.map((day) => {
        return (
          <Grid item xs key={day}>
            <Paper sx={styles.dayCell}>
              <Typography variant="subtitle2" noWrap textAlign={"center"}>
                {day}
              </Typography>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};

const renderSchedulerCells = (handleCellClick, selectedSlots) => {
  const times = Array.from({ length: 13 }, (_, index) => index + 9);
  return times.map((time) => (
    <Grid container spacing={0} key={time}>
      <Grid item xs>
        <Paper sx={styles.timeCell}>
          <Typography variant="subtitle2">{`${time}:00`}</Typography>
        </Paper>
      </Grid>
      {days.map((day) =>
        renderEventCell(day, time, handleCellClick, selectedSlots)
      )}
    </Grid>
  ));
};

const renderEventCell = (day, time, handleCellClick, selectedSlots) => {
  let isSelected;
  for (let i = 0; i < selectedSlots.length; i++) {
    if (selectedSlots[i].day === day && selectedSlots[i].time === time) {
      isSelected = true;
      break;
    }
    isSelected = false;
  }
  return (
    <Grid item xs key={`${day}-${time}`}>
      <Paper
        sx={{ ...styles.eventCell, ...(isSelected && styles.selectedCell) }}
        onClick={() => handleCellClick(day, time, isSelected)}
      ></Paper>
    </Grid>
  );
};

function WeekScheduler({ selectedSlots, setSelectedSlots, windowWidth }) {
  const handleCellClick = (day, time, isSelected) => {
    if (isSelected) {
      let copy = [...selectedSlots];
      const object = selectedSlots.find(
        (slot) => slot.day === day && slot.time === time
      );
      copy.splice(selectedSlots.indexOf(object), 1);
      setSelectedSlots(copy);
    } else {
      setSelectedSlots([...selectedSlots, { day, time }]);
    }
  };

  return (
    <Container sx={styles.root}>
      <Typography variant="h6" gutterBottom textAlign={"center"}>
        Student Availability
      </Typography>
      {renderWeekDays(windowWidth)}
      {renderSchedulerCells(handleCellClick, selectedSlots)}
    </Container>
  );
}

export default WeekScheduler;
