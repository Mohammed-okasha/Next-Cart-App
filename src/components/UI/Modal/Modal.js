import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";
//==================================================================
const Modal = (props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        <>
          <Backdrop onClose={props.closeModal} />
          <ModalOverlay>{props.children}</ModalOverlay>
        </>,
        document.getElementById("overlays")
      )
    : null;
};

export default Modal;
