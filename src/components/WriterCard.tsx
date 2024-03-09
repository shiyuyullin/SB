import Link from "next/link";

interface Props {
  id: number;
  name: string | null;
  email: string | null;
  imageUrl: string | null;
}

export default function WriterCard(props: Props) {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10">
        <img
          src={props.imageUrl!}
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          alt={props.name ? props.name : "alternate text"}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {props.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {props.email}
        </span>
        <div className="flex mt-4 md:mt-6">
          <Link
            href={`writer/${props.id}`}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View posts
          </Link>
          <Link
            href="#"
            className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Message
          </Link>
        </div>
      </div>
    </div>
  );
}
