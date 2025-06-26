// import noProjectsImg from "../assets/no-projects.png";

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
        <p>
          <label>Title</label>
          <input type="text" />
        </p>
        <p>
          <label></label>
          <input type="text" />
        </p>
        <p>
          <label></label>
          <input type="text" />
        </p>
      </div>
    </div>
  );
}

export default CreateProject;

{
  /* <img src={noProjectsImg} alt="Project Board" className="w-20" /> */
}
