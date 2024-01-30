import React from "react";

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Tab,
  Tabs,
} from "@mui/material";

import StudentAvatar from "./StudentProfileModal/StudentAvatar";
import StudentInformation from "./StudentProfileModal/StudentInformation";
import LessonScheduleTab from "./StudentProfileModal/LessonScheduleTab";
import CoachFeedbackTab from "./StudentProfileModal/CoachFeedbackTab";
import PaymentTab from "./StudentProfileModal/PaymentTab";

const studentSchedule = [
  { day: "Monday", time: "10:00 AM - 12:00 PM", course: "Tennis Basics" },
  { day: "Wednesday", time: "02:00 PM - 04:00 PM", course: "Advanced Tennis" },
  { day: "Friday", time: "02:00 PM - 04:00 PM", course: "Advanced Tennis" },
];

const coachFeedbackData = {
  date: "2023-11-28",
  grades: {
    forehand: "B",
    backhand: "A",
    serve: "C",
    movement: "B",
    speed: "A",
    strategy: "C",
  },
  feedback:
    '"This is a normal sized feedback comment. I am very proud of the journey John Doe. He has developed a great back-hand form."',
  recommendations: [
    "Consider taking a specialized lesson for improving your serve.",
    "Focus on footwork for better movement just a longer recommendation to check if the width is right.",
  ],
};

const billingDetails = {
  billingMethod: "Credit Card",
  billingPlan: [
    {
      description: "4 hours of practice per week",
      price: 50,
    },
    {
      description: "School Mobile App",
      price: 5,
    },
    {
      description: "Federate Tournaments",
      price: 10,
    },
  ],
  monthlyBillAmount: 65,
  currency: "EUR",
  taxIdentificationNumber: 123456789,
  nextPaymentDue: "08/02/2024",
  overduePayments: ["December 2023", "January 2024"],
};

const getStyles = (windowWidth) => ({
  container: {
    width: "100%",
    maxWidth: 900,
    height: "100%",
    maxHeight: 755,
  },
  avatarAndInformation: {
    display: "flex",
    paddingTop: 3,
    justifyContent: "space-between",
    flexWrap: windowWidth > 800 ? "noWrap" : "wrap",
  },
});

function StudentProfileModal({
  isModalOpen,
  handleCloseModal,
  selectedStudent,
  handleOpenEditStudentModal,
  windowWidth,
}) {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const styles = getStyles(windowWidth);

  return (
    <Dialog
      open={isModalOpen}
      onClose={handleCloseModal}
      PaperProps={{
        sx: styles.container,
      }}
    >
      <DialogContent>
        <Box sx={styles.avatarAndInformation}>
          <StudentAvatar
            studentName={selectedStudent.name}
            windowWidth={windowWidth}
          />
          <StudentInformation
            selectedStudent={selectedStudent}
            windowWidth={windowWidth}
          />
        </Box>
        <Box sx={{ paddingTop: 2 }}>
          <Box display={"flex"} justifyContent={"center"}>
            <Tabs
              variant="scrollable"
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
            >
              <Tab
                value="one"
                label="Lesson Schedule"
                sx={{ textTransform: "none", fontSize: 16 }}
              />
              <Tab
                value="two"
                label="Coach Feedback"
                sx={{ textTransform: "none", fontSize: 16 }}
              />
              <Tab
                value="three"
                label="Billing"
                sx={{ textTransform: "none", fontSize: 16 }}
              />
            </Tabs>
          </Box>

          {value === "one" && (
            <LessonScheduleTab studentSchedule={studentSchedule} />
          )}
          {value === "two" && (
            <CoachFeedbackTab
              coachFeedbackData={coachFeedbackData}
              windowWidth={windowWidth}
            />
          )}
          {value === "three" && (
            <PaymentTab
              windowWidth={windowWidth}
              billingDetails={billingDetails}
            />
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOpenEditStudentModal} color="info">
          Edit
        </Button>
        <Button onClick={handleCloseModal} color="secondary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default StudentProfileModal;
