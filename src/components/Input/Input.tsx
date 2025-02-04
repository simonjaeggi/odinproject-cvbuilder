import "./Input.css";

interface InputProps {
    label:string;
    type?:string;
    placeholder?:string;
    isDisabled?:boolean;
}

function Input({label, type="text", placeholder="", isDisabled=false}:InputProps) {
    const id:string = String(Date.now() + Math.random())

    return (
        <div className="coolinput">
            <label htmlFor={id} className="text">
                {label}
            </label>
            <input
                disabled={isDisabled}
                type={type}
                placeholder={placeholder}
                name="input"
                className="input"
                id={id}
            />
        </div>
    );
}
export default Input;
