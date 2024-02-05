import { Repository } from "@/util/types/client/repository";

export function RepoCard(repo: Repository) {
  return (
    <a
      href={repo.url}
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {repo.repoName}
      </h5>
      {repo.description ? (
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {repo.description}
        </p>
      ) : null}
      {repo.author ? (
        <span className="inline-flex my-2 bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
          {repo.author}
        </span>
      ) : null}
      {repo.language ? (
        <span className="inline-flex my-2 bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
          {repo.language}
        </span>
      ) : null}
      <span className="inline-flex my-2 bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
        {repo.size / 1000}Mb
      </span>
      {repo.visibility ? (
        <span className="inline-flex my-2 bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
          {repo.visibility}
        </span>
      ) : null}
      <span className="inline-flex my-2 bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
        #forks:{repo.forks}
      </span>
      <span className="inline-flex my-2 bg-pink-100 text-pink-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
        #watchers:{repo.watchers}
      </span>
    </a>
  );
}
