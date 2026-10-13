import { Box } from "@mui/material";

import Bidbox from "./Bidbox";

const BidSection = ({
  bids,
  lotSize,
  maxLots,
  minLots,
  priceMin,
  priceMax,
  onUpdate,
  onAddBid,
  onRemoveBid,
  category,
}: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        mt: 2,
      }}
    >
      {bids.map((bid: any, index: number) => (
        <Bidbox
          key={index}
          bidNumber={index + 1}
          lotSize={lotSize}
          maxLots={maxLots}
          minLots={minLots}
          lots={bid.lots}
          bidPrice={bid.bidPrice}
          priceMin={priceMin}
          priceMax={priceMax}
          category={category}
          onLotsChange={(value: number) => onUpdate(index, "lots", value)}
          onPriceChange={(value: number) => onUpdate(index, "bidPrice", value)}
          onRemove={() => onRemoveBid(index)}
          onAddBid={onAddBid}
          canAddBid={bids.length < 3}
        />
      ))}
    </Box>
  );
};

export default BidSection;
