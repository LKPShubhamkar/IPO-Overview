import { Box } from "@mui/material";
import CustomTable from "../../../components/Table";
import { upcomingColumns } from "../../../helper/columns";
import { useNavigate } from "react-router-dom";

const Upcoming = ({ data }: any) => {
  const navigate = useNavigate();

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
        rows={data || []}
        getRowId={(row: any) => row.ipo_id}
      />
    </Box>
  );
};

export default Upcoming;
