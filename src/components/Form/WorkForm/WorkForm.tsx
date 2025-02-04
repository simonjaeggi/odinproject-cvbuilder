import "../Form.css"
import Input from "../../Input/Input.tsx"
import Button from "../../Button/Button.tsx"
import FormTitle from "../FormTitle/FormTitle.tsx"
import { useState } from "react";


function WorkForm() {
  const [isEditable, setEditable] = useState(true);

  const buttonClickHandler = () => { setEditable(!isEditable) }

  return (
    <div className="form-section">
      <FormTitle title="Work Experience"></FormTitle>
      <div className="form-inputs">
        <Input isDisabled={!isEditable} placeholder="Alphabet Inc" label="Company"></Input>
        <Input isDisabled={!isEditable} placeholder="Senior Software Engineer" label="Position"></Input>
        <Input isDisabled={!isEditable} label="Start Date" type="date"></Input>
        <Input isDisabled={!isEditable} label="End Date" type="date"></Input>
      </div>
      <Button clickhandler={buttonClickHandler} label={isEditable ? "Save" : "Edit"} bgColor={isEditable ? undefined : "#D93934"}></Button>
      </div>
  )
}

export default WorkForm
