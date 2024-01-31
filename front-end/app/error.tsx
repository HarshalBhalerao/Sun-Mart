"use client"; // Error components must be Client Components

export default function Error() {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div className="error-page min-h-screen flex items-center justify-center bg-gray-800">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-red-600 mb-6">Oops!</h1>
        <p className="text-3xl text-gray-300 font-medium mb-4">
          Something went wrong. Please try again later.
        </p>
        <button
          className="px-6 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors"
          onClick={refreshPage}
        >
          Reload Page
        </button>
      </div>
    </div>
  );
}
