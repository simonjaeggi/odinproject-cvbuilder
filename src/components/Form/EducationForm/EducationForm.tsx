import EducationBlock from "./EducationBlock";
import Button from "../../Button/Button";
import FormTitle from "../FormTitle/FormTitle";
import { v4 as uuidv4 } from "uuid";
import { ReactSetStateFn } from "../../../interface/utils.type";

/**
 * Better to use {[key: string]: string} than Record<string, string>.
 * More readable and reflects the exact shape of the object that we expect.
 */
type Education = Record<string, Record<string, string>>;
type EducationTypeAsObject = { [key: string]: { [key: string]: string } };

interface EducationFormProps {
  /**
   * Its better to use arrays than objects to store lists of objects.
   * And use a type allias for complex types
   */
  education: Education;
  /**
   * Or you can also make a generic type to type React setState functions.
   * It is more readable this way
   */
  setEducation: ReactSetStateFn<Education>;
}

export default function EducationForm({
  education,
  setEducation,
}: EducationFormProps) {
  // handleAdd
  const addButtonClickHandler = () => {
    setEducation((prevEducation: Education) => {
      return {
        ...prevEducation,
        [uuidv4()]: {},
      };
    });
  };

  const handleRemove = (educationBlockId: string) => {
    // A bit ugly, I need to convert the top level Record into an array and then reassemble into an object.
    const newEducation = Object.fromEntries(
      Object.entries(education).filter(([id]) => id !== educationBlockId)
    );
    setEducation(newEducation);
  };

  return (
    <div className="card">
      <div className="flex-row space-between">
        <FormTitle icon="ri-graduation-cap-fill" title="Education"></FormTitle>
        <Button
          handleClick={addButtonClickHandler}
          label="ADD"
          /**
           * Make icon to accept a ReactNode instead.
           */
          iconElement={<i className="ri-add-large-line"></i>}
        ></Button>
      </div>  

      {/* Always use arrays for storing lists. It is easier to work with
    Also, use the shorthand for elements like <Element /> if possible. This shows that
    the element does not accept children.
    */}
      {Object.entries(education).map(([id]) => {
        return (
          <EducationBlock
            setEducation={setEducation}
            key={id}
            id={id}
            handleRemove={handleRemove}
          />
        );
      })}
    </div>
  );
}
