"use client"
import { useRouter } from "next/navigation";

export default function NotFound() {

    const router = useRouter();
  return (

    <div>
        <h1>this page does not exist</h1>
        <button type="button" className="cursor-pointer" onClick={() => router.push("/")}>Back to home </button>

    </div>
  );
}
