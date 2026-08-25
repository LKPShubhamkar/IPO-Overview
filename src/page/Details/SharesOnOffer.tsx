import { Box, Typography } from "@mui/material";

const SharesOnOffer = ({ data }: any) => {
  return (
    <Box>
      <Typography sx={{ fontSize: 13, fontWeight: 500, mb: 0.5 }}>
        Number of Shares on Offer
      </Typography>

      <Box
        sx={{
          border: "1px solid #e5e5e5",
          borderRadius: 1,
          p: 1.5,
        }}
      >
        <Row
          label="Fresh Issue"
          value={`${(data?.fresh_issue / 1000000).toFixed(2)}M`}
        />

        <Row
          label="Offer for Sale"
          value={`${(data?.offer_for_sale / 1000000).toFixed(2)}M`}
        />

        <Row
          label="Post Issue Promoter Holding %"
          value={`${data?.post_issue_promoter_holding_percent}%`}
        />

        <Box
          sx={{
            borderTop: "1px solid #eee",
            mt: 1,
            pt: 1,
          }}
        >
          <Row
            label="Total"
            value={`${(data?.total_shares_offered / 1000000).toFixed(2)}M`}
            bold
          />
        </Box>
      </Box>
    </Box>
  );
};

const Row = ({ label, value, bold }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        py: 0.45,
      }}
    >
      <Typography sx={{ fontSize: 9, color: "#999" }}>{label}</Typography>

      <Typography
        sx={{
          fontSize: 10,
          color: bold ? "#0066b3" : "#454545",
          fontWeight: bold ? 500 : 400,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default SharesOnOffer;
