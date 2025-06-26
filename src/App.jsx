import CreateProject from "./components/CreateProject";
import ProjectList from "./components/ProjectList";
import ProjectSidebar from "./components/ProjectSidebar";
function App() {
  return (
    <main className="h-screen my-8  flex gap-8 ">
      <ProjectSidebar />
      <CreateProject />
    </main>
  );
}

export default App;
