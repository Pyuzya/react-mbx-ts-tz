import { FunctionComponent, useState } from "react";

interface TaskProps {
    id: number;
    title: string;
    minimize?: boolean;
    checkbox?: boolean;
    createTask: (promptValue: string) => void;
    deleteTask: (id: number) => void;
    className: string;
}

interface Tasks {
    title: string;
    minimize: boolean;
    checkbox: boolean;
}

const Task: FunctionComponent<TaskProps> = (props) => {
    const [subTask, setSubTask] = useState<[Tasks] | []>([]);
    const { id, title, minimize, checkbox, createTask, deleteTask, className } = props;
    return (
        <li
            className={`Task_item Task_${className}`}
            key={id}>
            <input type='checkbox' />
            <div className='Task_title'>{title}</div>
            <div
                className={`Task_add`}
                // ВОТ ТУT: Класс, создать сабтаск
                onClick={() => {
                    let promptValue = prompt("Задача", "");

                    if (promptValue === "" || promptValue == null) {
                        alert("Ошибка");
                    } else {
                        createTask(promptValue);
                    }
                }}>
                +
            </div>
            <div
                className='Task_close'
                onClick={() => {
                    deleteTask(id);
                }}>
                X
            </div>
            <div
                className='Task_show'
                // onClick={() => {}}
            >
                v
            </div>
        </li>
    );
};

export default Task;
