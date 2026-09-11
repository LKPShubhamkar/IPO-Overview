import { Box, IconButton, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const ViewDetails = ({ onClose }: any) => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#fff",
        color: "#414451",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          height: 70,
          px: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #e5e5e5",
          boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Box
            sx={{
              width: 38,
              height: 38,
              border: "1px solid #e5e5e5",
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
              fontWeight: 600,
              color: "#7bbd00",
            }}
          >
            CN
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              Capital Numbers Infotech Ltd
            </Typography>

            <Typography
              sx={{
                display: "inline-block",
                mt: 0.3,
                px: 0.5,
                fontSize: 10,
                color: "#4caf50",
                backgroundColor: "#eaf7ec",
                borderRadius: 0.5,
              }}
            >
              Active
            </Typography>
          </Box>
        </Box>

        <IconButton
          size="small"
          onClick={onClose}
          sx={{
            width: 26,
            height: 26,
            border: "1px solid #555",
            borderRadius: "50%",
          }}
        >
          <CloseIcon sx={{ fontSize: 17 }} />
        </IconButton>
      </Box>

      {/* Success */}
      <Box
        sx={{
          textAlign: "center",
          pt: 2.5,
        }}
      >
        <Box
          sx={{
            width: 74,
            height: 74,
            mx: "auto",
            borderRadius: "50%",
            backgroundColor: "#edf8ef",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CheckIcon
            sx={{
              fontSize: 52,
              color: "#4caf50",
            }}
          />
        </Box>

        <Typography
          sx={{
            mt: 2.5,
            fontSize: 18,
            fontWeight: 500,
          }}
        >
          Your IPO request has been submitted successfully.
        </Typography>
      </Box>

      {/* Amount / Date */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 2.5,
          mt: 2.5,
        }}
      >
        <Typography sx={{ fontSize: 12 }}>
          <Box component="span" sx={{ color: "#999", mr: 1 }}>
            Bid Amount
          </Box>
          <Box component="span" sx={{ fontSize: 14 }}>
            2,05,800.00
          </Box>
        </Typography>

        <Typography sx={{ fontSize: 12 }}>
          <Box component="span" sx={{ color: "#999", mr: 1 }}>
            Submitted on
          </Box>
          <Box component="span" sx={{ fontSize: 14 }}>
            23 Jan 2025
          </Box>
        </Typography>
      </Box>

      {/* IPO Bid Snapshot */}
      <Box
        sx={{
          mx: 2.5,
          mt: 2.5,
          border: "1px solid #e2e2e2",
          borderRadius: 2,
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography
            sx={{
              fontSize: 17,
              fontWeight: 500,
              mb: 1.5,
            }}
          >
            IPO Bid Snapshot
          </Typography>

          <InfoRow label="UPI Handle" value="9920969697@upi" />

          <InfoRow label="Category" value="HNI" />
        </Box>

        <Box
          sx={{
            p: 2,
            backgroundColor: "#f3f6fa",
          }}
        >
          <Typography
            sx={{
              fontSize: 15,
              fontWeight: 500,
              mb: 1,
            }}
          >
            Stock Exchange will send mandate to your UPI app
          </Typography>

          <Typography sx={stepStyle}>
            1. Your IPO request has been sent to stock exchange
          </Typography>

          <Typography sx={stepStyle}>
            2. Exchange will send UPI request to confirm payment
          </Typography>

          <Typography sx={stepStyle}>
            3. Check your UPI app for pay request for IPO
          </Typography>
        </Box>
      </Box>

      {/* Order Summary */}
      <Box
        sx={{
          mx: 2.5,
          mt: 2.5,
          mb: 2.5,
          border: "1px solid #e2e2e2",
          borderRadius: 2,
          p: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: 17,
            fontWeight: 500,
            mb: 1.5,
          }}
        >
          Order Summary
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            columnGap: 2,
            rowGap: 1.5,
          }}
        >
          <SummaryItem label="Status" value="Submitted" />
          <SummaryItem label="Order Type" value="IPO" />
          <SummaryItem label="Application Number" value="DHNDE1029279" />
          <SummaryItem label="Order Time" value="23 Jan 2025, 21:44:31" />
          <SummaryItem label="Bid 1 Quantity / Price" value="700 / 294.00" />
          <SummaryItem label="Allotment Date" value="27 Jan 2025" />

          <SummaryItem label="Refund Date" value="28 Jan 2025" />
          <SummaryItem label="Transfer Date" value="28 Jan 2025" />
          <SummaryItem label="Listing Date" value="29 Jan 2025" />
          <SummaryItem label="CDSL Demat Account" value="123456789012346" />
          <SummaryItem label="Client ID" value="1234567890" />
          <SummaryItem label="Client PAN" value="BTST4549P" />
        </Box>
      </Box>
    </Box>
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mb: 1,
      }}
    >
      <Typography
        sx={{
          fontSize: 12,
          color: "#999",
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          fontSize: 14,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

const SummaryItem = ({ label, value }: { label: string; value: string }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: 11,
          color: "#999",
          mb: 0.5,
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          fontSize: 14,
          whiteSpace: "nowrap",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

const stepStyle = {
  fontSize: 12,
  color: "#999",
  mb: 1,
};

export default ViewDetails;
