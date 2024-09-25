import Link from "next/link";

export function Header() {
  return (
    <header className="full py-4 bg-gray-900 flex items-center justify-center shadow-lg">
      <div className="flex items-center justify-between w-11/12 max-w-[720px]">
        <Link href="/">
          <h1>chatt.in</h1>
        </Link>

        <Link className="text-gray-400 hover:text-gray-50" href="/login">
          Login
        </Link>
      </div>
    </header>
  );
}
