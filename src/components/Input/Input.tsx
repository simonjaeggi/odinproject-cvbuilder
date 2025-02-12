// import { useRef } from "react";
import "./Input.css";

export interface InputProps {
    label:string;
    type?:string;
    placeholder?:string;
    isDisabled?:boolean;
    id:string;
    handleChange: (data: {value: string; id:string}) => void;
    defaultValue?:string;
}

function Input({label, type="text", placeholder="", isDisabled=false, id, handleChange, defaultValue}:InputProps) {
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
                defaultValue={defaultValue && defaultValue}
            />
        </div>
    );
}
export default Input;
