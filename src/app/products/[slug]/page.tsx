import React from "react";

interface Todo {
  todo: string;
  userId: number;
  completed: boolean;
}

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const todo : Todo = await fetch(`https://dummyjson.com/todos/${slug}`).then((res) =>
    res.json(),
  );
  return (
    <div>
      <h1>Title : {todo.todo}</h1>
      <p>created by : {todo.userId}</p>
      <p>completed : {todo.completed ? "yes" : "no"}</p>
    </div>
  );
}
