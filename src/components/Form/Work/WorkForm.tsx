import WorkBlock from "./WorkBlock";
import Button from "../../Button/Button";
import FormTitle from "../FormTitle/FormTitle";
import { v4 as uuidv4 } from "uuid";

interface WorkFormProps {
  work: Record<string, Record<string, string>>;
  setWork: React.Dispatch<
    React.SetStateAction<Record<string, Record<string, string>>>
  >;
}

export default function WorkForm({ work, setWork }: WorkFormProps) {
  const addButtonClickHandler = () => {
    setWork((prev) => ({
      ...prev,
      [uuidv4()]: {},
    }));
  };

  const handleRemove = (workBlockId: string) => {
    // A bit ugly, I need to convert the top level Record into an array and then reassemble into an object.
    const newWork = Object.fromEntries(
      Object.entries(work).filter(([id]) => id !== workBlockId)
    );

    setWork(newWork);
  };
  return (
    <>
      <div className="card">
        <div className="flex-row space-between">
          <FormTitle
            icon="ri-briefcase-fill"
            title="Work Experience"
          ></FormTitle>
          <Button
            clickhandler={addButtonClickHandler}
            label="ADD"
            iconElement={<i className="ri-add-large-line"></i>}
          ></Button>
        </div>

        {Object.entries(work).map(([id]) => {
          return (
            <WorkBlock
              setWork={setWork}
              key={id}
              id={id}
              handleRemove={handleRemove}
            />
          );
        })}
      </div>
    </>
  );
}
