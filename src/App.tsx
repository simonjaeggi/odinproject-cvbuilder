import "./App.css";
import InformationForm from "./components/Form/InformationForm/InformationForm.tsx";
import EducationForm from "./components/Form/EducationForm/EducationForm.tsx";
import WorkForm from "./components/Form/Work/WorkForm.tsx";
import { useEffect, useState } from "react";

function App() {
    const [info, setInfo] = useState<Record<string, string>>({});
    const [education, setEducation] = useState<
        Record<string, Record<string, string>>
    >({});
    const [work, setWork] = useState<
        Record<string, Record<string, string>>
    >({});

    useEffect(() => {
        console.log(Date.now() + " Hey, Info got an update!");
        console.log(info);
    }, [info]);

    useEffect(() => {
        console.log(Date.now() + " Hey, Education got an update!");
        console.log(education);
    }, [education]);

    useEffect(() => {
        console.log(Date.now() + " Hey, Work got an update!");
        console.log(work);
    }, [work]);

    return (
        <>
            <div className="header">
                <div className="pagetitle">
                    <img src="/planet.svg" alt="Planet Icon" />
                    <span>SpaceJump CV-Builder</span>
                </div>
            </div>
            <div className="content">
                <InformationForm info={info} setInfo={setInfo} />
                <EducationForm
                    education={education}
                    setEducation={setEducation}
                />
                <WorkForm work={work} setWork={setWork} />
            </div>
        </>
    );
}

export default App;
