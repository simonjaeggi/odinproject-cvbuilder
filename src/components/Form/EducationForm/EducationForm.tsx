import EducationBlock from "./EducationBlock";
import Button from "../../Button/Button";
import FormTitle from "../FormTitle/FormTitle";
import { v4 as uuidv4 } from "uuid";

interface EducationFormProps {
    education: Record<string, Record<string, string>>;
    setEducation: React.Dispatch<
        React.SetStateAction<Record<string, Record<string, string>>>
    >;
}

export default function EducationForm({
    education,
    setEducation,
}: EducationFormProps) {

    const addButtonClickHandler = () => {
        setEducation((prevEducation) => ({
            ...prevEducation,
            [uuidv4()]: {},
        }));
    };

    const handleRemove = (educationBlockId: string) => {
        // A bit ugly, I need to convert the top level Record into an array and then reassemble into an object.
        const newEducation = Object.fromEntries(
            Object.entries(education).filter(([id]) => id !== educationBlockId)
        );

        setEducation(newEducation);
    };

    return (
        <>
            <div className="card">
                <div className="flex-row space-between">
                    <FormTitle
                        icon="ri-graduation-cap-fill"
                        title="Education"
                    ></FormTitle>
                    <Button
                        clickhandler={addButtonClickHandler}
                        label="ADD"
                        icon="ri-add-large-line"
                    ></Button>
                </div>

                {Object.entries(education).map(([id]) => {
                    return (
                        <EducationBlock
                            setEducation={setEducation}
                            key={id}
                            id={id}
                            handleRemove={handleRemove}
                        ></EducationBlock>
                    );
                })}
            </div>
        </>
    );
}
