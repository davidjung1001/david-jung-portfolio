import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t mt-16 py-8 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md">
      <div className="max-w-5xl mx-auto text-center px-4">

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} David Jung — All Rights Reserved.
        </p>

        <div className="flex justify-center gap-6 mt-4 text-sm">
          <Link href="/projects" className="hover:text-blue-500">Projects</Link>
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
        </div>

      </div>
    </footer>
  );
}
