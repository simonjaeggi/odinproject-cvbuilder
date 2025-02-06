// import { useRef } from "react";
import "./Input.css";

interface InputProps {
    label:string;
    type?:string;
    placeholder?:string;
    isDisabled?:boolean;
    id:string;
    handleChange: (data: {value: unknown; id:string}) => void;
}

function Input({label, type="text", placeholder="", isDisabled=false, id, handleChange}:InputProps) {
    // const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="coolinput">
            <label htmlFor={id} className="text">
                {label}
            </label>
            <input
                // ref={inputRef}
                onChange={(e) => handleChange({value: e.target.value, id} )}
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
