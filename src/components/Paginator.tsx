interface PaginatorProps {
  nextPage: any;
  previousPage: any;
}

export function Paginator(props: PaginatorProps) {
  return (
    <div className="flex container mx-auto py-3">
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          props.previousPage();
        }}
        className="flex items-center justify-center mx-auto px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Previous
      </a>

      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          props.nextPage();
        }}
        className="flex items-center justify-center mx-auto px-4 h-10 ms-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Next
      </a>
    </div>
  );
}
