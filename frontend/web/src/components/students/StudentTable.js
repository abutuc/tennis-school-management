import React, { useState } from "react";
import {
  Box,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TablePagination,
  Typography,
} from "@mui/material";

const getStyles = () => ({
  container: {
    height: 630,
  },
  tableContainer: {
    overflowY: "auto",
    height: 580,
  },
  tableHead: {
    backgroundColor: "#f9f9f9",
  },
  headerText: {
    fontWeight: 500,
  },
  tableRow: {
    "&:hover": { backgroundColor: "#f5f5f5" },
  },
  pagination: {
    backgroundColor: "#f9f9f9",
    borderBottomLeftRadius: "12px",
    borderBottomRightRadius: "12px",
  },
});

function StudentTable({
  filteredStudents,
  handleOpenStudentProfileModal,
  columns,
}) {
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const styles = getStyles();

  return (
    <TableContainer component={Paper} sx={styles.container}>
      <Box sx={styles.tableContainer}>
        <Table>
          <TableHead sx={styles.tableHead}>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column}>
                  <Typography noWrap variant="body2" sx={styles.headerText}>
                    {column}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? filteredStudents.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : filteredStudents
            ).map((student) => (
              <TableRow
                key={student.id}
                onClick={() => handleOpenStudentProfileModal(student)}
                sx={styles.tableRow}
              >
                {Object.values(student).map((value, subIndex) => {
                  if (subIndex !== 0) {
                    return (
                      <TableCell key={subIndex}>
                        <Typography variant="body2" noWrap>
                          {value}
                        </Typography>
                      </TableCell>
                    );
                  }
                  return null;
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={filteredStudents.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        sx={styles.pagination}
      />
    </TableContainer>
  );
}

export default StudentTable;
