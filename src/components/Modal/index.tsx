import { Box, Modal } from "@mui/material";
import ApplyModal from "./Apply/index";
import Cancel from "./Cancelled/cancel";
import ViewDetails from "./Details/index";
import Confirmation from "./Confirmation";

const CommonModal = ({
  open,
  onClose,
  type,
  size = "md",
  data,
  onConfirm,
}: any) => {
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
        return <ApplyModal onClose={onClose} data={data} />;
      case "details":
        return <ViewDetails onClose={onClose} propsData={data} />;

      case "cancel":
        return (
          <Cancel
            onClose={onClose}
            onCancel={() => {
              console.log("Cancel IPO confirmed");
              onClose();
            }}
          />
        );
      case "confirmation":
        return (
          <Confirmation onClose={onClose} data={data} onConfirm={onConfirm} />
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
