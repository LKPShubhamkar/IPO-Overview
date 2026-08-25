import { Box, Modal } from "@mui/material";
import ApplyModal from "./Apply/Apply";

const CommonModal = ({ open, onClose, type, size = "md" }) => {
  const getWidth = () => {
    switch (size) {
      case "sm":
        return 400;
      case "md":
        return 600;
      case "lg":
        return 900;
      case "xl":
        return 1200;
      default:
        return 600;
    }
  };

  const renderContent = () => {
    switch (type) {
      case "apply":
        return <ApplyModal />;

      case "details":
        return <div>Details Content</div>;

      case "success":
        return <div>Success Content</div>;

      case "confirm":
        return <div>Confirm Content</div>;

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
          maxHeight: "50vh",
          overflowY: "auto",
          bgcolor: "#fff",
          borderRadius: "8px",
          boxShadow: 24,
          p: 3,
        }}
      >
        {renderContent()}
      </Box>
    </Modal>
  );
};

export default CommonModal;
