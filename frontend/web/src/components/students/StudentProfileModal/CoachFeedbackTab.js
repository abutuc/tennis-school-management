import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import avatar from "../../../assets/avatar.png";

const getStyles = (windowWidth) => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  feedbackContainer: {
    display: "flex",
    justifyContent: "center",
  },
  feedbackInnerContainer: {
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.08)",
    width: "100%",
    backgroundColor: "#ffffff",
    padding: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
    marginTop: 1,
  },
  feedbackText: {
    width: windowWidth > 800 ? "85%" : "75%",
    textAlign: "center",
  },
  coachAvatarContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth > 800 ? "25%" : "20%",
  },
  coachAvatar: {
    width: 50,
    height: 50,
    marginTop: -2,
  },
  coachName: {
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
  },
  feedbackDate: {
    width: "100%",
    textAlign: "center",
  },
  peformanceAndRecommendationsContainer: {
    display: "flex",
    width: "100%",
    flexDirection: windowWidth > 800 ? "row" : "column",
    justifyContent: "space-between",
  },
  performanceContainer: {
    width: windowWidth > 800 ? "50%" : "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  performanceTitle: {
    textAlign: "center",
    fontWeight: "bold",
  },
  gradesContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
  },
  recommendationsContainer: {
    display: "flex",
    flexDirection: "column",
    width: windowWidth > 800 ? "50%" : "100%",
    paddingTop: windowWidth > 800 ? 0 : 3,
  },
});
const getGradeColor = (grade) => {
  if (grade === "A") {
    return "#4CAF50";
  } else if (grade === "B") {
    return "#FFC107";
  } else if (grade === "C") {
    return "#FF9800";
  } else {
    return "#F44336";
  }
};

const CircleGrade = ({ label, grade }) => (
  <Box
    display={"flex"}
    flexDirection={"column"}
    alignItems={"center"}
    padding={2}
  >
    <Typography variant="body1" color="textSecondary">
      {label}
    </Typography>
    <Avatar
      sx={{
        backgroundColor: getGradeColor(grade),
        width: 40,
        height: 40,
        marginRight: 1,
      }}
    >
      <Typography variant="body1" sx={{ color: "white" }}>
        {grade}
      </Typography>
    </Avatar>
  </Box>
);

const FeedbackSection = ({ title, content }) => (
  <Box
    display={"flex"}
    flexDirection={"column"}
    justifyContent={"center"}
    alignItems={"center"}
  >
    <Typography
      textAlign={"center"}
      fontWeight={"bold"}
      color={"textSecondary"}
    >
      {title}
    </Typography>
    <List>
      {content.map((item, index) => (
        <ListItem key={index}>
          <ListItemIcon>
            <HorizontalRuleIcon />
          </ListItemIcon>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  </Box>
);

function CoachFeedbackTab({ windowWidth, coachFeedbackData }) {
  const styles = getStyles(windowWidth);
  return (
    <Box sx={styles.container}>
      <Box sx={styles.feedbackContainer}>
        <Box sx={styles.feedbackInnerContainer}>
          {/* this field should have a maximum of 330 characters */}
          <Typography sx={styles.feedbackText}>
            {coachFeedbackData.feedback}
          </Typography>
          <Box sx={styles.coachAvatarContainer}>
            <Avatar src={avatar} sx={styles.coachAvatar} />
            <Typography variant="body1" sx={styles.coachName}>
              Coach Allen Smith
            </Typography>
            <Typography
              variant="body2"
              color={"textSecondary"}
              sx={styles.feedbackDate}
            >
              {coachFeedbackData.date}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.peformanceAndRecommendationsContainer}>
        <Box sx={styles.performanceContainer}>
          <Typography sx={styles.performanceTitle} color={"textSecondary"}>
            Overall Performance
          </Typography>
          <Box sx={styles.gradesContainer}>
            <Box display={"flex"} flexDirection={"column"}>
              <CircleGrade
                label={"Forehand"}
                grade={coachFeedbackData.grades.forehand}
              />
              <CircleGrade
                label={"Backend"}
                grade={coachFeedbackData.grades.backhand}
                paddingTop={1}
              />
            </Box>
            <Box sx={styles.container}>
              <CircleGrade
                label={"Serve"}
                grade={coachFeedbackData.grades.serve}
              />
              <CircleGrade
                label={"Movement"}
                grade={coachFeedbackData.grades.movement}
                paddingTop={1}
              />
            </Box>
            <Box display={"flex"} flexDirection={"column"}>
              <CircleGrade
                label={"Speed"}
                grade={coachFeedbackData.grades.speed}
              />
              <CircleGrade
                label={"Strategy"}
                grade={coachFeedbackData.grades.strategy}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={styles.recommendationsContainer}>
          <FeedbackSection
            title="Coach Recommendations"
            content={coachFeedbackData.recommendations}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default CoachFeedbackTab;
