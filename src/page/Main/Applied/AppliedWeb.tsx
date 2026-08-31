import { Box, Button, Typography } from "@mui/material";

const AppliedWeb = ({ data, onCancel, onViewDetail }: any) => {
  return (
    <Box
      sx={{
        p: 1.5,
        backgroundColor: "#f5f5f5",
        minHeight: "100%",
      }}
    >
      {data?.map((item: any) => (
        <Box
          key={item.application_no}
          sx={{
            backgroundColor: "#fff",
            border: "1px solid #e4e4e4",
            borderRadius: "9px",
            p: 1.5,
            display: "grid",
            gridTemplateColumns: "320px 1fr",
            columnGap: "14px",
            rowGap: "12px",
          }}
        >
          {/* Company */}
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
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
                  lineHeight: "18px",
                }}
              >
                {item.company_name}
              </Typography>

              <Typography
                sx={{
                  display: "inline-block",
                  mt: "3px",
                  px: "4px",
                  fontSize: "9px",
                  lineHeight: "14px",
                  color: "#3aaa55",
                  backgroundColor: "#eaf8ed",
                  borderRadius: "2px",
                }}
              >
                {item.status}
              </Typography>
            </Box>
          </Box>

          {/* Details */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              columnGap: "20px",
              rowGap: "12px",
            }}
          >
            <Detail label="Application No." value={item.application_no} />

            <Detail label="Amount Invested" value={item.amount_invested} />

            <Detail label="BID 1" value={item.bid_id} />

            <Detail label="Transaction Date" value={item.transaction_date} />

            <Detail label="Order Category" value={item.order_category} />

            <Detail
              label="Mandate Payment Remark"
              value={item.mandate_payment_remark}
            />

            <Detail label="UPI Id" value={item.upi_id} />

            <Detail
              label="Overall Subscription"
              value={item.overall_subscription}
            />

            {/* Actions */}
            <Box
              sx={{
                gridColumn: "1 / 3",
                display: "flex",
                gap: "12px",
                mt: "2px",
              }}
            >
              <Button
                variant="outlined"
                size="small"
                onClick={() => onCancel(item)}
                sx={{
                  height: "25px",
                  px: "10px",
                  textTransform: "none",
                  fontSize: "11px",
                  borderRadius: "6px",
                  color: "#0066b3",
                  borderColor: "#0066b3",
                }}
              >
                Cancel IPO
              </Button>

              <Button
                variant="contained"
                size="small"
                onClick={() => onViewDetail(item)}
                sx={{
                  height: "25px",
                  px: "10px",
                  textTransform: "none",
                  fontSize: "11px",
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
        </Box>
      ))}
    </Box>
  );
};

const Detail = ({ label, value }: any) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "10px",
          color: "#858585",
          lineHeight: "14px",
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          mt: "3px",
          fontSize: "13px",
          color: "#353844",
          lineHeight: "18px",
        }}
      >
        {value || "-"}
      </Typography>
    </Box>
  );
};

export default AppliedWeb;
