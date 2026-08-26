import { Box, Typography } from "@mui/material";

const SubscriptionData = ({ data }: any) => {
  const rows = data?.subscription_details || [];

  return (
    <Box>
      <Typography sx={{ fontSize: 14, fontWeight: 500, mb: 0.5 }}>
        Subscription Data
      </Typography>

      <Box
        sx={{
          border: "1px solid #e5e5e5",
          borderRadius: 1,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr 1fr",
            p: 1,
            borderBottom: "1px solid #eee",
          }}
        >
          <Header text="Day" />
          <Header text="Retail Individual Investor" />
          <Header text="Non Institutional Investor" />
          <Header text="Qualified Institutional Buyers" />
        </Box>
        {rows.map((row: any) => (
          <Box
            key={row.modified}
            sx={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr 1fr 1fr",
              px: 1,
              py: 0.8,
              borderBottom: "1px solid #eee",
            }}
          >
            <Typography sx={{ fontSize: 12 }}>
              {row.day}
              {/* {row.day?.replace("<br>", " ")} */}
            </Typography>

            <Typography sx={{ fontSize: 12 }}>
              {row.retail_individual_investor}x
            </Typography>

            <Typography sx={{ fontSize: 12 }}>
              {row.non_institutional_investor}x
            </Typography>

            <Typography sx={{ fontSize: 12 }}>
              {row.qualified_institutional_buyers}x
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const Header = ({ text }: any) => (
  <Typography sx={{ fontSize: 10, color: "#999" }}>{text}</Typography>
);

export default SubscriptionData;
