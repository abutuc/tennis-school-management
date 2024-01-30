import { Typography, Box, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        width: "100%",
        height: 35,
        position: "relative",
      }}
    >
      <Typography variant="body1" color={"#424856FF"}>
        &copy; 2023 TennisFic
      </Typography>
      <Box sx={{ display: "flex", gap: 2, marginTop: 1, paddingLeft: 2 }}>
        <Typography variant="body1" color={"#424856FF"}>
          •
        </Typography>
        <Link href="/privacy" color={"#424856FF"} underline="hover">
          Privacy
        </Link>
        <Typography variant="body1" color={"#424856FF"}>
          •
        </Typography>
        <Link href="/terms" color={"#424856FF"} underline="hover">
          Terms
        </Link>
        <Typography variant="body1" color={"#424856FF"}>
          •
        </Typography>
        <Link href="/sitemap" color={"#424856FF"} underline="hover">
          Sitemap
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
