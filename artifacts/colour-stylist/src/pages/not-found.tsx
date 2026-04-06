import { Link } from "wouter";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center bg-[hsl(350,30%,97%)]">
      <div className="text-center px-6">
        <p className="section-label mb-4">404</p>
        <h1
          className="font-serif text-[hsl(220,15%,22%)] text-4xl font-medium mb-4 tracking-wide"
        >
          Page not found
        </h1>
        <p className="text-[hsl(220,15%,45%)] text-base mb-8">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link href="/" className="btn-teal no-underline">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
