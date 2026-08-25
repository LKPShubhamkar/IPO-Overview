import { Box, Typography } from "@mui/material";

const FinancialOverview = ({ data }: any) => {
  return (
    <Box>
      <Typography sx={{ fontSize: 13, fontWeight: 500, mb: 0.5 }}>
        Financial Overview
      </Typography>

      <Box
        sx={{
          border: "1px solid #e5e5e5",
          borderRadius: 1,
          p: 1.5,
          overflow: "auto",

          "& table": {
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "9px",
          },

          "& td": {
            border: "1px solid #eee",
            padding: "6px",
          },

          "& tr:first-of-type": {
            fontWeight: 500,
            backgroundColor: "#f7f7f7",
          },
        }}
        dangerouslySetInnerHTML={{ __html: data || "" }}
      />
    </Box>
  );
};

export default FinancialOverview;
