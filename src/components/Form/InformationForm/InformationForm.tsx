import "../Form.css"
import "./InformationForm.css"
import Input from "../../Input/Input.tsx";
import Button from "../../Button/Button.tsx";
import FormTitle from "../FormTitle/FormTitle.tsx";
import { useState } from "react";

function InformationForm() {
    const [isEditable, setEditable] = useState(true);

    const buttonClickHandler = () => { setEditable(!isEditable) }

    return (
        <div className="form-section">
            <FormTitle title="General Information"></FormTitle>

            <div className="form-inputs">
                <Input isDisabled={!isEditable} placeholder="Bill" label="Name"></Input>
                <Input isDisabled={!isEditable} placeholder="Clinton" label="Surname"></Input>
                <Input isDisabled={!isEditable} placeholder="bill.clinton@gmail.com" label="Email" type="email"></Input>
                <Input isDisabled={!isEditable} placeholder="+41 76 123 45 65" label="Phone" type="tel"></Input>
            </div>
            <Button clickhandler={buttonClickHandler} label={isEditable ? "Save" : "Edit"} bgColor={isEditable ? undefined : "#D93934"}></Button>
        </div>
    );
}

export default InformationForm;
