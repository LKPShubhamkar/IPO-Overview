import { Box, Typography } from "@mui/material";

const IpoReports = () => {
  return (
    <Box sx={{ mt: 1.5 }}>
      <Typography sx={{ fontSize: 13, fontWeight: 500, mb: 0.5 }}>
        IPO Reports
      </Typography>

      <Box
        sx={{
          border: "1px solid #e5e5e5",
          borderRadius: 1,
          p: 1.5,
          color: "#999",
          fontSize: 10,
        }}
      >
        No reports available
      </Box>
    </Box>
  );
};

export default IpoReports;
