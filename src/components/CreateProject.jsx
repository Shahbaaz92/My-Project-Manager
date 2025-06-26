// import noProjectsImg from "../assets/no-projects.png";
import Input from "./Input";

function CreateProject() {
  return (
    <div>
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}

export default CreateProject;

{
  /* <img src={noProjectsImg} alt="Project Board" className="w-20" /> */
}
