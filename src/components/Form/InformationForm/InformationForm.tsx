import "../Form.css";
import Input, { InputProps } from "../../Input/Input.tsx";
import Button from "../../Button/Button.tsx";
import FormTitle from "../FormTitle/FormTitle.tsx";
import { useEffect, useState } from "react";
import { ReactSetStateFn } from "../../../interface/utils.type.ts";

interface InformationFormProps {
  info: Record<string, string>;
  setInfo: ReactSetStateFn<Record<string, string>>;
}

function InformationForm({ info, setInfo }: InformationFormProps) {
  const [isEditable, setEditable] = useState(true);

  /**
   * Define lists of objects instead, and then use .map() to render <Input />
   * Also avoid hyphen-case in object property names. Camel cases are better as it
   * is the standard, like infoName and infoSurname so on...
   */
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
      {/* Use element shortform <Element /> */}
      <FormTitle icon="ri-information-2-fill" title="General Information" />

      <div key={`info-input-wrapper`} className="form-inputs">
        {/* Create array of objects for your Input props and use .map() to loop them here.
        Reason: JSX Templates should focus more on rendering data provided by the Component in the function
        body.
        */}
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

        {/* <Input
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
        ></Input> */}
      </div>
      <Button
        clickhandler={saveButtonClickHandler}
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
