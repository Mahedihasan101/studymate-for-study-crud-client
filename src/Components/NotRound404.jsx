export default function NotFound404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you're looking for does not exist.</p>
      <a
        href="/"
        className="px-6 py-3 rounded-2xl shadow bg-gray-900 text-white hover:opacity-80 transition"
      >
        Go Back Home
      </a>
    </div>
  );
}
