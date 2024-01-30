import {
  Box,
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";

function LessonScheduleTab({ studentSchedule }) {
  return (
    <Box>
      <TableContainer
        component={Paper}
        sx={{ mt: 1, borderRadius: 3, overflow: "hidden" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Day</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Course</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentSchedule.map((scheduleItem, index) => (
              <TableRow key={index}>
                <TableCell>{scheduleItem.day}</TableCell>
                <TableCell>{scheduleItem.time}</TableCell>
                <TableCell>{scheduleItem.course}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default LessonScheduleTab;
