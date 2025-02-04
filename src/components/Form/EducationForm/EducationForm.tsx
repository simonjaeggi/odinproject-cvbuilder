import "../Form.css";
import Input from "../../Input/Input.tsx";
import Button from "../../Button/Button.tsx";
import FormTitle from "../FormTitle/FormTitle.tsx";
import { useState } from "react";

function EducationForm() {
    const [isEditable, setEditable] = useState(true);

    const buttonClickHandler = () => {
        setEditable(!isEditable);
    };
    return (
        <div className="form-section">
            <FormTitle title="Education"></FormTitle>
            <div className="form-inputs">
                <Input
                    isDisabled={!isEditable}
                    placeholder="HSLU"
                    label="School"
                ></Input>
                <Input
                    isDisabled={!isEditable}
                    placeholder="BSc in Computer Science"
                    label="Program"
                ></Input>
                <Input
                    isDisabled={!isEditable}
                    label="Start Date"
                    type="date"
                ></Input>
                <Input
                    isDisabled={!isEditable}
                    label="End Date"
                    type="date"
                ></Input>
            </div>

            <Button
                clickhandler={buttonClickHandler}
                label={isEditable ? "Save" : "Edit"}
                bgColor={isEditable ? undefined : "#D93934"}
            ></Button>
        </div>
    );
}

export default EducationForm;
