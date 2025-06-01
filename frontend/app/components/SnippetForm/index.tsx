export function SnippetForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="mx-full mb-4">
      <div className="mb-4">
        <textarea
          id="text"
          name="text"
          rows={8}
          className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your code snippet here..."
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span className="text-white">
          Create Snippet
        </span>
      </button>
    </form>
  );
}
