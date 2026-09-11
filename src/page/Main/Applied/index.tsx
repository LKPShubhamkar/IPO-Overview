import { useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import CommonModal from "../../../components/Modal";
import AppliedWeb from "./AppliedWeb";
import AppliedMobile from "./AppliedMobile";

const appliedData = [
  {
    company_name: "Capital Numbers Infotech Ltd",
    company_logo:
      "https://pascal-media.trendlyne.com/profilepicture/3625755_profilepicture_3fd645a5.jpg",
    status: "Applied",
    application_no: "52002780",
    amount_invested: "1,05,200",
    bid_id: "400 shares",
    transaction_date: "21 Jan 2025 | 10:25 pm",
    order_category: "Retail",
    mandate_payment_remark: "-",
    upi_id: "9920969697@upi",
    overall_subscription: "8.6x",
    ipo_id: 2239,
  },
];

const Applied = () => {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState<"cancel" | "details">("cancel");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleCancel = () => {
    setModalType("cancel");
    setOpen(true);
  };

  const handleViewDetail = () => {
    setModalType("details");
    setOpen(true);
  };

  return (
    <>
      {isMobile ? (
        <AppliedMobile
          data={appliedData}
          onCancel={handleCancel}
          onViewDetail={handleViewDetail}
        />
      ) : (
        <AppliedWeb
          data={appliedData}
          onCancel={handleCancel}
          onViewDetail={handleViewDetail}
        />
      )}

      <CommonModal
        open={open}
        onClose={() => setOpen(false)}
        size={modalType === "cancel" ? "sm" : "md"}
        type={modalType}
      />
    </>
  );
};

export default Applied;
