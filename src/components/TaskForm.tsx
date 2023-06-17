import { FunctionComponent, useState } from "react";

interface TaskFormProps {}

const TaskForm: FunctionComponent<TaskFormProps> = () => {
    const [value, setValue] = useState("");
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                console.log(value);
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
