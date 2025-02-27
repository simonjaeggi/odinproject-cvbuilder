import "./FormTitle.css";
function FormTitle({ title, icon }: { title: string; icon: string }) {
  return (
    <div className="FormTitle flex-row gap-1rem">
      <i className={icon}></i>
      <span>{title}</span>
    </div>
  );
}

export default FormTitle;
