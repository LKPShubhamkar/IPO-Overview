import { Box, useMediaQuery, useTheme } from "@mui/material";
import CustomTable from "../../../components/Table";
import { upcomingColumns } from "../../../helper/columns";
import { useNavigate } from "react-router-dom";
import IpoMobileCard from "../../../components/IpoMobileCard";

const Upcoming = ({ data }: any) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const filteredData = data?.filter((item: any) =>
    item.exchange_flags?.includes("BSE"),
  );

  const handleAction = (item: any) => {
    navigate("/details", {
      state: {
        ipo: item,
      },
    });
  };

  const isPreApplyEligible = (openDate: string) => {
    if (!openDate) return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const ipoOpenDate = new Date(openDate);
    ipoOpenDate.setHours(0, 0, 0, 0);

    const diffInDays =
      (ipoOpenDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);

    return diffInDays >= 1 && diffInDays <= 2;
  };

  if (isMobile) {
    return (
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          p: "16px 17px",
          minHeight: "100%",
        }}
      >
        {filteredData?.map((item: any) => {
          const preApplyEligible = isPreApplyEligible(item.bid_start_date);

          return (
            <IpoMobileCard
              key={item.ipo_id}
              item={item}
              onAction={handleAction}
              actionLabel="Pre-Apply"
              showAction={preApplyEligible}
              statusLabel="Upcoming"
            />
          );
        })}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        minHeight: "80%",
        p: "12px 14px",
        borderRadius: "4px",
      }}
    >
      <CustomTable
        columns={upcomingColumns(navigate)}
        rows={filteredData || []}
        getRowId={(row: any) => row.ipo_id}
      />
    </Box>
  );
};

export default Upcoming;
