import { Box, Typography, Divider } from "@mui/material";

const getStyles = (windowWidth) => ({
  container: {
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    width: windowWidth > 800 ? "67%" : "100%",
    height: windowWidth > 550 ? 200 : 350,
    backgroundColor: "#ffffff",
    padding: 2,
    display: "flex",
    flexDirection: "column",
  },
});

const InfoRow = ({ label, value }) => (
  <Box display="flex" alignItems="center" marginBottom={1}>
    <Typography noWrap variant="body1" marginRight={1} color="textSecondary">
      {label}
    </Typography>
    <Typography noWrap variant="body1">
      {value}
    </Typography>
  </Box>
);

function StudentInformation({ windowWidth, selectedStudent }) {
  const styles = getStyles(windowWidth);
  return (
    <Box sx={styles.container}>
      <Typography variant="h6" sx={{ marginBottom: 1 }} textAlign={"center"}>
        Student Information
      </Typography>
      <Box display={"flex"} justifyContent={"space-between"}>
        {windowWidth > 550 ? (
          <>
            <Box
              display="flex"
              flexDirection="column"
              width={"49%"}
              alignItems={"center"}
            >
              <InfoRow label="Full Name" value={selectedStudent?.name} />
              <InfoRow label="Email" value={selectedStudent?.email} />
              <InfoRow label="Day of Birth" value="02/11/2001" />
              <InfoRow label="Phone Number" value="123 456 789" />
              <InfoRow label="Address" value="4th Avenue, Porto" />
            </Box>
            <Divider orientation="vertical" />
            <Box
              display="flex"
              flexDirection="column"
              width={"49%"}
              alignItems={"center"}
            >
              <InfoRow label="Enrolled On" value="26/11/2023" />
              <InfoRow label="Assigned Coach" value="Coach Allen" />
              <InfoRow label="Tennis Level" value="Advanced" />
              <InfoRow label="Age Group" value="Senior" />
              <InfoRow label="Goal" value="Competition" />
            </Box>
          </>
        ) : (
          <Box display="flex" flexDirection="column">
            <InfoRow label="Full Name" value={selectedStudent?.name} />
            <InfoRow label="Email" value={selectedStudent?.email} />
            <InfoRow label="Day of Birth" value="02/11/2001" />
            <InfoRow label="Phone Number" value="123 456 789" />
            <InfoRow label="Address" value="4th Avenue, Porto" />
            <InfoRow label="Enrolled On" value="26/11/2023" />
            <InfoRow label="Assigned Coach" value="Coach Allen" />
            <InfoRow label="Tennis Level" value="Advanced" />
            <InfoRow label="Age Group" value="Senior" />
            <InfoRow label="Goal" value="Competition" />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default StudentInformation;
