import React from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
} from "@mui/material";
import WeekScheduler from "./RegisterStudentModal/WeekSchedule";
import PersonalInformation from "./RegisterStudentModal/PersonalInformation";
import SubscriptionPlan from "./RegisterStudentModal/SubscriptionPlan";

const steps = [
  "Personal Information",
  "Subscription Plan",
  "Schedule Availability",
];

const getStyles = () => ({
  container: {
    width: "100%",
    maxWidth: 900,
    height: "100%",
    maxHeight: 755,
  },
  title: {
    fontWeight: "bold",
    marginTop: 2,
    marginLeft: 1,
    marginBottom: 3,
  },
  contentContainer: {
    justifyContent: "center",
    display: "flex",
  },
  innerContentContainer: {
    width: "90%",
  },
  schedulerContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: 500,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    pt: 2,
    justifyContent: "space-between",
  },
});

function RegisterStudentModal({
  isModalOpen,
  handleCloseModal,
  activeStep,
  setActiveStep,
  level,
  setLevel,
  selectedSlots,
  setSelectedSlots,
  formState,
  setFormState,
  windowWidth,
}) {
  const handleInputChange = (field, value) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      [field]: value,
    }));
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === steps.length - 1) {
      const payload = {
        personalInformation: {
          fullName: formState.fullName,
          email: formState.email,
          dayOfBirth: formState.dayOfBirth,
          phoneNumber: formState.phoneNumber,
          address: formState.address,
          tennisLevel: formState.tennisLevel,
          profilePicture: formState.profilePicture,
        },
        subscriptionPlan: {
          weeklyPracticeHours: formState.weeklyPracticeHours,
          coachingResources: formState.coachingResources,
          schoolMobileApp: formState.schoolMobileApp,
          federateTournaments: formState.federateTournaments,
        },
        scheduleAvailability: selectedSlots,
      };
      console.log("Payload to send to backend:", payload);
      handleCloseModal();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const styles = getStyles();

  return (
    <Dialog
      open={isModalOpen}
      onClose={handleCloseModal}
      PaperProps={{
        sx: styles.container,
      }}
    >
      <DialogContent>
        <Typography variant="h4" sx={styles.title}>
          Register Student
        </Typography>
        <Box sx={styles.contentContainer}>
          <Box sx={styles.innerContentContainer}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label, index) => {
                return (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === 0 && (
              <PersonalInformation
                formState={formState}
                handleInputChange={handleInputChange}
                level={level}
                setLevel={setLevel}
              />
            )}
            {activeStep === 1 && (
              <SubscriptionPlan
                formState={formState}
                handleInputChange={handleInputChange}
              />
            )}
            {activeStep === 2 && (
              <Box sx={styles.schedulerContainer}>
                <WeekScheduler
                  selectedSlots={selectedSlots}
                  setSelectedSlots={setSelectedSlots}
                  windowWidth={windowWidth}
                />
              </Box>
            )}
            <Box sx={styles.buttonsContainer}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Register Student" : "Next"}
              </Button>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default RegisterStudentModal;
