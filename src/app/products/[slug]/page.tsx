import React from "react";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const todo = await fetch(`https://dummyjson.com/todos/${slug}`).then((res) =>
    res.json(),
  );
  return <div>ProductDetails of id {todo.id}</div>;
}
