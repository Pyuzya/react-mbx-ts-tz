import { useState } from "react";
// import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.sass";

function App() {
    const [state, setState] = useState<any>([]);
    return (
        <div className='App'>
            <TaskList />
        </div>
    );
}
/* if (promptValue === "" || promptValue == null) {
    const promptValue = prompt("Задача", "");
     alert("Пустое поле / Отмена");
 } else {
     state.push(promptValue);
     setState([...state]);
 } */
export default App;
