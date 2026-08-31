import { Box, Button, Typography } from "@mui/material";

const AppliedMobile = ({ data, onCancel, onViewDetail }: any) => {
  return (
    <Box
      sx={{
        p: "14px 8px",
        backgroundColor: "#f5f5f5",
        minHeight: "100%",
      }}
    >
      {data?.map((item: any) => (
        <Box
          key={item.application_no}
          sx={{
            backgroundColor: "#fff",
            borderRadius: "9px",
            overflow: "hidden",
            mb: "16px",
          }}
        >
          {/* Company */}
          <Box
            sx={{
              p: "12px 14px 0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                pb: "10px",
                borderBottom: "1px solid #eeeeee",
              }}
            >
              <Box
                component="img"
                src={item.company_logo}
                alt={item.company_name}
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
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#353844",
                    lineHeight: "18px",
                  }}
                >
                  {item.company_name}
                </Typography>

                <Typography
                  sx={{
                    display: "inline-block",
                    mt: "2px",
                    px: "4px",
                    fontSize: "9px",
                    lineHeight: "13px",
                    color: "#3aaa55",
                    backgroundColor: "#eaf8ed",
                    borderRadius: "2px",
                  }}
                >
                  {item.status}
                </Typography>
              </Box>
            </Box>

            {/* First Row */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                py: "10px",
                borderBottom: "1px solid #eeeeee",
              }}
            >
              <MobileDetail
                label="Application No."
                value={item.application_no}
              />

              <MobileDetail
                label="Amount Invested"
                value={item.amount_invested}
                align="center"
              />

              <MobileDetail label="BID 1" value={item.bid_id} align="right" />
            </Box>

            {/* Transaction Date */}
            <MobileRow label="Transaction Date" value={item.transaction_date} />

            {/* Order Category */}
            <MobileRow label="Order Category" value={item.order_category} />

            {/* Mandate */}
            <MobileRow
              label="Mandate Payment Remark"
              value={item.mandate_payment_remark}
            />

            {/* UPI */}
            <MobileRow label="UPI Id" value={item.upi_id} />

            {/* Subscription */}
            <MobileRow
              label="Overall Subscription"
              value={item.overall_subscription}
              last
            />
          </Box>

          {/* Actions */}
          <Box
            sx={{
              backgroundColor: "#e5edf2",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              py: "7px",
            }}
          >
            <Button
              variant="outlined"
              size="small"
              onClick={() => onCancel(item)}
              sx={{
                height: "24px",
                px: "10px",
                textTransform: "none",
                fontSize: "10px",
                borderRadius: "6px",
                color: "#0066b3",
                borderColor: "#0066b3",
                backgroundColor: "#fff",
              }}
            >
              Cancel IPO
            </Button>

            <Button
              variant="contained"
              size="small"
              onClick={() => onViewDetail(item)}
              sx={{
                height: "24px",
                px: "10px",
                textTransform: "none",
                fontSize: "10px",
                borderRadius: "6px",
                backgroundColor: "#0066b3",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#0066b3",
                  boxShadow: "none",
                },
              }}
            >
              View Detail
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

const MobileDetail = ({ label, value, align = "left" }: any) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "9px",
          color: "#858585",
          lineHeight: "13px",
          textAlign: align,
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          mt: "3px",
          fontSize: "12px",
          color: "#353844",
          lineHeight: "17px",
          textAlign: align,
        }}
      >
        {value || "-"}
      </Typography>
    </Box>
  );
};

const MobileRow = ({ label, value, last = false }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: "7px",
        borderBottom: last ? "none" : "1px solid #f0f0f0",
      }}
    >
      <Typography
        sx={{
          fontSize: "9px",
          color: "#858585",
          lineHeight: "14px",
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          fontSize: "12px",
          color: "#353844",
          lineHeight: "17px",
          textAlign: "right",
        }}
      >
        {value || "-"}
      </Typography>
    </Box>
  );
};

export default AppliedMobile;
