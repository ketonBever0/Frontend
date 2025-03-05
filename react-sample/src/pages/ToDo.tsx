import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react"


export default function ToDo() {

    type TodoType = {
        name: string;
        priority: number;
        description: string;
        until: string;
        completed: boolean;
    }

    const [todos, setTodos] = useState<TodoType[]>([
        { name: "Task 1", priority: 1, description: "Description 1", until: "2021-12-31", completed: false },
        { name: "Task 2", priority: 2, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", until: "2021-12-31", completed: true },
        { name: "Task 3", priority: 3, description: "Description 3", until: "2021-12-31", completed: false },
        { name: "Task 4", priority: 4, description: "Description 4", until: "2021-12-31", completed: true },
    ]);

    // Frissítőkapcsoló
    const [refresh, setRefresh] = useState(false);

    // Frissítő függvény
    const update = () => {
        setRefresh(prev => !prev);
    }

    const getTodos = () => {
        // axios.get("https://jsonplaceholder.typicode.com/todos")
        //     .then((res: AxiosResponse) => {
        //         setTodos(res.data);
        //     })
        //     .catch(err => console.log(err));
        // TODO
    }

    // Oldal betöltéskor és a refresh state változásakor (frissítésekor) fut le
    useEffect(() => {
        getTodos();
    }, [refresh]);


    const [formData, setFormData] = useState({
        name: "",
        description: "",
        until: ""
    })

    // Az input mezők változásakor frissíti a formData state-et
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // Figyelembe veszi az aktuális állapotot és csak az éppen módosított mezőhöz társított értéket módosítja, amit a name határoz meg
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }


    return (
        <div>

            <h1 className="text-3xl text-white text-center mb-8">To-Dos</h1>

            <div className="mb-12 flex flex-col gap-4">
                {/* Meg kell adni az értéket a value-ba, különben nem módosul */}
                <input type="text" name="name" value={formData.name} onChange={e => handleChange(e)}
                    className="border-2 bg-gray-950 border-gray-800 rounded-2xl p-4 mb-4"
                />
                <textarea name="description" value={formData.description} onChange={e => handleChange(e)}
                    className="border-2 bg-gray-950 border-gray-800 rounded-2xl p-4 mb-4"
                />

                <div className="flex justify-around flex-wrap gap-4">
                    <input type="date" name="until" value={formData.until} onChange={e => handleChange(e)}
                        className="flex-3 border-2 bg-gray-950 border-gray-800 rounded-2xl p-4 mb-4"
                    />

                    <input type="time" name="until" value={formData.until} onChange={e => handleChange(e)}
                        className="flex-1 border-2 bg-gray-950 border-gray-800 rounded-2xl p-4 mb-4"
                    />
                </div>

            </div>
            <button className="justify-center items-center w-full bg-amber-950 transition hover:bg-amber-950/75 p-4 cursor-pointer flex gap-2 border-2 border-amber-900 rounded-2xl mb-6"
                onClick={() => {
                    // TODO
                    update();
                }}
            >
                Create
            </button>

            <div>
                <table className="table-auto bg-gray-900 rounded-2xl">
                    <thead className="flex justify-evenly gap-4 min-w-2xl bg-gray-800 rounded-2xl">
                        <tr className="flex justify-evenly gap-4 min-w-2xl p-4">
                            <th>To Do</th>
                            <th>Priority</th>
                            <th>Description</th>
                            <th>Until</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.length > 0 && todos.map((task, index) => (
                                <tr key={index} className="flex justify-evenly gap-4 min-w-2xl p-2">
                                    <td>{task.name}</td>
                                    <td>{task.priority}</td>
                                    {/* <td>
                                        {task.description.length > 20 ? task.description.substring(0, 10) + "..." : task.description}
                                    </td> */}
                                    <td>{task.until}</td>
                                    <td>{task.completed ? "Done" : "In Progress"}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>



        </div>
    )
}
