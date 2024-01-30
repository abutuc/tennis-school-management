import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const getStyles = (windowWidth) => ({
  container: {
    display: "flex",
    flexDirection: windowWidth > 450 ? "row" : "column",
    width: "65%",
  },
  searchContainer: {
    width: windowWidth > 450 ? "50%" : "70%",
  },
  search: {
    width: windowWidth > 450 ? "75%" : "100%",
    marginBottom: windowWidth > 450 ? 0 : 1,
  },
  orderByContainer: {
    width: windowWidth > 450 ? "50%" : "70%",
  },
  orderBy: {
    width: windowWidth > 450 ? "55%" : "100%",
  },
});

const toCamelCase = (string) => {
  return string
    .toLowerCase()
    .split(" ")
    .reduce((s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1)));
};

function TableFiltering({
  windowWidth,
  searchTerm,
  setSearchTerm,
  orderBy,
  setOrderBy,
  columns,
}) {
  const styles = getStyles(windowWidth);
  return (
    <Box sx={styles.container}>
      <Box sx={styles.searchContainer}>
        <TextField
          label="Search for a student"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          size="small"
          sx={styles.search}
        />
      </Box>

      <Box sx={styles.orderByContainer}>
        <FormControl variant="outlined" size="small" sx={styles.orderBy}>
          <InputLabel>Order By</InputLabel>
          <Select
            displayEmpty
            value={orderBy}
            onChange={(e) => setOrderBy(e.target.value)}
            label="Order By"
          >
            {columns.map((column) => (
              <MenuItem key={column} value={toCamelCase(column)}>
                {column}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}

export default TableFiltering;
