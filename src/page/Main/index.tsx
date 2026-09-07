import { useEffect, useState } from "react";
import { Box, Paper } from "@mui/material";
import CustomTabs from "../../components/Tabs";
import Ongoing from "./Ongoing";
import Upcoming from "./Upcoming";
import Closed from "./Closed";
import { fetchIpoApi } from "../../services/api";
import Applied from "./Applied";

const MainLayout = () => {
  const [tab, setTab] = useState("ongoing");
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const getIpoData = async () => {
      const response = await fetchIpoApi();

      console.log(response?.body);

      setData(response?.body || {});
    };

    getIpoData();
  }, []);

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
  ];

  return (
    <Box
      sx={{
        p: 1,
        backgroundColor: "#f5f5f5",
      }}
    >
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
        }}
      >
        {tabs.find((item) => item.value === tab)?.page}
      </Box>
    </Box>
  );
};

export default MainLayout;
