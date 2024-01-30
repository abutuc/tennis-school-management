import { Button, Typography } from "@mui/material";

import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

const getStyles = () => ({
  button: {
    backgroundColor: "#6D31ED",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#996ff2",
    },
    height: "40px",
  },
  buttonText: {
    fontWeight: 500,
  },
});

function RegisterButton({ handleOpenRegisterStudentModal, windowWidth }) {
  const styles = getStyles();
  return (
    <Button
      startIcon={<PersonAddAltIcon />}
      variant="contained"
      sx={styles.button}
      onClick={() => handleOpenRegisterStudentModal()}
    >
      {windowWidth > 450 && (
        <Typography noWrap variant="body2" sx={styles.buttonText}>
          Register Student
        </Typography>
      )}
    </Button>
  );
}

export default RegisterButton;
