import { Box, Button, Typography } from "@mui/material";

const IpoMobileCard = ({
  item,
  onAction,
  actionLabel = "Apply Now",
  statusLabel,
  showAction = true,
}: any) => {
  const issueSize = item.issue_size
    ? `${(item.issue_size / 10000000).toFixed(2)} Cr`
    : "-";

  const subscription =
    item.subscription_value != null ? `${item.subscription_value}X` : "-";

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "10px",
        overflow: "hidden",
        mb: "16px",
      }}
    >
      {/* Top Section */}
      <Box sx={{ p: "14px 16px 0" }}>
        {/* Issue Size + Status */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: "#858585",
            }}
          >
            Issue Size:{" "}
            <Box
              component="span"
              sx={{
                color: "#414451",
              }}
            >
              {issueSize}
            </Box>
          </Typography>

          {statusLabel && (
            <Typography
              sx={{
                fontSize: "10px",
                color: "#3aaa55",
                backgroundColor: "#eaf8ed",
                px: "4px",
                py: "2px",
                borderRadius: "2px",
              }}
            >
              {statusLabel}
            </Typography>
          )}
        </Box>

        {/* Company */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            mt: "12px",
          }}
        >
          <Box
            component="img"
            src={item.company_logo}
            alt={item.company_name}
            sx={{
              width: "38px",
              height: "38px",
              objectFit: "contain",
              border: "1px solid #eeeeee",
              borderRadius: "4px",
            }}
          />

          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#353844",
              }}
            >
              {item.company_name}
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
                {item.exchange_flags}
              </Typography>

              <Typography
                sx={{
                  fontSize: "10px",
                  color: "#ff8a00",
                  backgroundColor: "#fff3e5",
                  px: "4px",
                  borderRadius: "2px",
                }}
              >
                {item.is_sme ? "SME" : "MAINBOARD"}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Price / Qty / Min Bid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr 1fr",
            mt: "16px",
            pb: "14px",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "10px", color: "#858585" }}>
              Price Range
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                color: "#414451",
                mt: "5px",
              }}
            >
              {item.price_range_min} - {item.price_range_max}
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ fontSize: "10px", color: "#858585" }}>
              Min Qty
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                color: "#414451",
                mt: "5px",
              }}
            >
              {item.lot_size || "-"}
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "10px",
                color: "#858585",
                textAlign: "right",
              }}
            >
              Min. Bid Amount
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                color: "#414451",
                mt: "5px",
                textAlign: "right",
              }}
            >
              {item.application_amount_min
                ? item.application_amount_min.toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                  })
                : "-"}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Bottom Section */}
      <Box
        sx={{
          backgroundColor: "#e5f0f7",
          px: "16px",
          py: "8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            color: "#858585",
          }}
        >
          {statusLabel === "Upcoming"
            ? "Starts From: "
            : "Overall Subscription: "}

          <Box
            component="span"
            sx={{
              color: statusLabel === "Upcoming" ? "#414451" : "#3aaa55",
            }}
          >
            {statusLabel === "Upcoming"
              ? item.bid_start_date || "-"
              : subscription}
          </Box>
        </Typography>

        {showAction && (
          <Button
            onClick={() => onAction(item)}
            variant="contained"
            sx={{
              height: "27px",
              px: "12px",
              minWidth: "76px",
              textTransform: "none",
              fontSize: "11px",
              borderRadius: "7px",
              backgroundColor: "#0066b3",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#0066b3",
                boxShadow: "none",
              },
            }}
          >
            {actionLabel}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default IpoMobileCard;
