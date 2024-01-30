import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  IconButton,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PlaceIcon from "@mui/icons-material/Place";
import PersonIcon from "@mui/icons-material/Person";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ongoingLessons = [
  {
    coach: "John Doe",
    court: "Court 1",
    startTime: "12:00 PM",
    endTime: "02:00 PM",
    studentsAttending: 5,
    className: "Tennis Basics",
    expertiseLevel: "Beginner",
  },
  {
    coach: "Jane Smith",
    court: "Court 2",
    startTime: "01:30 PM",
    endTime: "03:30 PM",
    studentsAttending: 7,
    className: "Advanced Techniques",
    expertiseLevel: "Advanced",
  },
  {
    coach: "Bob Johnson",
    court: "Court 3",
    startTime: "03:00 PM",
    endTime: "05:00 PM",
    studentsAttending: 4,
    className: "Power Serves",
    expertiseLevel: "Intermediate",
  },
  {
    coach: "Alice Doe",
    court: "Court 4",
    startTime: "04:30 PM",
    endTime: "06:30 PM",
    studentsAttending: 6,
    className: "Match Strategies",
    expertiseLevel: "Advanced",
  },
  {
    coach: "Alice Doe",
    court: "Court 4",
    startTime: "04:30 PM",
    endTime: "06:30 PM",
    studentsAttending: 6,
    className: "Match Strategies",
    expertiseLevel: "Advanced",
  },
];

const getStyles = (windowWidth) => ({
  container: {
    width: windowWidth > 1194 ? "49%" : "100%",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginTop: 2,
    height: 270,
  },
  title: {
    display: "flex",
    fontSize: "1.2rem",
    alignItems: "center",
    marginLeft: 3,
    marginTop: 1,
    marginBottom: 1,
  },
  cardsContainer: {
    display: "flex",
    gap: 2,
    height: "180px",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    width: windowWidth > 450 ? "46%" : "80%",
    marginBottom: 1,
    height: "170px",
  },
  classNameAndAttendingStudentsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
  },
  classDetailContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: 1,
  },
  detailIcon: {
    marginRight: 1,
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 1,
  },
  paginationIconSize: "small",
});

const OngoingLessons = ({ windowWidth }) => {
  const cardsToShow = windowWidth > 450 ? 2 : 1;
  const totalCards = ongoingLessons.length;
  const [pageIndex, setPageIndex] = React.useState(0);
  const totalPages = Math.ceil(totalCards / cardsToShow);
  const handlePageChange = (direction) => {
    setPageIndex((prevPageIndex) =>
      direction === "forward"
        ? Math.min(prevPageIndex + 1, totalPages - 1)
        : Math.max(prevPageIndex - 1, 0)
    );
  };
  const startIndex = pageIndex * cardsToShow;

  const styles = getStyles(windowWidth);

  return (
    <Box sx={styles.container}>
      <Typography variant="h6" sx={styles.title}>
        In-Progress Classes
      </Typography>
      <Box sx={styles.cardsContainer}>
        {ongoingLessons
          .slice(startIndex, startIndex + cardsToShow)
          .map((lesson, index) => (
            <Card key={index} sx={styles.cardContainer}>
              <CardContent>
                <Box sx={styles.classNameAndAttendingStudentsContainer}>
                  <Typography noWrap variant="subtitle1">
                    {lesson.className}
                  </Typography>
                  <Chip
                    label={`${lesson.studentsAttending} Students`}
                    color="secondary"
                    size="small"
                    variant="outlined"
                  />
                </Box>
                <Box sx={styles.classDetailContainer}>
                  <PersonIcon sx={styles.detailIcon} />
                  <Typography noWrap variant="body2">
                    Coach {lesson.coach}
                  </Typography>
                </Box>
                <Box sx={styles.classDetailContainer}>
                  <AccessTimeIcon sx={styles.detailIcon} />
                  <Typography noWrap variant="body2">
                    {lesson.startTime} - {lesson.endTime}
                  </Typography>
                </Box>
                <Box sx={styles.classDetailContainer}>
                  <PlaceIcon sx={styles.detailIcon} />
                  <Typography noWrap variant="body2">
                    {lesson.court}
                  </Typography>
                  <RocketLaunchIcon
                    sx={{ marginLeft: "10%", ...styles.detailIcon }}
                  />
                  <Typography noWrap variant="body2">
                    {lesson.expertiseLevel}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
      </Box>
      <Box sx={styles.paginationContainer}>
        <IconButton
          onClick={() => handlePageChange("backward")}
          disabled={pageIndex === 0}
        >
          <ArrowBackIcon fontSize={styles.paginationIconSize} />
        </IconButton>
        <Typography variant="body2">{`Page ${
          pageIndex + 1
        } of ${totalPages}`}</Typography>
        <IconButton
          onClick={() => handlePageChange("forward")}
          disabled={pageIndex === totalPages - 1}
        >
          <ArrowForwardIcon fontSize={styles.paginationIconSize} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default OngoingLessons;
