import { Box, Button, IconButton, Typography } from "@mui/material";
import { CancelApplicationApi, PlaceIpoOrderApi } from "../../../services/api";

const Confirmation = ({ data, onClose, onConfirm }: any) => {
  const isYes = data?.value === "YES";
  const row = data?.row;

  const handleConfirm = async () => {
    try {
      if (!isYes) {
        const payload = {
          symbol: row?.symbol ?? "",
          identifier: row?.encryptedClientCode ?? "",
          actionCode: "Cancel",
        };

        const response = await CancelApplicationApi(payload);
        console.log(response);

        if (response) {
          onConfirm();
          onClose();
        }

        return;
      }

      const payload = {
        scripId: row?.symbol ?? "",
        applicationNo: row?.applicationNumber ?? "",
        category: row?.category ?? "",
        applicantName: row?.clientName ?? "",
        depository: row?.depository ?? "",
        dpid: row?.dpid ?? "",
        clientBenfId: row?.clientBenfId ?? "",
        chequeReceivedFlag: "Y",
        chequeAmount: row?.amount?.toFixed(2) ?? "0.00",
        panNo: row?.panNo ?? "",
        bankName: row?.bankName ?? "",
        location: row?.location ?? "",
        accountNumberUPIID: row?.upiid ?? "",
        ifscCode: row?.ifscCode ?? "",
        referenceNo: row?.referenceNo ?? "",
        asbaupiid: row?.asbaupiid ?? "",
        exchange: row?.exchange ?? "",
        repatriationType: row?.repatriationType ?? null,
        clientCode: row?.clientCode ?? null,
        dpcode: "",
        iposbCode: row?.iposbCode ?? null,
        refID: row?.refID ?? 0,
        batch: row?.batch ?? 0,
        bids: [
          {
            bidId: "",
            quantity: row?.bidQty?.toString() ?? "0",
            rate: row?.bidPrice?.toString() ?? "0",
            cutoffFlag: "0",
            orderNo: "",
            actionCode: "N",
          },
        ],
      };

      const response = await PlaceIpoOrderApi(payload);

      if (response) {
        onConfirm();
        onClose();
      }
    } catch (error) {
      console.error("Approval action failed:", error);
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
          {isYes ? "Confirm Approval" : "Reject IPO"}
        </Typography>

        <IconButton
          size="small"
          onClick={onClose}
          sx={{
            border: "1px solid #555",
            width: 22,
            height: 22,
          }}
        >
          X
        </IconButton>
      </Box>

      <Typography sx={{ mt: 2, fontSize: "14px", color: "#555" }}>
        {isYes
          ? `Are you sure you want to approve the IPO application for ${row?.companyName?.toLowerCase()}?`
          : `Are you sure you want to reject the IPO application for ${row?.companyName?.toLowerCase()}?`}
      </Typography>

      <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end", gap: 1 }}>
        <Button
          variant="outlined"
          onClick={onClose}
          sx={{ textTransform: "none" }}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleConfirm}
          sx={{
            textTransform: "none",
            backgroundColor: isYes ? "#3aaa55" : "#dc3545",
          }}
        >
          {isYes ? "Yes, Approve" : "Yes, Reject"}
        </Button>
      </Box>
    </Box>
  );
};

export default Confirmation;
