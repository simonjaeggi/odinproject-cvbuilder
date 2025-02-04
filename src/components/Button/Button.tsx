import "./Button.css";

interface ButtonProps {
    label:string;
    bgColor?:string;
    clickhandler: () => void;
}

function Button({label, bgColor='#488aec', clickhandler}:ButtonProps) {
    const buttonStyle = {
        backgroundColor: bgColor,
      };
      
    return (
        <div>
            <button style={buttonStyle} onClick={clickhandler}>{label}</button>
        </div>
    )
}
export default Button;
