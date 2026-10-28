import { Box, Button, Typography } from "@mui/material";
import { IpoClientDetailsApi, PlaceIpoOrderApi } from "../../../services/api";
import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";

const Cancel = ({ onClose, data, onConfirm }: any) => {
  const [clientDetails, setClientDetails] = useState<any>(null);
  const { auth } = useAuth();

  useEffect(() => {
    const getIpoData = async () => {
      try {
        const payload = {
          panno: auth.encryptedPan,
        };
        const response = await IpoClientDetailsApi(payload);

        console.log(response, "response modal");

        setClientDetails(response?.data ?? response?.body);
      } catch (error) {
        console.error("Failed to fetch client details:", error);
      }
    };

    getIpoData();
  }, [auth.encryptedPan]);

  const handleCancel = async () => {
    console.log(data, "cmpare");

    try {
      const payload = {
        scripId: data?.symbol ?? "",
        applicationNo: String(data?.applicationNumber ?? ""),
        category: data?.category ?? "IND",
        applicantName: clientDetails?.clientName ?? "",
        depository: data?.depository,
        dpid: "0",
        clientBenfId: clientDetails?.boId ?? "",
        chequeReceivedFlag: "Y",
        chequeAmount: Number(data?.amount ?? 0).toFixed(2),
        panNo: data?.panNo ?? "",
        bankName: ".",
        location: ".",
        accountNumberUPIID: data?.upiid ?? "",
        ifscCode: "",
        referenceNo: "",
        asbaupiid: "1",
        exchange: "BSE", //Change this to "NSE" if needed
        repatriationType: null,
        clientCode: clientDetails?.clientCode ?? null,
        dpcode: "",
        iposbCode: null,
        refID: 0,
        batch: 0,

        bids: (data?.bidList ?? []).map((bid: any) => ({
          bidId: String(bid?.bidID ?? ""),
          quantity: String(bid?.bidQty ?? 0),
          rate: String(bid?.bidPrice ?? 0),
          cutoffFlag: "0",
          orderNo: String(bid?.orderNo ?? ""),
          actionCode: "D",
        })),
      };

      console.log("IPO Cancellation Payload:", payload);

      const response = await PlaceIpoOrderApi(payload);

      if (response) {
        console.log("IPO cancellation successful:", response);
        onConfirm();
        onClose();
      }
    } catch (error) {
      console.error("IPO cancellation failed:", error);
    }
  };
  return (
    <Box
      sx={{
        width: "100%",
        // maxWidth: "370px",
        bgcolor: "#fff",
        borderRadius: "10px",
        p: 2,
      }}
    >
      {/* Company */}
      {/* <Box
        sx={{
          border: "1px solid #e5e5e5",
          borderRadius: "9px",
          p: 1.5,
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <Box
          component="img"
          src="https://pascal-media.trendlyne.com/profilepicture/3625755_profilepicture_3fd645a5.jpg"
          alt="Capital Numbers Infotech"
          sx={{
            width: 36,
            height: 36,
            objectFit: "contain",
          }}
        />

        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#353844",
            }}
          >
            Capital Numbers Infotech
          </Typography>

          <Box sx={{ display: "flex", gap: 1, mt: 0.5 }}>
            <Typography
              sx={{
                fontSize: "11px",
                color: "#858585",
              }}
            >
              BSE
            </Typography>

            <Typography
              sx={{
                fontSize: "10px",
                color: "#ff8a00",
                bgcolor: "#fff3e5",
                px: "4px",
                borderRadius: "2px",
              }}
            >
              SME
            </Typography>
          </Box>
        </Box>
      </Box> */}

      {/* Cancel Icon */}
      <Box
        sx={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          bgcolor: "#fff0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mx: "auto",
          mt: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "52px",
            fontWeight: 600,
            color: "#e65353",
            lineHeight: 1,
          }}
        >
          ×
        </Typography>
      </Box>

      {/* Message */}
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "15px",
          fontWeight: 500,
          color: "#353844",
          mt: 2,
          mb: 3,
          lineHeight: 1.5,
        }}
      >
        Are you sure you want to
        <br />
        cancel the order?
      </Typography>

      {/* Actions */}
      <Box
        sx={{
          display: "flex",
          gap: 1.5,
        }}
      >
        <Button
          fullWidth
          onClick={onClose}
          sx={{
            height: 38,
            textTransform: "none",
            borderRadius: "8px",
            bgcolor: "#f1f1f1",
            color: "#858585",
            fontSize: "14px",
            "&:hover": {
              bgcolor: "#e8e8e8",
            },
          }}
        >
          Cancel
        </Button>

        <Button
          fullWidth
          onClick={handleCancel}
          sx={{
            height: 38,
            textTransform: "none",
            borderRadius: "8px",
            bgcolor: "#0066b3",
            color: "#fff",
            fontSize: "14px",
            "&:hover": {
              bgcolor: "#005a9e",
            },
          }}
        >
          Confirm
        </Button>
      </Box>
    </Box>
  );
};

export default Cancel;
