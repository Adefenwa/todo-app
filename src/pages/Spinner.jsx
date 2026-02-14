export default function Spinner() {
  return (
    <div className="h-[60vh] flex flex-col items-center justify-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      <p>Loading Page...</p>
    </div>
  );
}
