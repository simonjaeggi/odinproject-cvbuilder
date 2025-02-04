import "./Checkbox.css";

interface CheckboxProps{
    label: string;
    isDisabled?:boolean;
    onChangeHandler: ()=> void;
}

function Checkbox({ label, isDisabled=false, onChangeHandler}: CheckboxProps) {
    const id:string = String(Date.now() + Math.random())

    return (
        <>
            <div className="checkbox-wrapper-4">
                <input className="inp-cbx" disabled={isDisabled} id={id} type="checkbox" onChange={onChangeHandler}></input>
                <label className="cbx" htmlFor={id}>
                    <span>
                        <svg width="12px" height="10px"></svg>
                    </span>
                    <span>{label}</span>
                </label>
                <svg className="inline-svg">
                    <symbol id="check-4" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </symbol>
                </svg>
            </div>
        </>
    );
}

export default Checkbox;
