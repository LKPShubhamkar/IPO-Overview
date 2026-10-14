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
          key={item.applicationNumber}
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
              <Box>
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#353844",
                    lineHeight: "18px",
                  }}
                >
                  {item.symbol}
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
                  Applied
                </Typography>
              </Box>
            </Box>

            {/* First Row */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                py: "10px",
                borderBottom: "1px solid #eeeeee",
              }}
            >
              <MobileDetail
                label="Application No."
                value={item.applicationNumber}
              />

              <MobileDetail
                label="Amount Invested"
                value={
                  item.amount ? `₹${item.amount.toLocaleString("en-IN")}` : "-"
                }
                align="right"
              />
            </Box>

            {/* Bids */}
            <Box
              sx={{
                py: "10px",
                borderBottom: "1px solid #eeeeee",
              }}
            >
              <Typography
                sx={{
                  fontSize: "9px",
                  color: "#858585",
                  lineHeight: "13px",
                  mb: "7px",
                }}
              >
                Bids
              </Typography>

              {item.bidList?.map((bid: any, index: number) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: "6px",
                    px: "8px",
                    mb: index !== item.bidList.length - 1 ? "5px" : 0,
                    backgroundColor: "#f7f9fa",
                    borderRadius: "5px",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "10px",
                        fontWeight: 500,
                        color: "#353844",
                      }}
                    >
                      BID {index + 1}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "10px",
                        color: "#858585",
                        mt: "2px",
                      }}
                    >
                      {bid.bidQty} Qty × ₹{bid.bidPrice}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "11px",
                      fontWeight: 500,
                      color: "#353844",
                    }}
                  >
                    ₹{Number(bid.amount || 0).toLocaleString("en-IN")}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Transaction Date */}
            <MobileRow label="Transaction Date" value={item.transaction_date} />

            {/* Order Category */}
            <MobileRow label="Order Category" value={item.category} />

            {/* Mandate */}
            <MobileRow label="Mandate Payment Remark" value={item.bseRemark} />

            {/* UPI */}
            <MobileRow label="UPI Id" value={item.upiid} />

            {/* Client Name */}
            <MobileRow label="Client Name" value={item.clientName} />

            {/* PAN */}
            <MobileRow label="PAN" value={item.panNo} last />
          </Box>

          {/* Actions */}
          {item?.endDate &&
            new Date(item.endDate).setHours(0, 0, 0, 0) >=
              new Date().setHours(0, 0, 0, 0) && (
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
            )}
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
