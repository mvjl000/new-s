import Link from "next/link";

export const Header = () => {
  return (
    <header className="p-5">
      <Link
        href="/"
        className="font-Playfair text-5xl lg:text-6xl tracking-wider text-slate-600"
      >
        New<span className="tracking-tight text-orange-500">{"(s)"}</span>
      </Link>
    </header>
  );
};
