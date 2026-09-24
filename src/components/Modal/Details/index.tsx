import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { GetIPOAppEnquiryApi } from "../../../services/api";
import { useEffect, useState } from "react";

const ViewDetails = ({
  onClose,
  propsData,
}: {
  onClose: () => void;
  propsData: any;
}) => {
  console.log("data ViewDetails", propsData);
  const [apiData, setApiData] = useState([]);

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const ipoDetails = async () => {
      try {
        const payload = {
          scripID: propsData?.symbol,
          applicationNos: [propsData?.applicationNumber.toString()],
        };

        const response = await GetIPOAppEnquiryApi(payload);

        console.log("IPO Order Response:", response);

        const result = response || [];

        setApiData(result);
      } catch (error) {
        console.error("Failed to fetch IPO applications:", error);
      }
    };

    if (propsData?.symbol && propsData?.applicationNumber) {
      ipoDetails();
    }
  }, [propsData]);

  const ipo = apiData[0] || {};

  const bidAmount = Number(ipo.amount || 0).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const bids = ipo.bids || ipo.bidList || [];

  const formatDate = (dateTime: string) => {
    if (!dateTime) return "-";

    const [date, time] = dateTime.split(" ");
    const [day, month, year] = date.split("-");

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return `${day} ${months[Number(month) - 1]} ${year}${
      time ? `, ${time}` : ""
    }`;
  };

  const getStatus = () => {
    if (ipo.rejectreason?.includes("REQUEST SENT")) {
      return "UPI Pending";
    }

    if (ipo.dpstatus === "S") {
      return "Submitted";
    }

    return ipo.message || "Submitted";
  };

  return (
    <Box
      sx={{
        width: "100%",
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
            {ipo.scripid?.substring(0, 2) || "--"}
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {ipo.scripid || "-"}
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
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <Typography sx={{ fontSize: 12 }}>
          <Box component="span" sx={{ color: "#999", mr: 1 }}>
            Bid Amount
          </Box>

          <Box component="span" sx={{ fontSize: 14 }}>
            ₹{bidAmount}
          </Box>
        </Typography>

        <Typography sx={{ fontSize: 12 }}>
          <Box component="span" sx={{ color: "#999", mr: 1 }}>
            Submitted on
          </Box>

          <Box component="span" sx={{ fontSize: 14 }}>
            {formatDate(ipo.entrydatetime)}
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
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        {/* Left */}
        <Box
          sx={{
            p: 2,
            flex: isMobile ? "auto" : "0 0 50%",
            minWidth: 0,
          }}
        >
          <Typography
            sx={{
              fontSize: 17,
              fontWeight: 500,
              mb: 1.5,
            }}
          >
            IPO Bid Snapshot
          </Typography>

          <InfoRow label="UPI Handle" value={ipo.accountnumber_upiid || "-"} />

          <InfoRow label="Category" value={ipo.category || "-"} />
        </Box>

        {/* Right */}
        <Box
          sx={{
            p: 2,
            flex: isMobile ? "auto" : "0 0 50%",
            minWidth: 0,
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
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            columnGap: 2,
            rowGap: 1.5,
          }}
        >
          <SummaryItem label="Status" value={getStatus()} />

          <SummaryItem label="Order Type" value="IPO" />

          <SummaryItem
            label="Application Number"
            value={ipo.applicationno || "-"}
          />

          <SummaryItem
            label="Order Time"
            value={formatDate(ipo.entrydatetime)}
          />

          {/* Bid Details */}
          <Box
            sx={{
              gridColumn: "1 / -1",
              mt: 2,
              pt: 2,
              borderTop: "1px solid #e5e5e5",
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 500,
                mb: 1.5,
              }}
            >
              Bid Details
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                },
                gap: 1.5,
              }}
            >
              {bids.map((bid: any, index: number) => {
                const quantity = Number(bid.quantity ?? bid.bidQty ?? 0);

                const rate = Number(bid.rate ?? bid.bidPrice ?? 0);

                const amount = quantity * rate;

                return (
                  <Box
                    key={bid.bidid || index}
                    sx={{
                      border: "1px solid #e5e5e5",
                      borderRadius: 1.5,
                      p: 1.5,
                      backgroundColor: "#fafafa",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 13,
                        fontWeight: 500,
                        mb: 1,
                      }}
                    >
                      Bid {index + 1}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 2,
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            fontSize: 10,
                            color: "#999",
                          }}
                        >
                          Quantity
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: 14,
                            mt: 0.3,
                          }}
                        >
                          {quantity}
                        </Typography>
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            fontSize: 10,
                            color: "#999",
                          }}
                        >
                          Bid Price
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: 14,
                            mt: 0.3,
                          }}
                        >
                          ₹{rate.toFixed(2)}
                        </Typography>
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            fontSize: 10,
                            color: "#999",
                          }}
                        >
                          Amount
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: 14,
                            mt: 0.3,
                          }}
                        >
                          ₹
                          {amount.toLocaleString("en-IN", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>

          {/* <SummaryItem label="Allotment Date" value="---x---" />

          <SummaryItem label="Refund Date" value="---x---" />

          <SummaryItem label="Transfer Date" value="---x---" />

          <SummaryItem label="Listing Date" value="---x---" /> */}

          <SummaryItem
            label="CDSL Demat Account"
            value={ipo.clientbenfid || "-"}
          />

          <SummaryItem label="DP ID" value={ipo.dpid || "-----"} />

          <SummaryItem label="Client PAN" value={ipo.panno || "-"} />
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
        gap: 2,
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
          textAlign: "right",
          wordBreak: "break-word",
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
          whiteSpace: "normal",
          wordBreak: "break-word",
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
