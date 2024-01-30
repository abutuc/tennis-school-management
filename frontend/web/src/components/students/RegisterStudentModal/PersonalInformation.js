import {
  Typography,
  Box,
  FormControl,
  Input,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const getStyles = () => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: 480,
    paddingTop: 2,
  },
  inputLabel: {
    fontSize: "20px",
  },
  input: {
    paddingTop: 1,
  },
});

function PersonalInformation({
  formState,
  handleInputChange,
  level,
  setLevel,
}) {
  const styles = getStyles();
  return (
    <Box sx={styles.container}>
      <FormControl variant="standard">
        <InputLabel shrink={true} sx={styles.inputLabel}>
          Full Name
        </InputLabel>
        <Input
          defaultValue={formState.fullName}
          id="full-name"
          sx={styles.input}
          onChange={(e) => handleInputChange("fullName", e.target.value)}
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel shrink={true} style={styles.inputLabel}>
          Email
        </InputLabel>
        <Input
          id="email"
          type="email"
          defaultValue={formState.email}
          sx={styles.input}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel shrink={true} style={styles.inputLabel}>
          Day of Birth
        </InputLabel>
        <Input
          id="day-of-birth"
          type="date"
          defaultValue={formState.dayOfBirth}
          sx={styles.input}
          onChange={(e) => handleInputChange("dayOfBirth", e.target.value)}
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel shrink={true} style={styles.inputLabel}>
          Phone Number
        </InputLabel>
        <Input
          id="phone-number"
          type="tel"
          defaultValue={formState.phoneNumber}
          sx={styles.input}
          onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel shrink={true} style={styles.inputLabel}>
          Address
        </InputLabel>
        <Input
          id="address"
          defaultValue={formState.address}
          sx={styles.input}
          onChange={(e) => handleInputChange("address", e.target.value)}
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel shrink={true} style={styles.inputLabel}>
          Tennis Level
        </InputLabel>
        <Select
          defaultValue={formState.tennisLevel}
          labelId="tennis-level-label"
          id="tennis-level"
          value={level}
          onChange={(event) => {
            setLevel(event.target.value);
            handleInputChange("tennisLevel", event.target.value);
          }}
          label="Tennis Level"
          sx={styles.input}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Begginner</MenuItem>
          <MenuItem value={20}>Intermediate</MenuItem>
          <MenuItem value={30}>Advanced</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel shrink={true} style={styles.inputLabel}>
          Profile Picture
        </InputLabel>
        <Input
          id="profile-picture"
          type="file"
          accept="image/png, image/jpeg"
          sx={styles.input}
          onChange={(e) => handleInputChange("profilePicture", e.target.value)}
        />
        {formState.profilePicture !== null && (
          <Typography variant="body2" color="green">
            File {formState.profilePicture} uploaded successfully!
          </Typography>
        )}
      </FormControl>
    </Box>
  );
}
export default PersonalInformation;
