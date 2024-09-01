import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full bg-blue-950">
        <div className="h-50 w-30 text-center rounded-xl bg-slate-400 p-10">
          This assignment is related to basics of navigation and routes.
          <br />
          <Link
            href="/name"
            className="font-extrabold text-emerald-900 underline hover:text-blue-600"
          >
            Go to name page
          </Link>
        </div>
      </div>
    </>
  );
}
