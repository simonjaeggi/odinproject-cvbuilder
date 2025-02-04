import "../Form.css";
import "./InformationForm.css";
import Input from "../../Input/Input.tsx";
import Button from "../../Button/Button.tsx";
import FormTitle from "../FormTitle/FormTitle.tsx";
import { useState } from "react";

function InformationForm() {
    const [isEditable, setEditable] = useState(true);

    const saveButtonClickHandler = () => {
        setEditable(!isEditable);
    };

    return (
        <div className="form-section">
            <FormTitle
                icon="ri-information-2-fill"
                title="General Information"
            ></FormTitle>
            <div className="form-inputs">
                <Input
                    isDisabled={!isEditable}
                    placeholder="Bill"
                    label="Name"
                ></Input>
                <Input
                    isDisabled={!isEditable}
                    placeholder="Clinton"
                    label="Surname"
                ></Input>
                <Input
                    isDisabled={!isEditable}
                    placeholder="bill.clinton@gmail.com"
                    label="Email"
                    type="email"
                ></Input>
                <Input
                    isDisabled={!isEditable}
                    placeholder="+41 76 123 45 65"
                    label="Phone"
                    type="tel"
                ></Input>
            </div>
            <Button
                clickhandler={saveButtonClickHandler}
                label={isEditable ? "Save" : "Edit"}
                bgColor={isEditable ? undefined : "#D93934"}
                icon={isEditable ? "ri-save-line" : "ri-pencil-fill"}
            ></Button>
        </div>
    );
}

export default InformationForm;
