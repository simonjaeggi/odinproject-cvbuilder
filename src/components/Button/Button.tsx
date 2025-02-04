import "./Button.css";

interface ButtonProps {
    label:string;
    bgColor?:string;
    clickhandler: () => void;
    icon?:string;
}

function Button({label, bgColor='#488aec', clickhandler, icon}:ButtonProps) {
    const buttonStyle = {
        backgroundColor: bgColor,
      };

    return (
        <div>
            <button style={buttonStyle} onClick={clickhandler}>{label} {icon &&  <i className={icon}></i>}</button>
        </div>
    )
}
export default Button;
