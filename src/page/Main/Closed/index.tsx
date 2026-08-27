import { Box, useMediaQuery, useTheme } from "@mui/material";
import CustomTable from "../../../components/Table";
import { closedColumns } from "../../../helper/columns";
import IpoMobileCard from "../../../components/IpoMobileCard";
import { useNavigate } from "react-router-dom";

const Closed = ({ data }: any) => {
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

  if (isMobile) {
    return (
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          p: "16px 17px",
          minHeight: "100%",
        }}
      >
        {data?.map((item: any) => (
          <IpoMobileCard
            key={item.ipo_id}
            item={item}
            onAction={handleAction}
            showAction={false}
            statusLabel="Closed"
          />
        ))}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        mt: 1.5,
        backgroundColor: "#fff",
        minHeight: "80%",
        p: "12px 14px",
        borderRadius: "4px",
      }}
    >
      <CustomTable
        columns={closedColumns}
        rows={data || []}
        getRowId={(row: any) => row.ipo_id}
      />
    </Box>
  );
};

export default Closed;
