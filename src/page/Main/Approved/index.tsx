import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import CustomTable from "../../../components/Table";
import { approvedColumns } from "../../../helper/columns";
import { useAuth } from "../../../context/AuthContext";
import { GetPendingIPOApprovalsApi } from "../../../services/api";
import CommonModal from "../../../components/Modal";

const Approved = () => {
  const { auth } = useAuth();

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [approval, setApproval] = useState<any>(null);

  const getApprovals = async () => {
    try {
      setLoading(true);

      const response = await GetPendingIPOApprovalsApi({
        Identifier: auth?.encryptedPan,
      });

      setData(response?.data || response?.body || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (auth) getApprovals();
  }, [auth]);

  const handleApproval = (row: any, value: "YES" | "NO") => {
    setApproval({ row, value });
    setOpen(true);
  };

  const handleConfirm = async () => {
    console.log("Confirmed:", approval);

    setOpen(false);

    await getApprovals();
  };

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
        columns={approvedColumns(handleApproval)}
        rows={data}
        // getRowId={(row: any) => row.rowID}
        getRowId={(row: any) =>
          `${row.rowID}-${row.symbol}-${row.clientCode}-${row.bidQty}-${row.bidPrice}`
        }
        loading={loading}
      />

      <CommonModal
        open={open}
        onClose={() => setOpen(false)}
        size="sm"
        type="confirmation"
        data={approval}
        onConfirm={handleConfirm}
      />
    </Box>
  );
};

export default Approved;
