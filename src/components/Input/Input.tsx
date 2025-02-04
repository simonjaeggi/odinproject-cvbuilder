import "./Input.css";

interface InputProps {
    label:string;
    type?:string;
    placeholder?:string;
    isDisabled?:boolean;
}

function Input({label, type="text", placeholder="", isDisabled=false}:InputProps) {
    return (
        <div className="coolinput">
            <label htmlFor="input" className="text">
                {label}
            </label>
            <input
                disabled={isDisabled}
                type={type}
                placeholder={placeholder}
                name="input"
                className="input"
            />
        </div>
    );
}
export default Input;
