import Link from "next/link";

export function Header() {
  return (
    <div className="flex items-center gap-3">
      <div className="text-slate-800">
        <Link
          href="/"
          className="tracking-tighter transition-colors hover:text-blue-500"
        >
          <div className="text-xl font-medium">Blog - Leonardo Betti</div>
        </Link>
        <div className="text-[0.875rem] text-slate-500 md:text-xs">
          aka{" "}
          <a
            target="_blank"
            className="underline"
            href="https://github.com/leonardobetti"
          >
            @leonardobetti
          </a>
        </div>
      </div>
    </div>
  );
}
