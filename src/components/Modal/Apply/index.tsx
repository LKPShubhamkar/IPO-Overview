import { useEffect, useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IpoClientDetailsApi, PlaceIpoOrderApi } from "../../../services/api";

import InvestorType from "./InvestorType";
import BidSection from "./BidSection";
import UpiSection from "./UpiSection";

const Apply = ({ data, onClose }: any) => {
  const [clientDetails, setClientDetails] = useState<any>(null);
  const subscriptionHeader = data?.subscription_rate?.subscription_header ?? [];

  const [category, setCategory] = useState("");
  const [bids, setBids] = useState<any[]>([]);
  const [upiId, setUpiId] = useState("");

  const company = data?.company_headers;
  const ipoOverview = data?.company_ipo_overview;

  const lotSize = ipoOverview?.lot_size ?? 0;
  const maxLots = ipoOverview?.max_lot ?? 1;

  const priceMin = ipoOverview?.price_range_min ?? 0;
  const priceMax = ipoOverview?.price_range_max ?? 0;

  const defaultBidPrice =
    ipoOverview?.issue_price ?? ipoOverview?.price_range_max ?? 0;

  const isHni = category === "non_institutional_investor";

  const minLots = isHni ? 14 : 1;
  const categoryMaxAmount = isHni ? 500000 : 200000;

  const categoryMaxLots =
    lotSize > 0 && priceMax > 0
      ? Math.floor(categoryMaxAmount / (lotSize * priceMax))
      : maxLots;

  const effectiveMaxLots = Math.min(maxLots, categoryMaxLots);

  useEffect(() => {
    if (subscriptionHeader.length > 0) {
      setCategory(subscriptionHeader[0]?.accessor);
    }
  }, [data]);

  useEffect(() => {
    if (bids.length === 0 && ipoOverview) {
      setBids([
        {
          lots: minLots,
          bidPrice: defaultBidPrice,
        },
      ]);
    }
  }, [ipoOverview, minLots, defaultBidPrice]);

  useEffect(() => {
    if (!ipoOverview || bids.length === 0) return;

    setBids((previousBids) =>
      previousBids.map((bid) => ({
        ...bid,
        lots: Math.max(minLots, Math.min(bid.lots, effectiveMaxLots)),
      })),
    );
  }, [category]);

  useEffect(() => {
    const getIpoData = async () => {
      try {
        const response = await IpoClientDetailsApi("ALAPD6986B");

        console.log(response, "response modal");

        setClientDetails(response?.data ?? response?.body);
      } catch (error) {
        console.error("Failed to fetch client details:", error);
      }
    };

    getIpoData();
  }, []);

  useEffect(() => {
    if (clientDetails?.upiId) {
      setUpiId(clientDetails.upiId);
    }
  }, [clientDetails]);

  const updateBid = (index: number, field: string, value: number) => {
    setBids((previousBids) =>
      previousBids.map((bid, currentIndex) =>
        currentIndex === index
          ? {
              ...bid,
              [field]: value,
            }
          : bid,
      ),
    );
  };

  const addBid = () => {
    if (bids.length >= 3) return;

    setBids((previousBids) => [
      ...previousBids,
      {
        lots: Math.min(minLots, effectiveMaxLots),
        bidPrice: defaultBidPrice,
      },
    ]);
  };

  const removeBid = (index: number) => {
    if (bids.length <= 1) return;

    setBids((previousBids) =>
      previousBids.filter((_, currentIndex) => currentIndex !== index),
    );
  };

  const equivalentAmount = bids.reduce((total, bid) => {
    return total + bid.lots * lotSize * bid.bidPrice;
  }, 0);

  const maxAmount = Math.min(maxLots * lotSize * priceMax, categoryMaxAmount);

  const handleApply = async () => {
    try {
      const totalAmount = bids.reduce((total, bid) => {
        return total + bid.lots * lotSize * bid.bidPrice;
      }, 0);

      const payload = {
        scripId: data?.stock_data?.NSEcode ?? "",

        applicationNo: "36620085",

        category: "IND",

        applicantName: clientDetails?.clientName ?? "",

        depository: clientDetails?.depository ?? "",

        dpid: "0",

        clientBenfId: clientDetails?.boId ?? "",

        chequeReceivedFlag: "Y",

        chequeAmount: totalAmount.toFixed(2),

        panNo: clientDetails?.panNo ?? "",

        bankName: "8888",

        location: "UPIIDL",

        accountNumberUPIID: clientDetails?.upiId ?? "",

        ifscCode: "",

        referenceNo: "",

        asbaupiid: "1",

        exchange: "BSE",

        repatriationType: null,

        clientCode: null,

        dpcode: "",

        iposbCode: null,

        refID: 0,

        batch: 0,

        bids: bids.map((bid) => ({
          bidId: "",

          quantity: (bid.lots * lotSize).toString(),

          rate: bid.bidPrice.toString(),

          cutoffFlag: "0",

          orderNo: "",

          actionCode: "N",
        })),
      };

      console.log("IPO Order Payload:", payload);

      const response = await PlaceIpoOrderApi(payload);

      console.log("IPO Order Response:", response);
    } catch (error) {
      console.error("Failed to place IPO order:", error);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
      }}
    >
      {/* Header */}

      <Box
        sx={{
          p: 2,
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1.5,
            }}
          >
            <Box
              component="img"
              src={company?.company_logo}
              alt={company?.company_name}
              sx={{
                width: 38,
                height: 38,
                objectFit: "contain",
              }}
            />

            <Box>
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#353844",
                }}
              >
                {company?.company_name}
              </Typography>

              <Typography
                sx={{
                  display: "inline-block",
                  mt: 0.3,
                  px: 0.5,
                  fontSize: 9,
                  color: "#43a047",
                  backgroundColor: "#eaf7ec",
                  borderRadius: "2px",
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
              border: "1px solid #555",
              width: 22,
              height: 22,
            }}
          >
            <CloseIcon sx={{ fontSize: 15 }} />
          </IconButton>
        </Box>

        {/* Investor Type */}

        <InvestorType
          category={category}
          options={subscriptionHeader}
          onChange={setCategory}
        />

        {/* BIDS */}

        <BidSection
          bids={bids}
          lotSize={lotSize}
          maxLots={effectiveMaxLots}
          minLots={minLots}
          priceMin={priceMin}
          priceMax={priceMax}
          onUpdate={updateBid}
          onAddBid={addBid}
          onRemoveBid={removeBid}
        />

        {/* UPI */}

        <UpiSection upiId={upiId} onChange={setUpiId} />

        {/* Message */}

        <Box
          sx={{
            mt: 2,
            minHeight: 32,
            borderRadius: 1.5,
            backgroundColor: "#eaf7ec",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 11,
            textAlign: "center",
            px: 1,
          }}
        >
          Retail can apply upto Rs 2 Lakh.
          <Box
            component="span"
            sx={{
              color: "#0066b3",
              fontWeight: 500,
              mx: 0.5,
            }}
          >
            Switch to HNI
          </Box>
          to buy upto Rs 5 lakh
        </Box>
      </Box>

      {/* Bottom */}

      <Box
        sx={{
          borderTop: "1px solid #e5e5e5",
          backgroundColor: "#f7f7f7",
          px: 2,
          py: 1,
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Box sx={{ width: 110 }}>
          <Typography sx={bottomLabel}>Equivalent Amt</Typography>

          <Typography sx={bottomValue}>
            ₹{equivalentAmount.toLocaleString("en-IN")}
          </Typography>
        </Box>

        <Box sx={{ width: 120 }}>
          <Typography sx={bottomLabel}>Max Amount</Typography>

          <Typography sx={bottomValue}>
            ₹{maxAmount.toLocaleString("en-IN")}
          </Typography>
        </Box>

        <Button
          variant="contained"
          onClick={handleApply}
          disabled={!clientDetails || bids.length === 0}
          sx={{
            flex: 1,
            height: 45,
            backgroundColor: "#0861a3",
            borderRadius: 1.5,
            textTransform: "none",
            fontSize: 14,
            boxShadow: "none",

            "&:hover": {
              backgroundColor: "#0861a3",
              boxShadow: "none",
            },
          }}
        >
          Apply
        </Button>
      </Box>
    </Box>
  );
};

const bottomLabel = {
  fontSize: 9,
  color: "#999",
};

const bottomValue = {
  fontSize: 13,
  color: "#555",
  mt: 0.3,
};

export default Apply;
