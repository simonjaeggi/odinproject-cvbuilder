import "../Form.css";
import Input from "../../Input/Input.tsx";
import Button from "../../Button/Button.tsx";
import FormTitle from "../FormTitle/FormTitle.tsx";
import { useEffect, useState } from "react";
import { Information, ReactSetStateFn } from "../../../interface/utils.type.ts";

interface InformationFormProps {
  info: Information;
  setInfo: ReactSetStateFn<Information>;
}

function InformationForm({ info, setInfo }: InformationFormProps) {
  const [isEditable, setEditable] = useState(true);

  const infoNameId = "info-name";
  const infoSurnameId = "info-surname";
  const infoEmailId = "info-email";
  const infoPhoneId = "info-phone";

  interface InformationFormInputs {
    id: string;
    placeholder: string;
    label: string;
    type?: string;
  }

  const informationFormInputs: InformationFormInputs[] = [
    {
      id: infoNameId,
      placeholder: "Bill",
      label: "Name",
    },
    {
      id: infoSurnameId,
      placeholder: "Clinton",
      label: "Surname",
    },
    {
      id: infoEmailId,
      placeholder: "bill.clinton@gmail.com",
      label: "Email",
      type: "email",
    },
    {
      id: infoPhoneId,
      placeholder: "+41 25 255 255",
      label: "Phone",
      type: "tel",
    },
  ];

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

  const updatedInfo = { ...info };

  const saveButtonClickHandler = () => {
    if (isEditable) {
      setInfo({ ...updatedInfo });
    }
    setEditable(!isEditable);
  };
  const handleInputChange = ({ value, id }: { value: string; id: string }) => {
    updatedInfo[id] = value;
  };

  return (
    <div className="card">
      <FormTitle icon="ri-information-2-fill" title="General Information" />

      <div key={`info-input-wrapper`} className="form-inputs">

        {informationFormInputs.map((input) => (
          <Input
            key={input.id}
            id={input.id}
            isDisabled={!isEditable}
            placeholder={input.placeholder}
            label={input.label}
            handleChange={handleInputChange}
          />
        ))}

      </div>
      <Button
        handleClick={saveButtonClickHandler}
        label={isEditable ? "Save" : "Edit"}
        bgColor={isEditable ? "#23914b" : "#488aec"}
        iconElement={
          isEditable ? (
            <i className="ri-save-line"></i>
          ) : (
            <i className="ri-pencil-fill"></i>
          )
        }
      />
    </div>
  );
}

export default InformationForm;
