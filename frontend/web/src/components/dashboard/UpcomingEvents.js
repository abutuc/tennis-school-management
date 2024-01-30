import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Divider,
} from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import PeopleIcon from "@mui/icons-material/People";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventIcon from "@mui/icons-material/Event";
import PlaceIcon from "@mui/icons-material/Place";

const getStyles = (windowWidth) => ({
  paginationDotContainer: {
    cursor: "pointer",
    marginRight: "5px",
    borderRadius: "50%",
    display: "inline-block",
  },
  paginationDotSize: 15,
  container: {
    width: windowWidth > 1194 ? "49%" : "100%",
    position: "relative",
    marginTop: 2,
    marginBottom: 2,
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    height: 268,
  },
  title: {
    alignItems: "center",
    marginLeft: 3,
    marginTop: 1,
    marginBottom: 1,
    display: "flex",
    fontSize: "1.2rem",
  },
  eventContainer: {
    width: "92%",
    margin: "auto",
    height: "70%",
    display: "flex",
  },
  imageContainer: {
    width: "35%",
    height: "100%",
  },
  image: {
    borderRadius: "10px",
    width: "90%",
    height: "90%",
    marginLeft: 10,
    marginTop: 10,
  },
  eventInfoContainer: {
    display: "flex",
    flexDirection: "column",
    width: windowWidth > 450 ? "55%" : "100%",
  },
  titleContainer: {
    width: "100%",
  },
  eventTitle: {
    textAlign: "center",
    fontWeight: "bold",
  },
  eventInfoRowContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 1,
  },
  singleEventInfoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 1,
    width: "49%",
  },
  eventInfoIcon: {
    marginRight: 1,
  },
  moreDetailsContainer: {
    justifyContent: "center",
    width: "100%",
    display: "flex",
    marginTop: 1,
  },
  moreDetailsButton: {
    background: "#9c27b0",
    boxShadow: "0 3px 5px 2px rgba(156, 39, 176, 0.3)",
    color: "#fff",
    transition: "background 0.3s ease",
    "&:hover": {
      background: "#7b1fa2",
    },
    width: "fit-content",
    fontSize: "0.725rem",
  },
  paginationDotsContainer: {
    position: "absolute",
    bottom: "5px",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
});

const UpcomingEventsCarousel = ({ windowWidth }) => {
  const upcomingEvents = [
    {
      title: "Tennis Tournament",
      date: "2023-12-15",
      time: "09:00 - 04:00",
      location: "Sports Complex",
      url: "https://picsum.photos/200",
      enrollments: 20,
      deadline: "2023-12-10",
    },
    {
      title: "Training Camp",
      date: "2023-12-20",
      time: "02:00 - 05:00",
      location: "Training Center",
      url: "https://picsum.photos/200",
      enrollments: 15,
      deadline: "2023-12-18",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToEvent = (index) => {
    setCurrentIndex(index);
  };

  const styles = getStyles(windowWidth);

  const renderDots = () => {
    return upcomingEvents.map((event, index) => (
      <Box
        key={index}
        onClick={() => goToEvent(index)}
        sx={styles.paginationDotContainer}
      >
        {index === currentIndex ? (
          <RadioButtonCheckedIcon
            sx={{ fontSize: styles.paginationDotSize, color: "#a5aaae" }}
          />
        ) : (
          <RadioButtonUncheckedIcon
            sx={{ fontSize: styles.paginationDotSize, color: "#ced4da" }}
          />
        )}
      </Box>
    ));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === upcomingEvents.length - 1 ? 0 : prevIndex + 1
      );
    }, 30000);

    return () => clearInterval(intervalId);
  }, [currentIndex, upcomingEvents.length]);

  return (
    <Box sx={styles.container}>
      <Typography variant="h6" sx={styles.title}>
        Upcoming Events
      </Typography>
      <Card sx={styles.eventContainer}>
        {windowWidth > 450 && (
          <Box sx={styles.imageContainer}>
            <img
              src={upcomingEvents[currentIndex].url}
              alt={upcomingEvents[currentIndex].title}
              style={styles.image}
            />
          </Box>
        )}
        <CardContent sx={styles.eventInfoContainer}>
          <Box sx={styles.titleContainer}>
            <Typography variant="subtitle1" sx={styles.eventTitle}>
              {upcomingEvents[currentIndex].title}
            </Typography>
          </Box>
          <Divider />
          <Box sx={styles.eventInfoRowContainer}>
            <Box sx={styles.singleEventInfoContainer}>
              <EventIcon sx={styles.eventInfoIcon} />
              <Typography noWrap variant="body2">
                {upcomingEvents[currentIndex].date}
              </Typography>
            </Box>

            <Box sx={styles.singleEventInfoContainer}>
              <AccessTimeIcon sx={styles.eventInfoIcon} />
              <Typography noWrap variant="body2">
                {upcomingEvents[currentIndex].time}
              </Typography>
            </Box>
          </Box>
          <Box sx={styles.eventInfoRowContainer}>
            <Box sx={styles.singleEventInfoContainer}>
              <PlaceIcon sx={styles.eventInfoIcon} />
              <Typography noWrap variant="body2">
                {upcomingEvents[currentIndex].location}
              </Typography>
            </Box>

            <Box sx={styles.singleEventInfoContainer}>
              <PeopleIcon sx={styles.eventInfoIcon} />
              <Typography noWrap variant="body2">
                {upcomingEvents[currentIndex].enrollments} Enrollments
              </Typography>
            </Box>
          </Box>
          <Box sx={styles.moreDetailsContainer}>
            <Button
              variant="contained"
              color="primary"
              sx={styles.moreDetailsButton}
            >
              More Details
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Box sx={styles.paginationDotsContainer}>{renderDots()}</Box>
    </Box>
  );
};

export default UpcomingEventsCarousel;
