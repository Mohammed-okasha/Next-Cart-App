import Modal from "../UI/Modal/Modal";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { FaExclamation } from "react-icons/fa";
import classes from "./ConfirmModal.module.scss";

const ConfirmModal = (props) => {
  return (
    <Modal closeModal={props.onCloseConfirm}>
      <Card>
        <div className={classes.icon}>
          <FaExclamation />
        </div>
        <p className={classes.message}>{props.message}</p>
        <div className={classes.confirm_actions}>
          <Button onClick={props.onRemove}>{props.title}</Button>
          <Button onClick={props.onCloseConfirm}>cancel</Button>
        </div>
      </Card>
    </Modal>
  );
};

export default ConfirmModal;
