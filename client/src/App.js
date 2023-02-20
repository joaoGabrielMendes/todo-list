import { Home } from "./views/Home/Home";
import { Newtask } from "./views/NewTask/NewTask";
import { TodoInfo } from "./views/TodoInfo/TodoInfo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newtask" element={<Newtask />} />
      <Route path="/todos/:id" element={<TodoInfo />} />
    </Routes>
  );
}

export default App;
