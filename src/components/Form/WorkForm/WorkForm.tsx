import "../Form.css";
import Input from "../../Input/Input.tsx";
import Button from "../../Button/Button.tsx";
import FormTitle from "../FormTitle/FormTitle.tsx";
import { useState } from "react";

function WorkForm() {
    const [isEditable, setEditable] = useState(true);
    const [inputs, setInputs] = useState([{id: 0}]);

    const saveButtonClickHandler = () => {
        setEditable(!isEditable);
    };
    const addButtonClickHandler = () => {
        setInputs((previousInputs) => [
            ...previousInputs,
            {id: inputs.length},
        ]);
    };

    const removeClickHandler = () => {
        setInputs((previousInputs) => previousInputs.slice(0, -1));
    };

    return (
        <div className="form-section">
            <div className="flex-row space-between">
                <FormTitle
                    icon="ri-briefcase-fill"
                    title="Work Experience"
                ></FormTitle>

                <div className="flex-row gap-1rem">
                    {inputs.length > 1 && (
                        <Button
                            clickhandler={removeClickHandler}
                            bgColor="#D93934"
                            label="Remove last"
                        ></Button>
                    )}

                    <Button
                        clickhandler={addButtonClickHandler}
                        bgColor="#9478C8"
                        label="ADD"
                    ></Button>
                </div>
            </div>
            {inputs.map(( id ) => (
                <div key={`input-wrapper-${id}`} className="form-inputs">
                    <Input
                        key={`company-${id}`}
                        isDisabled={!isEditable}
                        placeholder="Alphabet Inc"
                        label="Company"
                    />
                    <Input
                        key={`position-${id}`}
                        isDisabled={!isEditable}
                        placeholder="Senior Software Engineer"
                        label="Position"
                    />
                    <Input
                        key={`start-${id}`}
                        isDisabled={!isEditable}
                        label="Start Date"
                        type="date"
                    />
                    <Input
                        key={`end-${id}`}
                        isDisabled={!isEditable}
                        label="End Date"
                        type="date"
                    />
                </div>
            ))}

            <Button
                clickhandler={saveButtonClickHandler}
                label={isEditable ? "Save" : "Edit"}
                bgColor={isEditable ? undefined : "#D93934"}
            ></Button>
        </div>
    );
}

export default WorkForm;
