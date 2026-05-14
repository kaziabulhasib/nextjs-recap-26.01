import Link from "next/link";

interface Todo {
  todo: string;
  id: number;
  userId: number;
  completed: boolean;
}

export default async function Products() {
  const res = await fetch("https://dummyjson.com/todos");

  const data = await res.json();

  const todos = data.todos;

  //   console.log("dummy data count ", data);

  return (
    <div>
      <h1>total todos : {data.total}</h1>

      <div className='my-6 p-2 border-2 border-blue-400 grid grid-cols-3 gap-4'>
        {todos.map((todo: Todo) => (
          <div
            key={todo.id}
            className={`border border-amber-500  p-4 ${todo.completed ? "" : "bg-red-500"}`}>
            <h1 className='h-6 truncate'>{todo.todo}</h1>
            <p> id: {todo.id}</p>
            <Link href={`/products/${todo.id}`}>
              <button className='border border-neutral-700 dark:border-neutral-200 px-2 py-1 my-2 rounded-md cursor-pointer hover:opacity-80'>
                details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
