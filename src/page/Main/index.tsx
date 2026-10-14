import { useEffect, useState } from "react";
import { Box, Paper, CircularProgress } from "@mui/material";
import CustomTabs from "../../components/Tabs";
import Ongoing from "./Ongoing";
import Upcoming from "./Upcoming";
import Closed from "./Closed";
import { fetchIpoApi, GetPendingIPOApprovalsApi } from "../../services/api";
import Applied from "./Applied";
import { useAuth } from "../../context/AuthContext";
import Approved from "./Approved";

const MainLayout = () => {
  const { auth } = useAuth();
  const isSSO = auth?.loginType === "SSO";

  const [tab, setTab] = useState("ongoing");
  const [data, setData] = useState<any>({});
  const [hasApprovedData, setHasApprovedData] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getIpoData = async () => {
      try {
        const response = await fetchIpoApi();
        setData(response?.body || {});
      } catch (error) {
        console.error("Failed to fetch IPO data:", error);
      }
    };

    getIpoData();
  }, []);

  useEffect(() => {
    if (!isSSO) {
      setTab("ongoing");
      setLoading(false);
      return;
    }

    const getPendingApprovals = async () => {
      setLoading(true);
      try {
        const response = await GetPendingIPOApprovalsApi({
          Identifier: auth?.encryptedPan,
        });

        const pendingData = response?.data || response?.body || [];

        const hasData = pendingData.length > 0;

        setHasApprovedData(hasData);
        setTab(hasData ? "approved" : "ongoing");
      } catch (error) {
        console.error("Failed to fetch pending approvals:", error);
        setTab("ongoing");
      } finally {
        setLoading(false);
      }
    };

    getPendingApprovals();
  }, [isSSO, auth?.encryptedPan]);

  const ongoingData = data?.upcoming_open?.filter(
    (item: any) => item.is_open_now === true,
  );

  const upcomingData = data?.upcoming_open?.filter(
    (item: any) => item.is_open_now === false,
  );

  const tabs = [
    {
      value: "ongoing",
      label: "Ongoing",
      page: <Ongoing data={ongoingData || []} />,
    },
    {
      value: "upcoming",
      label: "Upcoming",
      page: <Upcoming data={upcomingData || []} />,
    },
    {
      value: "closed",
      label: "Closed",
      page: <Closed data={data?.recently_listed || []} />,
    },
    {
      value: "applied",
      label: "Applied",
      page: <Applied />,
    },

    ...(isSSO && hasApprovedData
      ? [
          {
            value: "approved",
            label: "Approved",
            page: <Approved />,
          },
        ]
      : []),
  ];

  return (
    <Box sx={{ p: 1, backgroundColor: "#f5f5f5" }}>
      <Paper
        elevation={0}
        sx={{
          borderRadius: 1,
          backgroundColor: "#fff",
          px: 1,
        }}
      >
        <CustomTabs
          tabs={tabs}
          value={tab}
          onChange={(_, newValue) => setTab(newValue)}
        />
      </Paper>

      <Box
        sx={{
          mt: 1.5,
          backgroundColor: "#fff",
          minHeight: "80%",
          // display: "flex",
          // justifyContent: "center",
        }}
      >
        {loading ? (
          <CircularProgress sx={{ mt: 5, color: "#0066b3" }} />
        ) : (
          tabs.find((item) => item.value === tab)?.page
        )}
      </Box>
    </Box>
  );
};

export default MainLayout;
