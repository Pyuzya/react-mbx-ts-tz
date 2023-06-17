import { FunctionComponent } from "react";

interface TaskListProps {
    tasks: Array<string>;
    deleteTask?: any;
    addTask?: any;
}

const TaskList: FunctionComponent<TaskListProps> = (props) => {
    const { tasks, deleteTask, addTask } = props;
    return (
        <div className="TaskList">
            <ul>
                {tasks.map((task, i) => (
                    <li
                        className="TaskList_item"
                        key={i}
                    >
                        <input type="checkbox" />
                        <div className="TaskList_title">{task}</div>
                        <div
                            className="TaskList_close"
                            onClick={() => {
                                deleteTask(i);
                            }}
                        >
                            X
                        </div>
                        <div
                            className="TaskList_add"
                            onClick={() => {
                                addTask(i);
                            }}
                        >
                            +
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
