import { Box, Typography } from "@mui/material";

const IpoOverview = ({ data }: any) => {
  return (
    <Box>
      <Typography sx={{ fontSize: 13, fontWeight: 500, mb: 0.5 }}>
        IPO Details
      </Typography>

      <Box
        sx={{
          border: "1px solid #e5e5e5",
          borderRadius: 1,
          p: 1.5,
          backgroundColor: "#fff",
        }}
      >
        <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
          <Typography sx={{ fontSize: 11, color: "#0066b3", fontWeight: 500 }}>
            Retail
          </Typography>

          <Typography sx={{ fontSize: 11, color: "#999" }}>HNI</Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
          }}
        >
          <Item
            label="Bid Price"
            value={`${data?.price_range_min} - ${data?.price_range_max}`}
          />

          <Item label="Lot size" value={`${data?.lot_size} Shares`} />

          <Item label="Retail Discount" value="-" />

          <Item
            label="Issue Size"
            value={`${(data?.issue_size / 10000000).toFixed(2)} Cr`}
          />
        </Box>

        <Box
          sx={{
            borderTop: "1px solid #eee",
            mt: 1,
            pt: 1,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Item
            label="Minimum Investment"
            value={`${data?.min_investment?.toLocaleString("en-IN")} / 1 Lot`}
          />

          <Item
            label="Maximum Investment"
            value={`${(data?.min_investment * data?.max_lot)?.toLocaleString(
              "en-IN",
            )} / ${data?.max_lot} Lots`}
            align="right"
          />
        </Box>
      </Box>
    </Box>
  );
};

const Item = ({ label, value, align }: any) => {
  return (
    <Box sx={{ textAlign: align || "left" }}>
      <Typography sx={{ fontSize: 10.5, color: "#999" }}>{label}</Typography>

      <Typography sx={{ fontSize: 12, color: "#454545", mt: 0.3 }}>
        {value}
      </Typography>
    </Box>
  );
};

export default IpoOverview;
