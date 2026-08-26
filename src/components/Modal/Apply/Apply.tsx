import { useState } from "react";
import { Box, Button, IconButton, Tab, Tabs, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Apply = () => {
  const [tab, setTab] = useState("retail");
  const [lots, setLots] = useState(1);

  const lotSize = 50;
  const bidPrice = 294;
  const maxLots = 13;

  const equivalentAmount = lots * lotSize * bidPrice;

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      {/* Header */}
      <Box
        sx={{
          p: 2,
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ display: "flex", gap: 1.5 }}>
            <Box
              component="img"
              src="https://tl-media.trendlyne.com/profilepicture/3613900_profilepicture_be2ecb8d.jpg"
              sx={{
                width: 36,
                height: 36,
                objectFit: "contain",
              }}
            />

            <Box>
              <Typography
                sx={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#353844",
                }}
              >
                Capital Numbers Infotech Ltd
              </Typography>

              <Typography
                sx={{
                  display: "inline-block",
                  mt: 0.3,
                  px: 0.5,
                  fontSize: 9,
                  color: "#43a047",
                  backgroundColor: "#eaf7ec",
                  borderRadius: "2px",
                }}
              >
                Active
              </Typography>
            </Box>
          </Box>

          <IconButton
            size="small"
            sx={{
              border: "1px solid #555",
              width: 22,
              height: 22,
            }}
          >
            <CloseIcon sx={{ fontSize: 15 }} />
          </IconButton>
        </Box>

        <Tabs
          value={tab}
          onChange={(_, value) => setTab(value)}
          sx={{
            minHeight: 42,
            mt: 1,

            "& .MuiTabs-indicator": {
              height: 2,
            },
          }}
        >
          <Tab value="retail" label="Retail" disableRipple sx={tabStyle} />

          <Tab value="hni" label="HNI" disableRipple sx={tabStyle} />
        </Tabs>
      </Box>

      {/* Content */}
      <Box sx={{ p: 2 }}>
        {/* Bid */}
        <Box
          sx={{
            backgroundColor: "#e8f1f7",
            borderRadius: 2,
            p: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 500,
              mb: 2,
            }}
          >
            Bid 1
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1.5fr 0.7fr 1fr",
              gap: 2,
              mb: 0.7,
            }}
          >
            <Typography sx={labelStyle}>
              No. of Lots (1 Lot = 50 Shares)
            </Typography>

            <Typography sx={labelStyle}>Max. Lots: {maxLots}</Typography>

            <Typography sx={labelStyle}>Bid Price</Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2,
            }}
          >
            {/* Lots */}
            <Box
              sx={{
                height: 46,
                backgroundColor: "#fff",
                borderRadius: 1.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 1,
              }}
            >
              <IconButton
                size="small"
                onClick={() => setLots(Math.max(1, lots - 1))}
              >
                <RemoveIcon sx={{ fontSize: 18 }} />
              </IconButton>

              <Typography sx={{ fontSize: 16 }}>{lots}</Typography>

              <IconButton
                size="small"
                onClick={() => setLots(Math.min(maxLots, lots + 1))}
              >
                <AddIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </Box>

            {/* Price */}
            <Box
              sx={{
                height: 46,
                backgroundColor: "#fff",
                borderRadius: 1.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
              }}
            >
              {bidPrice}
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 1.5,
            }}
          >
            <Typography sx={labelStyle}>
              Price Range:{" "}
              <Box component="span" sx={{ color: "#414451" }}>
                279.00 - 294.00
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: 12,
                color: "#0066b3",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Add Bid 2
            </Typography>
          </Box>
        </Box>

        {/* UPI */}
        <Box
          sx={{
            mt: 2,
            border: "1px solid #e5e5e5",
            borderRadius: 2,
            p: 1.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              UPI ID
            </Typography>

            <Typography
              sx={{
                fontSize: 10,
                color: "#999",
                mt: 0.5,
              }}
            >
              UPI ID linked to your ICICI Bank XXX9807
            </Typography>
          </Box>

          <Box
            sx={{
              width: 270,
              height: 48,
              border: "1px solid #64b86b",
              borderRadius: 1.5,
              display: "flex",
              alignItems: "center",
              px: 1.5,
              fontSize: 13,
            }}
          >
            9870060690@icici
          </Box>
        </Box>

        {/* Message */}
        <Box
          sx={{
            mt: 2,
            height: 32,
            borderRadius: 1.5,
            backgroundColor: "#eaf7ec",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 11,
          }}
        >
          Retail can apply upto Rs 2 Lakh.
          <Box
            component="span"
            sx={{
              color: "#0066b3",
              fontWeight: 500,
              mx: 0.5,
            }}
          >
            Switch to HNI
          </Box>
          to buy upto Rs 5 lakh
        </Box>
      </Box>

      {/* Bottom */}
      <Box
        sx={{
          borderTop: "1px solid #e5e5e5",
          backgroundColor: "#f7f7f7",
          px: 2,
          py: 1.5,
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Box sx={{ width: 110 }}>
          <Typography sx={bottomLabel}>Equivalent Amt</Typography>

          <Typography sx={bottomValue}>
            {equivalentAmount.toLocaleString("en-IN")}
          </Typography>
        </Box>

        <Box sx={{ width: 120 }}>
          <Typography sx={bottomLabel}>Max Amount</Typography>

          <Typography sx={bottomValue}>2,00,000</Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            flex: 1,
            height: 48,
            backgroundColor: "#0861a3",
            borderRadius: 1.5,
            textTransform: "none",
            fontSize: 14,
            boxShadow: "none",

            "&:hover": {
              backgroundColor: "#0861a3",
              boxShadow: "none",
            },
          }}
        >
          Apply
        </Button>
      </Box>
    </Box>
  );
};

const tabStyle = {
  minWidth: 55,
  minHeight: 42,
  height: 42,
  p: 0,
  mr: 1,
  textTransform: "none",
  fontSize: 13,
  fontWeight: 500,
  color: "#999",

  "&.Mui-selected": {
    color: "#0066b3",
  },
};

const labelStyle = {
  fontSize: 10,
  color: "#858585",
};

const bottomLabel = {
  fontSize: 9,
  color: "#999",
};

const bottomValue = {
  fontSize: 13,
  color: "#555",
  mt: 0.3,
};

export default Apply;
