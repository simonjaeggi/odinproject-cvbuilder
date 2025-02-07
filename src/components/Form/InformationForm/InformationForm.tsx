import "../Form.css";
import Input from "../../Input/Input.tsx";
import Button from "../../Button/Button.tsx";
import FormTitle from "../FormTitle/FormTitle.tsx";
import { useEffect, useState } from "react";

interface InformationFormProps {
    info: Record<string, string>;
    setInfo: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

function InformationForm({ info, setInfo }: InformationFormProps) {
    const [isEditable, setEditable] = useState(true);

    const infoNameId = "info-name";
    const infoSurnameId = "info-surname";
    const infoEmailId = "info-email";
    const infoPhoneId = "info-phone";

    // ensure the state is always populated
    useEffect(() => {
        setInfo((prev) => ({
            ...prev,
            [infoNameId]: "",
            [infoSurnameId]: "",
            [infoEmailId]: "",
            [infoPhoneId]: "",
        }));
    }, []);

    const updatedInfo = {...info};

    const saveButtonClickHandler = () => {
        if (isEditable) {
            setInfo({...updatedInfo});
        }
        setEditable(!isEditable);
    };
    const handleInputChange = ({
        value,
        id,
    }: {
        value: string;
        id: string;
    }) => {
        updatedInfo[id] = value;
    };

    return (
        <div className="card">
            <FormTitle
                icon="ri-information-2-fill"
                title="General Information"
            ></FormTitle>

            <div key={`info-input-wrapper`} className="form-inputs">
                <Input
                    key={infoNameId}
                    id={infoNameId}
                    isDisabled={!isEditable}
                    placeholder="Bill"
                    label="Name"
                    handleChange={handleInputChange}
                ></Input>
                <Input
                    key={infoSurnameId}
                    id={infoSurnameId}
                    isDisabled={!isEditable}
                    placeholder="Clinton"
                    label="Surname"
                    handleChange={handleInputChange}
                ></Input>
                <Input
                    key={infoEmailId}
                    id={infoEmailId}
                    isDisabled={!isEditable}
                    placeholder="bill.clinton@gmail.com"
                    label="Email"
                    type="email"
                    handleChange={handleInputChange}
                ></Input>
                <Input
                    key={infoPhoneId}
                    id={infoPhoneId}
                    isDisabled={!isEditable}
                    placeholder="+41 76 123 45 65"
                    label="Phone"
                    type="tel"
                    handleChange={handleInputChange}
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
