import { Box, Button, Typography } from "@mui/material";

const ApprovedMobileCard = ({ item, onApproval }: any) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        p: "14px",
        mb: "12px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#353844",
            }}
          >
            {item.companyName || "-"}
          </Typography>

          <Box sx={{ display: "flex", gap: "6px", mt: "4px" }}>
            <Typography sx={{ fontSize: "10px", color: "#858585" }}>
              {item.exchange || "-"}
            </Typography>

            <Typography
              sx={{
                fontSize: "10px",
                color: "#ff8a00",
                backgroundColor: "#fff3e5",
                px: "4px",
                borderRadius: "2px",
              }}
            >
              {item.ipoTypeName || "-"}
            </Typography>

            <Typography
              sx={{
                fontSize: "10px",
                color: "#858585",
                backgroundColor: "#f5f5f5",
                px: "4px",
                borderRadius: "2px",
              }}
            >
              {item.depository || "-"}
            </Typography>
          </Box>
        </Box>

        <Typography
          sx={{
            fontSize: "10px",
            color: "#3aaa55",
            backgroundColor: "#eaf7ed",
            px: "7px",
            py: "3px",
            borderRadius: "4px",
          }}
        >
          Pending
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
          mt: "16px",
        }}
      >
        <Info label="Category" value={item.category} />
        <Info label="Bid Qty" value={item.bidQty} />
        <Info label="Bid Price" value={`₹${item.bidPrice || "-"}`} />
        <Info label="Amount" value={`₹${item.amount || "-"}`} />
        <Info label="BOID" value={item.boid} />
        <Info label="UPI ID" value={item.upiid} />
      </Box>

      <Box
        sx={{
          mt: "14px",
          pt: "12px",
          borderTop: "1px solid #eee",
        }}
      >
        <Typography sx={{ fontSize: "11px", color: "#888" }}>Client</Typography>

        <Typography sx={{ fontSize: "12px", mt: "2px" }}>
          {item.clientName || "-"}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: "8px", mt: "14px" }}>
        <Button
          fullWidth
          onClick={() => onApproval(item, "YES")}
          sx={{
            height: "34px",
            textTransform: "none",
            backgroundColor: "#3aaa55",
            color: "#fff",
            fontSize: "12px",
            "&:hover": {
              backgroundColor: "#3aaa55",
            },
          }}
        >
          Yes
        </Button>

        <Button
          fullWidth
          variant="outlined"
          onClick={() => onApproval(item, "NO")}
          sx={{
            height: "34px",
            textTransform: "none",
            borderColor: "#dc3545",
            color: "#dc3545",
            fontSize: "12px",
          }}
        >
          No
        </Button>
      </Box>
    </Box>
  );
};

const Info = ({ label, value }: any) => (
  <Box>
    <Typography sx={{ fontSize: "10px", color: "#888" }}>{label}</Typography>
    <Typography
      sx={{
        fontSize: "12px",
        mt: "2px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}
    >
      {value || "-"}
    </Typography>
  </Box>
);

export default ApprovedMobileCard;
