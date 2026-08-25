import { Box } from "@mui/material";
import CustomTable from "../../../components/Table";
import { closedColumns } from "../../../helper/columns";

const Closed = ({ data }: any) => {
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
