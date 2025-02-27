import "../Form.css";
import Input from "../../Input/Input.tsx";
import Button from "../../Button/Button.tsx";
import { useState } from "react";
import Checkbox from "../../Checkbox/Checkbox.tsx";

interface WorkBlockProps {
    id: string;
    handleRemove: (id: string) => void;
    setWork: React.Dispatch<
        React.SetStateAction<Record<string, Record<string, string>>>
    >;
}

function WorkBlock({ 
    id, 
    handleRemove, 
    setWork 
}: WorkBlockProps) {
    const [isEditable, setEditable] = useState(true);
    const [isUntilPresent, setUntilPresent] = useState(false);
    const workCompanyId = `work-company-${id}`;
    const workPositionId = `work-position-${id}`;
    const workStartId = `work-start-${id}`;
    const workEndId = `work-end-${id}`;

    const [localWorkRecord, setLocalWorkRecord] = useState<Record<string, string>>({
        [workCompanyId]: "",
        [workPositionId]: "",
        [workStartId]: "",
        [workEndId]: "",
    });

    const handleInputChange = ({ value, id }: { value: string; id: string }) => {
        setLocalWorkRecord((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleUntilPresentChange = ({
        isChecked,
    }: {
        isChecked: boolean;
    }) => {
        localWorkRecord[workEndId] = isChecked ? "Until Present" : "";
        setUntilPresent(isChecked);
    };

    const saveButtonClickHandler = () => {
        if (isEditable) {
            setWork((prev) => ({
                ...prev,
                [id]: {
                    ...prev[id],
                    ...localWorkRecord,
                },
            }));
        }
        setEditable(!isEditable);
    };

    const getCurrentDate = (): string => {
        return new Date().toISOString().split("T")[0];
    };

    return (
        <div className="form-section">
            <div key={`work-input-wrapper-${id}`} className="form-inputs">
                <Input
                    key={workCompanyId}
                    id={workCompanyId}
                    isDisabled={!isEditable}
                    placeholder="Alphabet Inc"
                    label="Company"
                    handleChange={handleInputChange}
                />
                <Input
                    key={workPositionId}
                    id={workPositionId}
                    isDisabled={!isEditable}
                    placeholder="Senior Software Engineer"
                    label="Position"
                    handleChange={handleInputChange}
                />
                <Input
                    key={workStartId}
                    id={workStartId}
                    isDisabled={!isEditable}
                    label="Start Date"
                    type="date"
                    handleChange={handleInputChange}
                />
                <Input
                    key={workEndId}
                    id={workEndId}
                    isDisabled={!isEditable || isUntilPresent}
                    label="End Date"
                    type="date"
                    handleChange={handleInputChange}
                    // This has the issue, that it will only replace the value if it wasnt defined before.
                    // I could overwrite the value, but I would then have to make the whole component controlled.
                    // To have the component controlled, I would need a bunch of states.
                    defaultValue={isUntilPresent ? getCurrentDate() : undefined}
                />
            </div>
            <div className="flex-row space-between">
                <div className="flex-row gap-1rem">
                    <Button
                        handleClick={saveButtonClickHandler}
                        label={isEditable ? "Save" : "Edit"}
                        bgColor={isEditable ? "#23914b" : "#488aec"}
                        iconElement={isEditable ? <i className="ri-save-line"></i> : <i className="ri-pencil-fill"></i>}
                    ></Button>
                    {isEditable && (
                        <div className="flex-row gap-1rem">
                            <Button
                                handleClick={() => handleRemove(id)}
                                bgColor="#D93934"
                                label=""
                                iconElement={<i className="ri-delete-bin-line"></i> }
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

export default WorkBlock;
