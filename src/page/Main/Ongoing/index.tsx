import { Box, useMediaQuery, useTheme } from "@mui/material";
import CustomTable from "../../../components/Table";
import { ongoingColumns } from "../../../helper/columns";
import { useNavigate } from "react-router-dom";
import IpoMobileCard from "../../../components/IpoMobileCard";

const Ongoing = ({ data }: any) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleAction = (item: any) => {
    navigate("/details", {
      state: {
        ipo: item,
      },
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: isMobile ? "#f5f5f5" : "#fff",
        minHeight: "80%",
        p: isMobile ? "16px" : "12px 14px",
        borderRadius: "4px",
      }}
    >
      {isMobile ? (
        data?.map((item: any) => (
          <IpoMobileCard
            key={item.ipo_id}
            item={item}
            onAction={handleAction}
            actionLabel="Apply Now"
            showAction={true}
            statusLabel={item.day || "Day 1"}
          />
        ))
      ) : (
        <CustomTable
          columns={ongoingColumns(navigate)}
          rows={data || []}
          getRowId={(row: any) => row.ipo_id}
        />
      )}
    </Box>
  );
};

export default Ongoing;
