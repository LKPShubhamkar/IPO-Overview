import { Box, TextField, Typography } from "@mui/material";

const UpiSection = ({ upiId, onChange }: any) => {
  return (
    <Box
      sx={{
        mt: 2,
        border: "1px solid #e5e5e5",
        borderRadius: 2,
        p: 1.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          UPI ID
        </Typography>

        <Typography
          sx={{
            fontSize: 10,
            color: "#999",
            mt: 0.5,
          }}
        >
          UPI ID linked to your Bank Account
        </Typography>
      </Box>

      <TextField
        value={upiId}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter UPI ID"
        variant="outlined"
        sx={{
          width: 270,

          "& .MuiOutlinedInput-root": {
            height: 40,
            borderRadius: 1.5,
            fontSize: 13,
            backgroundColor: "#fff",

            "& fieldset": {
              borderColor: "#64b86b",
            },

            "&:hover fieldset": {
              borderColor: "#64b86b",
            },

            "&.Mui-focused fieldset": {
              borderColor: "#64b86b",
            },
          },

          "& .MuiInputBase-input": {
            px: 1.5,
          },

          "@media (max-width:600px)": {
            width: 180,
          },
        }}
      />
    </Box>
  );
};

export default UpiSection;
