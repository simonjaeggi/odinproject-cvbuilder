import "../Form.css";
import Input from "../../Input/Input.tsx";
import Button from "../../Button/Button.tsx";
import FormTitle from "../FormTitle/FormTitle.tsx";
import { useState } from "react";
import Checkbox from "../../Checkbox/Checkbox.tsx";

function WorkForm() {
    const [isEditable, setEditable] = useState(true);
    const [inputs, setInputs] = useState([{ id: 0 }]);


    const saveButtonClickHandler = () => {
        setEditable(!isEditable);
    };
    const addButtonClickHandler = () => {
        setInputs((previousInputs) => [
            ...previousInputs,
            { id: inputs.length },
        ]);
    };

    const removeClickHandler = () => {
        setInputs((previousInputs) => previousInputs.slice(0, -1));
    };

    const changeHandlerUntilPresent = (endDateInputKey:string) => {
      console.log(endDateInputKey);
      
      // I want to do something with the input that has this key
    };

    return (
        <div className="form-section">
            <div className="flex-row space-between">
                <FormTitle
                    icon="ri-briefcase-fill"
                    title="Work Experience"
                ></FormTitle>

                {isEditable && (
                    <div className="flex-row gap-1rem">
                        {inputs.length > 1 && (
                            <Button
                                clickhandler={removeClickHandler}
                                bgColor="#D93934"
                                label="Remove"
                                icon="ri-delete-bin-line"
                            ></Button>
                        )}

                        <Button
                            clickhandler={addButtonClickHandler}
                            bgColor="#9478C8"
                            label="ADD"
                            icon="ri-add-large-line"
                        ></Button>
                    </div>
                )}
            </div>
            {inputs.map(({ id }) => {
                const endDateInputKey = `work-end-${id}`;
                return (
                    <div
                        key={`work-input-wrapper-${id}`}
                        className="form-inputs"
                    >
                        <Input
                            key={`work-company-${id}`}
                            isDisabled={!isEditable}
                            placeholder="Alphabet Inc"
                            label="Company"
                        />
                        <Input
                            key={`work-position-${id}`}
                            isDisabled={!isEditable}
                            placeholder="Senior Software Engineer"
                            label="Position"
                        />
                        <Input
                            key={`work-start-${id}`}
                            isDisabled={!isEditable}
                            label="Start Date"
                            type="date"
                        />
                        <Input
                            key={endDateInputKey}
                            isDisabled={!isEditable}
                            label="End Date"
                            type="date"
                        />
                        <Checkbox
                            label="Until Present"
                            isDisabled={!isEditable}
                            // I dont really get this. Apparently I can skip giving the child the argument??
                            onChangeHandler={() =>
                                changeHandlerUntilPresent(endDateInputKey)
                            }
                        ></Checkbox>
                    </div>
                );
            })}

            <Button
                clickhandler={saveButtonClickHandler}
                label={isEditable ? "Save" : "Edit"}
                bgColor={isEditable ? undefined : "#D93934"}
                icon={isEditable ? "ri-save-line" : "ri-pencil-fill"}
            ></Button>
        </div>
    );
}

export default WorkForm;
