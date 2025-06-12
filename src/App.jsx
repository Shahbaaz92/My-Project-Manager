import CreateProject from "./components/CreateProject";
import ProjectList from "./components/ProjectList";
import ProjectSidebar from "./components/ProjectSidebar";
function App() {
  return (
    <>
      <ProjectSidebar />
      <ProjectList />
      <CreateProject />
    </>
  );
}

export default App;
