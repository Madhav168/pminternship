import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-screen md:h-153 flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 text-gray-900  sm:py-24">
      <h1 className="text-5xl sm:text-7xl font-extrabold mb-4 text-center text-orange-500">
        404
      </h1>
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
        Page <span className="text-blue-900">Not</span> Found
      </h2>
      <p className="text-base sm:text-lg max-w-md text-center mb-8 text-gray-600">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-md font-medium text-white bg-green-600 hover:bg-green-800 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Go Back Home
      </Link>
    </main>
  );
}
