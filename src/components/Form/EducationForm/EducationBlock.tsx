import "../Form.css";
import Input from "../../Input/Input.tsx";
import Button from "../../Button/Button.tsx";
import { useState } from "react";
import Checkbox from "../../Checkbox/Checkbox.tsx";

interface EducationBlockProps {
    id: string;
    handleRemove: (id: string) => void;
    setEducation: React.Dispatch<
        React.SetStateAction<Record<string, Record<string, string>>>
    >;
}

function EducationBlock({
    id,
    handleRemove,
    setEducation,
}: EducationBlockProps) {
    const [isEditable, setEditable] = useState(true);
    const [isUntilPresent, setUntilPresent] = useState(false);
    const eduSchoolId = `edu-school-${id}`;
    const eduProgramId = `edu-program-${id}`;
    const eduStartId = `edu-start-${id}`;
    const eduEndId = `edu-end-${id}`;

    const [localEducationRecord, setLocalEducationRecord] = useState<
        Record<string, string>
    >({
        [eduSchoolId]: "",
        [eduProgramId]: "",
        [eduStartId]: "",
        [eduEndId]: "",
    });

    const handleInputChange = ({
        value,
        id,
    }: {
        value: string;
        id: string;
    }) => {
        setLocalEducationRecord((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleUntilPresentChange = ({
        isChecked,
    }: {
        isChecked: boolean;
    }) => {
        localEducationRecord[eduEndId] = isChecked ? "Until Present" : "";
        setUntilPresent(isChecked);
    };

    const saveButtonClickHandler = () => {
        if (isEditable) {
            setEducation((prevEducation) => ({
                ...prevEducation,
                [id]: {
                    ...prevEducation[id],
                    ...localEducationRecord,
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
                    key={eduSchoolId}
                    id={eduSchoolId}
                    isDisabled={!isEditable}
                    placeholder="HSLU"
                    label="School"
                    handleChange={handleInputChange}
                />
                <Input
                    key={eduProgramId}
                    id={eduProgramId}
                    isDisabled={!isEditable}
                    placeholder="BSc in Computer Science"
                    label="Program"
                    handleChange={handleInputChange}
                />
                <Input
                    key={eduStartId}
                    id={eduStartId}
                    isDisabled={!isEditable}
                    label="Start Date"
                    type="date"
                    handleChange={handleInputChange}
                />
                <Input
                    key={eduEndId}
                    id={eduEndId}
                    isDisabled={!isEditable}
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
                                iconElement={<i className="ri-delete-bin-line"></i>}
                            ></Button>
                        </div>
                    )}
                </div>
                <Checkbox
                    key={`edu-end-checkbox-${id}`}
                    id={`edu-end-checkbox-${id}`}
                    label="Until Present"
                    isDisabled={!isEditable}
                    handleChange={handleUntilPresentChange}
                ></Checkbox>
            </div>
        </div>
    );
}

export default EducationBlock;
