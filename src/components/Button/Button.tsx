import { ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  label: string;
  bgColor?: string;

  /**
   * Camelcase please, and also handleClick is a better name
   */
  clickhandler: () => void;

  /**
   * Accept a ReactNode (element) instead
   */
  iconElement?: ReactNode;
}

function Button({
  label,

  /**
   * Always comment the color if the color cannot be recognized by name.
   */
  bgColor = "#488aec", // blue
  clickhandler,
  iconElement,
}: ButtonProps) {
  const buttonStyle = {
    backgroundColor: bgColor,
  };

  return (
    /**
     * The wrapping div here is not necessary
     */
    <button style={buttonStyle} onClick={clickhandler}>
      {label} {iconElement}
    </button>
  );
}
export default Button;
