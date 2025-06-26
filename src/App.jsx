import { useState } from "react";

import CreateProject from "./components/CreateProject";
import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectList from "./components/ProjectList";
function App() {
  const [] = useState();
  return (
    <main className="h-screen my-8  flex gap-8 ">
      <ProjectSidebar />
      {/* <CreateProject /> */}
      <NoProjectSelected />
    </main>
  );
}

export default App;
