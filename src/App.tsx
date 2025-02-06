import "./App.css";
import InformationForm from "./components/Form/InformationForm/InformationForm.tsx";
import EducationForm from "./components/Form/EducationForm/EducationForm.tsx";
import WorkForm from "./components/Form/Work/WorkForm.tsx";


function App() {
    return (
        <>
            <div className="header">
              <div className="pagetitle">
                <img src="/planet.svg" alt="Planet Icon"/>
                <span>SpaceJump CV-Builder</span>
              </div>
            </div>
            <div className="content">
                <InformationForm />
                <EducationForm />
                <WorkForm />
            </div>
        </>
    );
}

export default App;
