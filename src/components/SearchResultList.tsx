import { SearchContext } from "@/util/contexts/searchContext";
import { useContext, useState } from "react";
import { RepoCard } from "./RepoCard";
import { Repository } from "@/util/types/client/repository";
import { Paginator } from "./Paginator";

export function SearchResultsList() {
  const searchResults = useContext(SearchContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(12);

  if (searchResults?.repos.length === 0) {
    return null;
  }

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;

  const repos: Repository[] = searchResults!.repos.slice(
    indexOfFirstRepo,
    indexOfLastRepo
  );

  const nextPage = () => {
    if (!((currentPage + 1) * reposPerPage > searchResults!.repos.length)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (!((currentPage - 1) * reposPerPage - reposPerPage < 0)) {
      setCurrentPage(currentPage - 1);
    }
  };

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
    <div className="container mx-auto py-3">
      <div className="grid grid-cols-4 gap-4">{repoCardList}</div>
      <Paginator nextPage={nextPage} previousPage={previousPage} />
    </div>
  );
}
