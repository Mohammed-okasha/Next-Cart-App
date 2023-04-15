import classes from "./Button.module.scss";

const Button = (props) => {
  const btnClasses = props.danger
    ? `${classes.button} ${classes.danger}`
    : classes.button;

  return (
    <button type={props.type} className={btnClasses} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
