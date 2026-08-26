import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, CircularProgress, Typography } from "@mui/material";

import Header from "./Header";
import IpoOverview from "./IpoOverview";
import ImportantDates from "./ImportantDates";
import SharesOnOffer from "./SharesOnOffer";
import SubscriptionData from "./SubscriptionData";
import InformationOnIssue from "./InformationOnIssue";
import FinancialOverview from "./FinancialOverview";
// import IpoReports from "./IpoReports";
import { fetchIpoDetailApi } from "../../services/api";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const ipo = location.state?.ipo;

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getIpoDetails = async () => {
      if (!ipo?.ipo_id) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(false);

        const response = await fetchIpoDetailApi(ipo.ipo_id);

        setData(response?.body);
      } catch (error) {
        console.error("Failed to fetch IPO details:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getIpoDetails();
  }, [ipo?.ipo_id]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "300px",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography>Failed to load IPO details.</Typography>

        <Button onClick={() => navigate(-1)} sx={{ mt: 1 }}>
          Back
        </Button>
      </Box>
    );
  }

  if (!data) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography>No IPO data found.</Typography>

        <Button onClick={() => navigate(-1)} sx={{ mt: 1 }}>
          Back
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2 }}>
      <Button
        onClick={() => navigate(-1)}
        sx={{
          textTransform: "none",
          mb: 2,
        }}
      >
        Back
      </Button>

      <Box
        sx={{
          p: 1,
          backgroundColor: "#f5f5f5",
        }}
      >
        <Header data={data.company_headers} />

        <Box
          sx={{
            mt: 1,
            p: 1,
            backgroundColor: "#fff",
            borderRadius: 1,
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 1.5,
            }}
          >
            <IpoOverview data={data.company_ipo_overview} />

            <ImportantDates data={data.important_dates} />

            <SharesOnOffer data={data.shares_on_offer} />

            <SubscriptionData data={data.subscription_rate} />

            <InformationOnIssue data={data.information} />

            <FinancialOverview data={data.financials} />
          </Box>

          {/* <IpoReports /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
