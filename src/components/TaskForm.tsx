import { FunctionComponent, useState } from "react";

interface TaskFormProps {
    saveTask: any;
}

const TaskForm: FunctionComponent<TaskFormProps> = (props) => {
    const { saveTask } = props;
    const [value, setValue] = useState("");
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                saveTask(value);
                setValue("");
            }}
        >
            <input
                type="text"
                placeholder="Add Task"
                onChange={(event) => {
                    setValue(event.target.value);
                }}
                value={value}
            />
        </form>
    );
};

export default TaskForm;
