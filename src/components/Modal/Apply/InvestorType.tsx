import { Box, Typography } from "@mui/material";

const InvestorType = ({ category, options, onChange }: any) => {
  return (
    <Box sx={{ mt: 1 }}>
      <Typography
        sx={{
          fontSize: 11,
          color: "#858585",
          mb: 0.7,
        }}
      >
        Investor Type
      </Typography>

      <Box
        component="select"
        value={category}
        onChange={(e: any) => onChange(e.target.value)}
        sx={{
          width: "100%",
          height: 44,
          border: "1px solid #e5e5e5",
          borderRadius: 1,
          px: 1.5,
          fontSize: 13,
          backgroundColor: "#fff",
          outline: "none",
          cursor: "pointer",

          "&:focus": {
            borderColor: "#0066b3",
          },
        }}
      >
        {options.map((item: any) => (
          <option key={item.accessor} value={item.accessor}>
            {item.name}
          </option>
        ))}
      </Box>
    </Box>
  );
};

export default InvestorType;
