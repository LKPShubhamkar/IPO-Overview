import { Box, Typography } from "@mui/material";

const ImportantDates = ({ data }: any) => {
  const dates = [
    ["Issue Open", data?.open_date],
    ["Issue Close", data?.close_date],
    ["Allotment Date", data?.allotment_date],
    ["Refund Date", data?.refund_date],
    ["Credit Date", data?.demat_credit_date],
    ["Listing Date", data?.listing_date],
  ];

  // Today in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

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
          {dates.map(([label, date], index) => {
            const isCompleted = date && date <= today;
            const nextDate = dates[index + 1]?.[1];
            const nextIsCompleted = nextDate && nextDate <= today;

            const lineCompleted = isCompleted && nextIsCompleted;

            return (
              <Box
                key={label}
                sx={{ textAlign: "center", position: "relative" }}
              >
                <Typography sx={{ fontSize: 9, color: "#999" }}>
                  {date || "-"}
                </Typography>

                {/* Timeline */}
                <Box
                  sx={{
                    mt: 1.5,
                    height: 10,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {/* Line to next dot */}
                  {index < dates.length - 1 && (
                    <Box
                      sx={{
                        position: "absolute",
                        left: "50%",
                        right: "-50%",
                        height: 2,
                        backgroundColor: lineCompleted ? "#3aaa55" : "#dce5ed",
                      }}
                    />
                  )}

                  {/* Dot */}
                  <Box
                    sx={{
                      width: 9,
                      height: 9,
                      borderRadius: "50%",
                      backgroundColor: isCompleted ? "#3aaa55" : "#fff",
                      border: `2px solid ${
                        isCompleted ? "#3aaa55" : "#0066b3"
                      }`,
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 2,
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
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ImportantDates;
