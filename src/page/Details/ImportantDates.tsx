import { Box, Typography } from "@mui/material";

const ImportantDates = ({ data }: any) => {
  const dates = [
    ["Issue Open", data?.open_date],
    ["Issue close", data?.close_date],
    ["Allotment Date", data?.allotment_date],
    ["Refund Date", data?.refund_date],
    ["Credit Date", data?.demat_credit_date],
    ["Listing Date", data?.listing_date],
  ];

  return (
    <Box>
      <Typography sx={{ fontSize: 14, fontWeight: 500, mb: 0.5 }}>
        Important IPO Dates
      </Typography>

      <Box
        sx={{
          border: "1px solid #e5e5e5",
          borderRadius: 1,
          p: 1.5,
          minHeight: 120,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
          }}
        >
          {dates.map(([label, date], index) => (
            <Box key={label} sx={{ textAlign: "center" }}>
              <Typography sx={{ fontSize: 9, color: "#999" }}>
                {date || "-"}
              </Typography>

              <Box
                sx={{
                  mt: 1.5,
                  height: 1,
                  backgroundColor: "#dce5ed",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: 9,
                    height: 9,
                    borderRadius: "50%",
                    backgroundColor: index === 0 ? "#3aaa55" : "#fff",
                    border: `2px solid ${index === 0 ? "#3aaa55" : "#0066b3"}`,
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: 9,
                  color: "#454545",
                  mt: 2,
                  lineHeight: 1.1,
                }}
              >
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ImportantDates;
