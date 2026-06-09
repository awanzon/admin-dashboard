type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      {/* Prev Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded bg-zinc-700 text-white hover:bg-zinc-600 disabled:opacity-40 cursor-not-allowed"
      >
        Prev
      </button>

      {/* Page Number */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded front-semibold ${
            page === currentPage
              ? "bg-red-600 text-white"
              : "bg-zinc-700 text-white hover:bg-zinc-600"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded bg-zinc-700 text-white hover:bg-zinc-600 disabled:opacity-40 cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
