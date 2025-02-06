import { useState } from "react";
import WorkInstance from "./WorkInstance";
import Button from "../../Button/Button";
import FormTitle from "../FormTitle/FormTitle";
import {v4 as uuidv4} from 'uuid';

export default function WorkForm() {
    const [inputs, setInputs] = useState([
        { id: uuidv4()},
    ]);
    const addButtonClickHandler = () => {
        setInputs((previousInputs) => [
            ...previousInputs,
            { id: uuidv4()}
        ]);
    };

    const handleRemove = (workformId: string) => {
        const newInputs = inputs.filter((obj) => {
            return obj.id !== workformId;
        });
        setInputs(newInputs);
    };
    return (
        <>
            <div className="form">
                <div className="flex-row space-between">
                    <FormTitle
                        icon="ri-briefcase-fill"
                        title="Work Experience"
                    ></FormTitle>
                    <Button
                        clickhandler={addButtonClickHandler}
                        label="ADD"
                        icon="ri-add-large-line"
                    ></Button>
                </div>

                {inputs.map(({ id }) => {
                    return (
                        <WorkInstance
                            key={id}
                            id={id}
                            handleRemove={handleRemove}
                        ></WorkInstance>
                    );
                })}
            </div>
        </>
    );
}
