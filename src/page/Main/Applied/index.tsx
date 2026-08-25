import { useState } from "react";
import CommonModal from "../../../components/Modal";

const Applied = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Apply</button>

      <CommonModal
        open={open}
        onClose={() => setOpen(false)}
        type="apply"
        size="lg"
      />
    </>
  );
};

export default Applied;
