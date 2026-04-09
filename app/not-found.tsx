import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center justify-center bg-[#f8f5ee] text-[#2a332b] font-sans">
        <div className="text-center px-6">
          <h1 className="text-3xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page not found</h2>
          <p className="text-lg mb-8 text-[#5f6561]">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-block rounded-lg bg-[#307b34] px-6 py-3 text-white font-semibold hover:bg-[#19601f] transition-colors"
          >
            Back to home
          </Link>
        </div>
      </body>
    </html>
  );
}
