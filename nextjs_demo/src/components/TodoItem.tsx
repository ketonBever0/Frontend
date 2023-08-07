"use client"

type Todo = {
    id: string;
    title: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
    toggleTodo: (id: string, complete: boolean) => void;
}

export function TodoItem(todo: Todo) {


    return (
        <li className="flex gap-1 items-center">
            <input id={todo.id} type="checkbox" className="cursor-pointer peer"
                defaultChecked={todo.completed}
                onChange={e => todo.toggleTodo(todo.id, e.target.checked)}
            />
            <label htmlFor={todo.id}
                className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
            >{todo.title}</label>
        </li>
    )

}