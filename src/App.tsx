import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.sass";

function App() {
    const [tasks, setTasks] = useState<any>([]);
    return (
        <div className="App">
            <TaskForm
                saveTask={(taskText: any) => {
                    setTasks([...tasks, taskText]);
                }}
            />
            <TaskList
                tasks={tasks}
                deleteTask={(taskIndex: any) => {
                    const newTasks = tasks.filter(
                        (_: any, i: any) => i !== taskIndex
                    );
                    setTasks(newTasks);
                }}
            />
        </div>
    );
}

export default App;
