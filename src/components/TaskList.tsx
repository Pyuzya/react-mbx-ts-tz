import { FunctionComponent, useState } from "react";
import Task from "./Task";

interface TaskListProps {}

const TaskList: FunctionComponent<TaskListProps> = () => {
    const [tasks, setTasks] = useState<any>([]);
    const [inputValue, setInputValue] = useState("");
    const createTask = (title: string) => {
        let newTask = {
            title: title,
            minimize: false,
            checkbox: false,
        };
        setTasks([...tasks, newTask]);
    };
    const deleteTask = (id: number) => {
        let newTasks = tasks.filter((task: any, index: any) => {
            if (index !== id) {
                return tasks;
            } else {
                return console.log(index);
            }
        });
        setTasks(newTasks);
    };
    return (
        <div className='TaskList'>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    createTask(inputValue);
                    setInputValue("");
                }}>
                <input
                    type='text'
                    placeholder='Add Task'
                    onChange={(event) => {
                        setInputValue(event.target.value);
                    }}
                    value={inputValue}
                />
            </form>
            <ul>
                {tasks.map((task: any, i: number) => {
                    return (
                        <Task
                            id={i}
                            key={i}
                            title={task.title}
                            createTask={createTask}
                            deleteTask={deleteTask}
                            className='subTask'
                        />
                    );
                })}
                {/* {setTasks([...tasks])}
                {console.log(tasks)} */}
            </ul>
        </div>
    );
};

export default TaskList;
