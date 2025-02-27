import { ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  label: string;
  bgColor?: string;
  handleClick: () => void;
  iconElement?: ReactNode;
}

function Button({
  label,
  bgColor = "#488aec", // blue
  handleClick,
  iconElement,
}: ButtonProps) {
  const buttonStyle = {
    backgroundColor: bgColor,
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      {label} {iconElement}
    </button>
  );
}
export default Button;
