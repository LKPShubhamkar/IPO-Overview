import { useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import CommonModal from "../../../components/Modal";
import AppliedWeb from "./AppliedWeb";
import AppliedMobile from "./AppliedMobile";
import { myIPOApplicationsApi } from "../../../services/api";

const Applied = () => {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState<"cancel" | "details">("cancel");
  const [appliedData, setAppliedData] = useState<any[]>([]);
  const [selectedData, setSelectedData] = useState<any>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const ipoDetails = async () => {
      try {
        const payload = {
          panno: "ALAPD6986B",
        };

        const response = await myIPOApplicationsApi(payload);

        console.log("IPO Order Response:", response);

        const result = response ?? [];

        const formattedData = result.map((item: any) => ({
          ...item,

          transaction_date: item.createdDatetime
            ? new Date(item.createdDatetime).toLocaleString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })
            : "-",
        }));

        setAppliedData(formattedData);
      } catch (error) {
        console.error("Failed to fetch IPO applications:", error);
      }
    };

    ipoDetails();
  }, []);

  const handleCancel = (item: any) => {
    setSelectedData(item);
    setModalType("cancel");
    setOpen(true);
  };

  const handleViewDetail = (item: any) => {
    setSelectedData(item);
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
        size={modalType === "cancel" ? "sm" : "lg"}
        type={modalType}
        data={selectedData}
      />
    </>
  );
};

export default Applied;
