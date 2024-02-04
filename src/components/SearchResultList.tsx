import { SearchContext } from "@/util/contexts/searchContext";
import { useContext } from "react";
import { RepoCard } from "./RepoCard";

export function SearchResults() {
  const results = useContext(SearchContext);

  console.log(results?.repos.length);

  if (results?.repos.length === 0) {
    return null;
  }

  return (
    <div>
      <h1>display search results here</h1>
      <RepoCard repoName={"repo1"} author={"author1"} message={"message1"} />
    </div>
  );
}
