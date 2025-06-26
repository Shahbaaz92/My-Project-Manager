import noProjectsImg from "../assets/no-projects.png";

function NoProjectSelected() {
  return (
    <div>
      <img src={noProjectsImg} alt="Project Board" className="w-20" />
    </div>
  );
}

export default NoProjectSelected;
