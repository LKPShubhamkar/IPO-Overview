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
      {data?.map((item: any) => {
        return (
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
              mb: "16px",
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
              {/* {item.company_logo ? (
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
              ) : (
                <Box
                  sx={{
                    width: "38px",
                    height: "38px",
                    border: "1px solid #eeeeee",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    color: "#858585",
                    backgroundColor: "#fafafa",
                  }}
                >
                  IPO
                </Box>
              )} */}

              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
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
              <Detail label="Application No." value={item.applicationNumber} />

              <Detail
                label="Amount Invested"
                value={
                  item.amount ? `₹${item.amount.toLocaleString("en-IN")}` : "-"
                }
              />

              <Detail label="Transaction Date" value={item.transaction_date} />

              <Detail label="Order Category" value={item.category} />

              <Detail
                label="Mandate Payment Remark"
                value={item.bseRemark || "-"}
              />

              <Detail label="UPI Id" value={item.upiid || "-"} />

              <Detail label="Client Name" value={item.clientName} />

              <Detail label="PAN" value={item.panNo} />
            </Box>

            {/* Bids */}
            <Box
              sx={{
                gridColumn: "1 / -1",
                mt: 0.5,
                pt: 1.5,
                borderTop: "1px solid #eeeeee",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "#353844",
                  }}
                >
                  Bids
                </Typography>

                <Typography
                  sx={{
                    fontSize: "11px",
                    color: "#858585",
                  }}
                >
                  {item.bidList?.length || 0}{" "}
                  {(item.bidList?.length || 0) === 1 ? "Bid" : "Bids"}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                  },
                  gap: 1.5,
                }}
              >
                {item.bidList?.map((bid: any, index: number) => (
                  <BidCard
                    key={index}
                    bidNumber={index + 1}
                    bidQty={bid.bidQty}
                    bidPrice={bid.bidPrice}
                    amount={bid.amount}
                  />
                ))}
              </Box>
            </Box>

            {/* Actions */}
            {item?.endDate &&
              new Date(item.endDate).setHours(0, 0, 0, 0) >=
                new Date().setHours(0, 0, 0, 0) && (
                <Box
                  sx={{
                    gridColumn: "1 / -1",
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
              )}
          </Box>
        );
      })}
    </Box>
  );
};

const BidCard = ({ bidNumber, bidQty, bidPrice, amount }: any) => {
  return (
    <Box
      sx={{
        border: "1px solid #e5e5e5",
        borderRadius: "7px",
        p: 1.2,
        backgroundColor: "#fafafa",
      }}
    >
      {/* Bid Header */}
      <Typography
        sx={{
          fontSize: "11px",
          fontWeight: 500,
          color: "#353844",
          mb: 1,
        }}
      >
        Bid {bidNumber}
      </Typography>

      {/* Bid Details */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 1,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "9px",
              color: "#858585",
              lineHeight: "13px",
            }}
          >
            Quantity
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              color: "#353844",
              mt: "2px",
            }}
          >
            {bidQty} Shares
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "9px",
              color: "#858585",
              lineHeight: "13px",
            }}
          >
            Price
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              color: "#353844",
              mt: "2px",
            }}
          >
            ₹{Number(bidPrice || 0).toLocaleString("en-IN")}
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "9px",
              color: "#858585",
              lineHeight: "13px",
            }}
          >
            Amount
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 500,
              color: "#353844",
              mt: "2px",
            }}
          >
            ₹{Number(amount || 0).toLocaleString("en-IN")}
          </Typography>
        </Box>
      </Box>
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
