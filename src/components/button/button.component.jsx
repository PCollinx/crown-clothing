import "./button.style.scss";

/*
default

inverted 

google sign-in
*/
const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
  default: "default",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
