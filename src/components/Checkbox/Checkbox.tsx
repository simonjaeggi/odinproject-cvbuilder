import "./Checkbox.css";

interface CheckboxProps {
  label: string;
  isDisabled?: boolean;
  handleChange: (data: { isChecked: boolean; id: string }) => void;
  id: string;
}

function Checkbox({
  label,
  isDisabled = false,
  handleChange,
  id,
}: CheckboxProps) {
  return (
    <div className="checkbox-wrapper-4">
      {/* this is just to test the functionality */}
      <input
        className="inp-checkbox"
        disabled={isDisabled}
        id={id}
        type="checkbox"
        onChange={(e) => handleChange({ isChecked: e.target.checked, id })}
      ></input>
      <label className="checkbox" htmlFor={id}>
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
  );
}

export default Checkbox;
