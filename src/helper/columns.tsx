import { Box, Typography } from "@mui/material";

export const ongoingColumns = (navigate: any) => [
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
    key: "lower_limit",
    label: "Lower Limit",
    width: "12%",
    render: (row: any) =>
      row.lot_size && row.price_range_min
        ? `₹${(row.lot_size * row.price_range_min).toLocaleString("en-IN")}`
        : "-",
  },

  {
    key: "upper_limit",
    label: "Upper Limit",
    width: "12%",
    render: (row: any) =>
      row.lot_size && row.price_range_max
        ? `₹${(row.lot_size * row.price_range_max).toLocaleString("en-IN")}`
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

const isPreApplyEligible = (openDate: any) => {
  if (!openDate) return false;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const ipoOpenDate = new Date(openDate);
  ipoOpenDate.setHours(0, 0, 0, 0);

  const diffInDays =
    (ipoOpenDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);

  return diffInDays >= 1 && diffInDays <= 2;
};
export const upcomingColumns = (navigate: any) => [
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
          src={row.company_logo || null}
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
    key: "lower_limit",
    label: "Lower Limit",
    width: "12%",
    render: (row: any) =>
      row.lot_size && row.price_range_min
        ? `₹${(row.lot_size * row.price_range_min).toLocaleString("en-IN")}`
        : "-",
  },

  {
    key: "upper_limit",
    label: "Upper Limit",
    width: "12%",
    render: (row: any) =>
      row.lot_size && row.price_range_max
        ? `₹${(row.lot_size * row.price_range_max).toLocaleString("en-IN")}`
        : "-",
  },

  {
    key: "bid_start_date",
    label: "Starts From",
    width: "13%",
    render: (row: any) => row.bid_start_date || "-",
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

export const approvedColumns = (handleApproval: any) => [
  {
    key: "companyName",
    label: "Company Name",
    width: "25%",
    render: (row: any) => (
      <Box>
        <Typography
          sx={{
            fontSize: "14px",
            lineHeight: "18px",
            fontWeight: 500,
            color: "#353844",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "250px",
          }}
        >
          {row.companyName || "-"}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "7px",
            mt: "4px",
          }}
        >
          <Typography
            sx={{
              fontSize: "10px",
              color: "#858585",
            }}
          >
            {row.exchange || "-"}
          </Typography>

          <Typography
            sx={{
              fontSize: "10px",
              color: "#ff8a00",
              backgroundColor: "#fff3e5",
              px: "4px",
              py: "1px",
              borderRadius: "2px",
            }}
          >
            {row.ipoTypeName || "-"}
          </Typography>

          <Typography
            sx={{
              fontSize: "10px",
              color: "#858585",
              backgroundColor: "#f5f5f5",
              px: "4px",
              py: "1px",
              borderRadius: "2px",
            }}
          >
            {row.depository || "-"}
          </Typography>
        </Box>
      </Box>
    ),
  },

  {
    key: "category",
    label: "Category",
    width: "8%",
    render: (row: any) => row.category || "-",
  },

  {
    key: "boid",
    label: "BOID",
    width: "14%",
    render: (row: any) => (
      <Typography
        sx={{
          fontSize: "12px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
        title={row.boid}
      >
        {row.boid || "-"}
      </Typography>
    ),
  },

  {
    key: "upiid",
    label: "UPI ID",
    width: "17%",
    render: (row: any) => (
      <Typography
        sx={{
          fontSize: "12px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "180px",
        }}
        title={row.upiid}
      >
        {row.upiid || "-"}
      </Typography>
    ),
  },

  {
    key: "bidQty",
    label: "Bid Qty",
    width: "8%",
    render: (row: any) => row.bidQty || "-",
  },

  {
    key: "bidPrice",
    label: "Bid Price",
    width: "9%",
    render: (row: any) =>
      row.bidPrice != null ? row.bidPrice.toLocaleString("en-IN") : "-",
  },

  {
    key: "amount",
    label: "Amount",
    width: "10%",
    render: (row: any) =>
      row.amount != null
        ? row.amount.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
          })
        : "-",
  },

  {
    key: "applicationNumber",
    label: "App No",
    width: "9%",
    render: (row: any) => row.applicationNumber || "-",
  },

  {
    key: "action",
    label: "Action",
    width: "12%",
    render: (row: any) => (
      <Box sx={{ display: "flex", gap: "6px" }}>
        <Box
          component="button"
          sx={{
            border: "none",
            cursor: "pointer",
            backgroundColor: "#3aaa55",
            color: "#fff",
            borderRadius: "6px",
            height: "28px",
            px: "11px",
            fontSize: "12px",
            fontWeight: 500,
          }}
          onClick={() => handleApproval(row, "YES")}
        >
          Yes
        </Box>

        <Box
          component="button"
          sx={{
            border: "1px solid #dc3545",
            cursor: "pointer",
            backgroundColor: "#fff",
            color: "#dc3545",
            borderRadius: "6px",
            height: "28px",
            px: "11px",
            fontSize: "12px",
            fontWeight: 500,
          }}
          onClick={() => handleApproval(row, "NO")}
        >
          No
        </Box>
      </Box>
    ),
  },
];
