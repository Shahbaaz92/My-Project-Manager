import { useRef } from "react";

import Input from "./Input";

function CreateProject() {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  return (
    <div className="w-[35rem] mt-16 px-3">
      <menu className="flex items-center justify-end gap-4 my-4 ">
        <li>
          <button className="px-6 py-2 rounded-md text-stone-800 hover:text-stone-950 hover:bg-stone-200 cursor-pointer">
            Cancel
          </button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950  cursor-pointer">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
}

export default CreateProject;
