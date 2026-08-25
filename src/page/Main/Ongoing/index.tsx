import { Box } from "@mui/material";
import CustomTable from "../../../components/Table";
import { ongoingColumns } from "../../../helper/columns";
import { useNavigate } from "react-router-dom";

const Ongoing = ({ data }: any) => {
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
        columns={ongoingColumns(navigate)}
        rows={data || []}
        getRowId={(row: any) => row.ipo_id}
      />
    </Box>
  );
};

export default Ongoing;
