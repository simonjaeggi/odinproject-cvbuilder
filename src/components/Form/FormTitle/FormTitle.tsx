import "./FormTitle.css";
function FormTitle({ title, icon }: { title: string; icon: string }) {
  return (
    /**
     * Good that you are practicing CSS with utility classes!
     * But just take note that if you are using a CSS framework like Tailwind
     * or Bootstrap, avoid making your own utility classes but style with normal
     * CSS instead.
     */
    <div className="FormTitle flex-row gap-1rem">
      <i className={icon}></i>
      <span>{title}</span>
    </div>
  );
}

export default FormTitle;
