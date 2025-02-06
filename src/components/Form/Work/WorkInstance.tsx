import "../Form.css";
import Input from "../../Input/Input.tsx";
import Button from "../../Button/Button.tsx";
import { useState } from "react";
import Checkbox from "../../Checkbox/Checkbox.tsx";

interface WorkInstanceProps {
    id: string;
    handleRemove: (id: string) => void;
}

function WorkInstance({ id, handleRemove }: WorkInstanceProps) {
    const [isEditable, setEditable] = useState(true);
    // const inputValues = [];

    const handleInputChange = ({
        value,
        id,
    }: {
        value: string;
        id: string;
    }) => {
        console.log(value, id);
    };
    
    const handleUntilPresentChange = ({
        value,
        id,
    }: {
        value: string;
        id: string;
    }) => {
        console.log(value, id);
    };
    const saveButtonClickHandler = () => {
        setEditable(!isEditable);
    };

    return (
        <div className="form-section">
            <div key={`work-input-wrapper-${id}`} className="form-inputs">
                <Input
                    key={`work-company-${id}`}
                    isDisabled={!isEditable}
                    placeholder="Alphabet Inc"
                    label="Company"
                    handleChange={handleInputChange}
                    id={`work-company-${id}`}
                />
                <Input
                    key={`work-position-${id}`}
                    isDisabled={!isEditable}
                    placeholder="Senior Software Engineer"
                    label="Position"
                    handleChange={handleInputChange}
                    id={`work-position-${id}`}
                />
                <Input
                    key={`work-start-${id}`}
                    isDisabled={!isEditable}
                    label="Start Date"
                    type="date"
                    handleChange={handleInputChange}
                    id={`work-start-${id}`}
                />
                <Input
                    key={`work-end-${id}`}
                    isDisabled={!isEditable}
                    label="End Date"
                    type="date"
                    handleChange={handleInputChange}
                    id={`work-end-${id}`}
                />
            </div>
            <div className="flex-row space-between">
                <div className="flex-row gap-1rem">
                    <Button
                        clickhandler={saveButtonClickHandler}
                        label={isEditable ? "Save" : "Edit"}
                        bgColor={isEditable ? "#23914b" : "#488aec"}
                        icon={isEditable ? "ri-save-line" : "ri-pencil-fill"}
                    ></Button>
                        {isEditable && (
                            <div className="flex-row gap-1rem">
                                <Button
                                    clickhandler={() => handleRemove(id)}
                                    bgColor="#D93934"
                                    label=""
                                    icon="ri-delete-bin-line"
                                ></Button>
                            </div>
                        )}
                </div>
                    <Checkbox
                        key={`work-end-checkbox-${id}`}
                        id={`work-end-checkbox-${id}`}
                        label="Until Present"
                        isDisabled={!isEditable}
                        handleChange={handleUntilPresentChange}
                    ></Checkbox>

            </div>
        </div>
    );
}

export default WorkInstance;
