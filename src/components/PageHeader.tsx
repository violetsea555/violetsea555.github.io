import Link from "next/link";

export default function PageHeader() {
  return (
    <header className="sticky top-0 z-50 w-full flex items-center px-4 py-3 bg-white/80 dark:bg-sky-950 backdrop-blur-sm">
      <Link
        href="/"
        className="text-sm font-medium font-heading hover:underline"
      >
        ← Back to Town
      </Link>
    </header>
  );
}
