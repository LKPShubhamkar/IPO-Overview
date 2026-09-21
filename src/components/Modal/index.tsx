import { Box, Modal } from "@mui/material";
import ApplyModal from "./Apply/index";
import Cancel from "./Cancelled/cancel";
import ViewDetails from "./Details";

const CommonModal = ({ open, onClose, type, size = "md", data }: any) => {
  const getWidth = () => {
    switch (size) {
      case "sm":
        return 400;
      case "md":
        return 600;
      case "lg":
        return 700;
      case "xl":
        return 1200;
      default:
        return 600;
    }
  };

  const renderContent = () => {
    switch (type) {
      case "apply":
        return <ApplyModal data={data} onClose={onClose} />;
      case "details":
        return <ViewDetails onClose={onClose} />;

      case "cancel":
        return (
          <Cancel
            onClose={onClose}
            onConfirm={() => {
              console.log("Cancel IPO confirmed");
              onClose();
            }}
          />
        );

      default:
        return null;
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: getWidth(),
          maxWidth: "90%",
          maxHeight: "85%",
          overflowY: "auto",
          bgcolor: "#fff",
          borderRadius: "8px",
          boxShadow: 24,
          p: 0,
        }}
      >
        {renderContent()}
      </Box>
    </Modal>
  );
};

export default CommonModal;
