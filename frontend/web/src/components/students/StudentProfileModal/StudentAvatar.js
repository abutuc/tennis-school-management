import { Box, Avatar, Typography } from "@mui/material";
import avatar from "../../../assets/avatar.png";

const getStyles = (windowWidth) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -4,
    width: windowWidth > 800 ? "33%" : "100%",
    marginBottom: windowWidth > 800 ? 0 : 3,
  },
  avatar: {
    width: 150,
    height: 150,
  },
  name: {
    fontWeight: "bold",
    paddingTop: 2,
  },
});
function StudentAvatar({ studentName, windowWidth }) {
  const styles = getStyles(windowWidth);
  return (
    <Box sx={styles.container}>
      <Avatar src={avatar} sx={styles.avatar} />
      <Typography variant="h5" sx={styles.name}>
        {studentName}
      </Typography>
    </Box>
  );
}

export default StudentAvatar;
