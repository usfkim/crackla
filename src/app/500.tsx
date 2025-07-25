export default function ServerError() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">500 - Server Error</h1>
      <p className="mt-4 text-lg">
        Sorry, something went wrong on our end. Please try again later.
      </p>
    </div>
  );
}
