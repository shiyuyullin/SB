import { SearchContext } from "@/util/contexts/searchContext";
import { useContext } from "react";
import { RepoCard } from "./RepoCard";
import { Repository } from "@/util/types/client/repository";

export function SearchResults() {
  const results = useContext(SearchContext);

  if (results?.repos.length === 0) {
    return null;
  }

  const repos: Repository[] = results!.repos;

  const repoCardList = repos.map((repo) => (
    <RepoCard
      key={repo.id} // this 'key' helps React to identify each component in the list
      id={repo.id}
      repoName={repo.repoName}
      author={repo.author}
      language={repo.language}
      size={repo.size}
      visibility={repo.visibility}
      forks={repo.forks}
      watchers={repo.watchers}
      url={repo.url}
      description={repo.description}
    />
  ));

  return (
    <div>
      <h1>display search results here</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {repoCardList}
      </div>
    </div>
  );
}
