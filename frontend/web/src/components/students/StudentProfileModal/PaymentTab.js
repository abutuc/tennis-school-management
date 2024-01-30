import {
  Box,
  Typography,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Divider,
} from "@mui/material";

const getStyles = (windowWidth) => ({
  container: {
    display: "flex",
    flexDirection: windowWidth > 800 ? "row" : "column",
    padding: 3,
    borderRadius: 8,
    boxShadow: 2,
    minHeight: 300,
  },
  informationContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: windowWidth > 800 ? "50%" : "100%",
  },
  informationTitle: {
    fontWeight: 500,
    fontSize: "16px",
    textAlign: windowWidth > 800 ? "left" : "center",
  },
  informationInnerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: windowWidth > 800 ? "flex-start" : "center",
  },
  divider: {
    marginY: 1,
  },
  planContainer: {
    display: "flex",
    flexDirection: "column",
    width: windowWidth > 800 ? "50%" : "100%",
    justifyContent: "center",
    paddingTop: windowWidth > 800 ? 0 : 2,
  },
  planTitle: {
    fontWeight: 500,
    fontSize: "16px",
    textAlign: "center",
  },
  table: {
    mt: 1,
    borderRadius: 3,
    overflow: "hidden",
  },
  priceCell: {
    textAlign: "center",
  },
  nextPayment: {
    display: "flex",
    justifyContent: windowWidth > 800 ? "flex-start" : "center",
  },
  overduePayments: {
    textAlign: windowWidth > 800 ? "left" : "center",
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

function PaymentTab({ windowWidth, billingDetails }) {
  const styles = getStyles(windowWidth);
  return (
    <Box component={Paper} sx={styles.container}>
      <Box sx={styles.informationContainer}>
        <Box>
          <Typography variant="h6" sx={styles.informationTitle}>
            Billing Information
          </Typography>
          <Box sx={styles.informationInnerContainer}>
            <InfoRow
              label={"Payment Method"}
              value={billingDetails.billingMethod}
            />
            <InfoRow
              label={"Tax Identification Number"}
              value={billingDetails.taxIdentificationNumber}
            />
            <InfoRow
              label={"Monthly Bill Amount"}
              value={
                billingDetails.monthlyBillAmount + " " + billingDetails.currency
              }
            />
          </Box>
        </Box>
        {windowWidth <= 800 && (
          <Divider variant="middle" sx={styles.divider} light />
        )}
        <Box>
          <Typography variant="h6" sx={styles.informationTitle}>
            Next Payment
          </Typography>
          <Box sx={styles.nextPayment}>
            <InfoRow
              label={"Payment Due Date"}
              value={billingDetails.nextPaymentDue}
            />
          </Box>
        </Box>
        {windowWidth <= 800 && (
          <Divider variant="middle" sx={styles.divider} light />
        )}
        {billingDetails.overduePayments.length > 0 && (
          <Box>
            <Typography variant="h6" color="error" sx={styles.informationTitle}>
              Overdue Payments
            </Typography>
            <Typography sx={styles.overduePayments}>
              {billingDetails.overduePayments.join("; ")}
            </Typography>
            {windowWidth <= 800 && (
              <Divider variant="middle" sx={styles.divider} light />
            )}
          </Box>
        )}
      </Box>
      <Box sx={styles.planContainer}>
        <Typography variant="h6" sx={styles.planTitle}>
          Plan
        </Typography>
        <TableContainer component={Paper} sx={styles.table}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Service Description</TableCell>
                <TableCell>Cost ({billingDetails.currency})</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {billingDetails.billingPlan.map((service, index) => (
                <TableRow key={index}>
                  <TableCell>{service.description}</TableCell>
                  <TableCell sx={styles.priceCell}>{service.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default PaymentTab;
