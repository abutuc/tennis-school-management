import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@mui/material";

const getStyles = (windowWidth) => ({
  container: {
    width: windowWidth > 1194 ? "49%" : "100%",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginTop: windowWidth > 1194 ? 0 : 2,
  },
  innerContainer: {
    height: "310px",
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: 2,
  },
  issuesStatContainer: {
    display: "flex",
    paddingRight: 2,
  },
  newIssuesContainer: {
    paddingLeft: 3,
  },
  issuesStatText: {
    textAlign: "center",
  },
  tableContainer: {
    height: "215px",
  },
  tableHead: {
    backgroundColor: "#7b1fa2",
  },
  tableColumn: {
    color: "#ffffff",
  },
  tableRow: {
    "&:hover": { backgroundColor: "#f5f5f5" },
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
});
const EquipmentStatus = ({ windowWidth }) => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 3;
  const issueTickets = [
    {
      date: "2023-01-15",
      equipment: "Tennis Balls",
      complainant: "Player A",
      description: "Worn out",
    },
    {
      date: "2023-02-02",
      equipment: "Tennis Balls",
      complainant: "Player B",
      description: "Lost 5 balls",
    },
    {
      date: "2023-01-22",
      equipment: "Tennis Rackets",
      complainant: "Player C",
      description: "Broken strings longer description just to test",
    },
    {
      date: "2023-01-22",
      equipment: "Tennis Rackets",
      complainant: "Player C",
      description: "Broken strings longer description just to test",
    },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const totalIssues = issueTickets.length;
  const columns = ["Date", "Equipment", "Complainant", "Description"];
  const styles = getStyles(windowWidth);

  return (
    <Card sx={styles.container}>
      <CardContent sx={styles.innerContainer}>
        <Box sx={styles.headerContainer}>
          <Typography variant="h6">Equipment Status</Typography>
          <Box sx={styles.issuesStatContainer}>
            <Box>
              <Typography variant="subtitle2" color="textSecondary">
                Total Issues
              </Typography>
              <Typography variant="h6" color="error" sx={styles.issuesStatText}>
                {totalIssues}
              </Typography>
            </Box>
            <Box sx={styles.newIssuesContainer}>
              <Typography variant="subtitle2" color="textSecondary">
                New Issues
              </Typography>
              <Typography variant="h6" color="error" sx={styles.issuesStatText}>
                {totalIssues}
              </Typography>
            </Box>
          </Box>
        </Box>
        <TableContainer sx={styles.tableContainer}>
          <Table>
            <TableHead sx={styles.tableHead}>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column} sx={styles.tableColumn}>
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {issueTickets
                .slice(page * rowsPerPage, page + rowsPerPage)
                .map((ticket, index) => (
                  <TableRow key={index} sx={styles.tableRow}>
                    {Object.values(ticket).map((value, subIndex) => (
                      <TableCell key={subIndex}>
                        <Typography variant="body2" noWrap>
                          {value}
                        </Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={styles.paginationContainer}>
          <TablePagination
            component="div"
            count={totalIssues}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPageOptions={[]}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default EquipmentStatus;
