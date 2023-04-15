import classes from "./ModalOverlay.module.scss";

const ModalOverlay = (props) => {
  return <div className={classes.modal_overlay}>{props.children}</div>;
};

export default ModalOverlay;
