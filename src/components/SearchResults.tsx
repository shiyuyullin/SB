import { SearchContext } from "@/util/contexts/searchContext";
import { useContext } from "react";

export function SearchResults() {
  const results = useContext(SearchContext);

  console.log(results?.repos);

  return (
    <div>
      <h1>display search results here</h1>
    </div>
  );
}
