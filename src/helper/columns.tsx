import { Box, Typography } from "@mui/material";

export const ongoingColumns = (navigate) => [
  {
    key: "company_name",
    label: "Company Name",
    width: "28%",
    render: (row: any) => (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Box
          component="img"
          src={row.company_logo}
          alt={row.company_name}
          sx={{
            width: "36px",
            height: "36px",
            objectFit: "contain",
            border: "1px solid #eeeeee",
            borderRadius: "4px",
          }}
        />

        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "18px",
              fontWeight: 500,
              color: "#353844",
              whiteSpace: "nowrap",
            }}
          >
            {row.company_name}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              mt: "3px",
            }}
          >
            <Typography
              sx={{
                fontSize: "10px",
                color: "#858585",
              }}
            >
              {row.exchange_flags}
            </Typography>

            <Typography
              sx={{
                fontSize: "10px",
                color: "#ff8a00",
                backgroundColor: "#fff3e5",
                px: "3px",
                borderRadius: "2px",
              }}
            >
              {row.is_sme ? "SME" : "MAINBOARD"}
            </Typography>

            <Typography
              sx={{
                fontSize: "10px",
                color: "#3aaa55",
                backgroundColor: "#eaf8ed",
                px: "3px",
                borderRadius: "2px",
              }}
            >
              {row.is_open_now ? "Open Now" : "Upcoming"}
            </Typography>
          </Box>
        </Box>
      </Box>
    ),
  },

  {
    key: "price_range",
    label: "Price Range",
    width: "14%",
    render: (row: any) => `${row.price_range_min} - ${row.price_range_max}`,
  },

  {
    key: "issue_size",
    label: "Issue Size",
    width: "11%",
    render: (row: any) =>
      row.issue_size ? `${(row.issue_size / 10000000).toFixed(2)} Cr` : "-",
  },

  {
    key: "lot_size",
    label: "Min Qty",
    width: "9%",
    render: (row: any) => row.lot_size || "-",
  },

  {
    key: "subscription_value",
    label: "Overall Subscription",
    width: "15%",
    render: (row: any) =>
      row.subscription_value != null ? `${row.subscription_value}x` : "-",
  },

  {
    key: "application_amount_min",
    label: "Min Bid",
    width: "14%",
    render: (row: any) =>
      row.application_amount_min
        ? row.application_amount_min.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
          })
        : "-",
  },
  {
    key: "action",
    label: "Action",
    width: "10%",
    render: (row: any) => (
      <Box
        component="button"
        sx={{
          border: "none",
          outline: "none",
          cursor: "pointer",
          backgroundColor: "#0066b3",
          color: "#fff",
          borderRadius: "8px",
          height: "25px",
          px: "12px",
          fontSize: "12px",
          fontWeight: 500,
          whiteSpace: "nowrap",
        }}
        onClick={() => {
          navigate("/details", {
            state: {
              ipo: row,
            },
          });
        }}
      >
        Apply Now
      </Box>
    ),
  },
];

const isPreApplyEligible = (openDate) => {
  if (!openDate) return false;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const ipoOpenDate = new Date(openDate);
  ipoOpenDate.setHours(0, 0, 0, 0);

  const diffInDays =
    (ipoOpenDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);

  return diffInDays >= 1 && diffInDays <= 2;
};
export const upcomingColumns = (navigate) => [
  {
    key: "company_name",
    label: "Company Name",
    width: "28%",
    render: (row: any) => (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Box
          component="img"
          src={row.company_logo}
          alt={row.company_name}
          sx={{
            width: "36px",
            height: "36px",
            objectFit: "contain",
            border: "1px solid #eeeeee",
            borderRadius: "4px",
          }}
        />

        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "18px",
              fontWeight: 500,
              color: "#353844",
              whiteSpace: "nowrap",
            }}
          >
            {row.company_name}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              mt: "3px",
            }}
          >
            <Typography
              sx={{
                fontSize: "10px",
                color: "#858585",
              }}
            >
              {row.exchange_flags}
            </Typography>

            <Typography
              sx={{
                fontSize: "10px",
                color: "#ff8a00",
                backgroundColor: "#fff3e5",
                px: "3px",
                borderRadius: "2px",
              }}
            >
              {row.is_sme ? "SME" : "MAINBOARD"}
            </Typography>

            <Typography
              sx={{
                fontSize: "10px",
                color: "#3aaa55",
                backgroundColor: "#eaf8ed",
                px: "3px",
                borderRadius: "2px",
              }}
            >
              {row.is_open_now ? "Open Now" : "Upcoming"}
            </Typography>
          </Box>
        </Box>
      </Box>
    ),
  },

  {
    key: "price_range",
    label: "Price Range",
    width: "14%",
    render: (row: any) => `${row.price_range_min} - ${row.price_range_max}`,
  },

  {
    key: "issue_size",
    label: "Issue Size",
    width: "11%",
    render: (row: any) => `${(row.issue_size / 10000000).toFixed(2)} Cr`,
  },

  {
    key: "lot_size",
    label: "Min Qty",
    width: "9%",
    render: (row: any) => row.lot_size || "-",
  },

  {
    key: "bid_start_date",
    label: "Starts From",
    width: "13%",
    render: (row: any) => row.bid_start_date || "-",
  },

  {
    key: "application_amount_min",
    label: "Min Bid",
    width: "14%",
    render: (row: any) =>
      row.application_amount_min
        ? row.application_amount_min.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
          })
        : "-",
  },

  {
    key: "action",
    label: "Action",
    width: "10%",
    render: (row: any) =>
      isPreApplyEligible(row.bid_start_date) ? (
        <Box
          component="button"
          sx={{
            border: "none",
            outline: "none",
            cursor: "pointer",
            backgroundColor: "#0066b3",
            color: "#fff",
            borderRadius: "8px",
            height: "25px",
            px: "12px",
            fontSize: "12px",
            fontWeight: 500,
            whiteSpace: "nowrap",
          }}
          onClick={() => {
            navigate("/details", {
              state: {
                ipo: row,
              },
            });
          }}
        >
          Pre-Apply
        </Box>
      ) : null,
  },
];

export const closedColumns = [
  {
    key: "company_name",
    label: "Company Name",
    width: "27%",
    render: (row: any) => (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Box
          component="img"
          src={row.company_logo}
          alt={row.company_name}
          sx={{
            width: "36px",
            height: "36px",
            objectFit: "contain",
            border: "1px solid #eeeeee",
            borderRadius: "4px",
            flexShrink: 0,
          }}
        />

        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "18px",
              fontWeight: 500,
              color: "#353844",
              whiteSpace: "nowrap",
            }}
          >
            {row.company_name}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              mt: "3px",
            }}
          >
            <Typography
              sx={{
                fontSize: "10px",
                color: "#858585",
              }}
            >
              {row.exchange_flags}
            </Typography>

            <Typography
              sx={{
                fontSize: "10px",
                color: "#ff8a00",
                backgroundColor: "#fff3e5",
                px: "3px",
                borderRadius: "2px",
              }}
            >
              {row.is_sme ? "SME" : "MAINBOARD"}
            </Typography>
          </Box>
        </Box>
      </Box>
    ),
  },

  {
    key: "issue_price",
    label: "Issue Price",
    width: "13%",
    //   render: () => "-",
  },

  {
    key: "issue_size",
    label: "Issue Size",
    width: "11%",
    render: (row: any) => `${(row.issue_size / 10000000).toFixed(2)} Cr`,
  },

  {
    key: "listing_open_price",
    label: "Listing Price",
    width: "11%",
    render: (row: any) => row.listing_open_price || "-",
  },

  {
    key: "listing_gainP",
    label: "Listing Day Gain",
    width: "14%",
    render: (row: any) => {
      if (row.listing_open_price == null || row.issue_price == null) {
        return "-";
      }

      const gain = row.listing_open_price - row.issue_price;

      return (
        <Typography
          sx={{
            fontSize: "14px",
            color: gain >= 0 ? "#28a745" : "#e53935",
          }}
        >
          {gain.toFixed(2)} ({row.listing_gainP}%)
        </Typography>
      );
    },
  },

  {
    key: "total_subscription",
    label: "Overall Subscription",
    width: "15%",
    render: (row: any) =>
      row.total_subscription != null ? `${row.total_subscription}x` : "-",
  },

  {
    key: "allotment",
    label: "Allotment",
    width: "12%",
    render: () => "-",
  },
];
