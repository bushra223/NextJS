"use client";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  return (
    <div className="w-full h-screen bg-blue-950 p-5 text-center text-blue-50">
      My name is Bushra.
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          router.push("./name/address");
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Get address!
      </button>
    </div>
  );
}

export default Page;
