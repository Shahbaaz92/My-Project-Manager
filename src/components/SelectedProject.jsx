import Tasks from "./Tasks";

function SelectedProject({
  project,
  onDelete,
  onAddTasks,
  onDeleteTasks,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16 px-3">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            className="px-6 py-2 rounded-md text-stone-800 hover:text-red-500 hover:bg-stone-200 cursor-pointer"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks onAdd={onAddTasks} onDelete={onDeleteTasks} tasks={tasks} />
    </div>
  );
}

export default SelectedProject;
