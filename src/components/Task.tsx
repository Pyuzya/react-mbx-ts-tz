import { FunctionComponent } from "react";

interface TaskProps {}

const Task: FunctionComponent<TaskProps> = () => {
    return (
        <div className="Task">
            <ul>
                <li>
                    <div className="Task_main">
                        <div className="Task_title"></div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Task;
