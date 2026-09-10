import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";

const Bidbox = ({
  bidNumber,
  lotSize,
  maxLots,
  minLots,
  maxAmount,
  lots,
  bidPrice,
  priceMin,
  priceMax,
  onLotsChange,
  onPriceChange,
  onRemove,
  onAddBid,
  canAddBid,
}: any) => {
  return (
    <Box
      sx={{
        backgroundColor: "#e8f1f7",
        borderRadius: 2,
        p: 1.5,
      }}
    >
      {/* Header */}
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
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          Bid {bidNumber}
        </Typography>

        {bidNumber > 1 && (
          <IconButton
            size="small"
            onClick={onRemove}
            sx={{
              width: 22,
              height: 22,
              border: "1px solid #858585",
              borderRadius: "50%",
            }}
          >
            <CloseIcon sx={{ fontSize: 14 }} />
          </IconButton>
        )}
      </Box>

      {/* Labels */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1.5fr 0.7fr 1fr",
          },
          gap: 1,
          mb: 0.7,
        }}
      >
        <Typography sx={labelStyle}>
          No. of Lots (1 Lot = {lotSize} Shares)
        </Typography>

        <Typography sx={labelStyle}>Max. Lots: {maxLots}</Typography>

        <Typography sx={labelStyle}>Bid Price</Typography>
      </Box>

      {/* Inputs */}
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
            height: 40,
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
            disabled={lots <= minLots}
            onClick={() => onLotsChange(Math.max(minLots, lots - 1))}
          >
            <RemoveIcon sx={{ fontSize: 18 }} />
          </IconButton>

          <Typography sx={{ fontSize: 16 }}>{lots}</Typography>

          <IconButton
            size="small"
            disabled={lots >= maxLots}
            onClick={() => onLotsChange(Math.min(maxLots, lots + 1))}
          >
            <AddIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Box>

        {/* Bid Price */}
        <Box
          component="input"
          type="number"
          value={bidPrice}
          min={priceMin}
          max={priceMax}
          onChange={(e: any) => {
            const value = Number(e.target.value);

            if (value >= priceMin && value <= priceMax) {
              onPriceChange(value);
            }
          }}
          sx={{
            height: 40,
            width: "100%",
            backgroundColor: "#fff",
            border: "none",
            borderRadius: 1.5,
            outline: "none",
            px: 2,
            fontSize: 16,
            textAlign: "center",
            boxSizing: "border-box",

            "&::-webkit-inner-spin-button": {
              opacity: 1,
            },
          }}
        />
      </Box>

      {/* Bottom */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 1.5,
        }}
      >
        <Typography sx={labelStyle}>
          Price Range:{" "}
          <Box
            component="span"
            sx={{
              color: "#414451",
            }}
          >
            ₹{priceMin.toFixed(2)} - ₹{priceMax.toFixed(2)}
          </Box>
        </Typography>

        {canAddBid && (
          <Typography
            onClick={onAddBid}
            sx={{
              fontSize: 12,
              color: "#0066b3",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Add Bid
          </Typography>
        )}
      </Box>
    </Box>
  );
};

const labelStyle = {
  fontSize: 10,
  color: "#858585",
};

export default Bidbox;
