import { SearchBar } from "@/components/SearchBar";
import { SearchResults } from "@/components/SearchResults";
import {
  SearchContext,
  SearchDispatchContext,
  initialSearchResults,
  searchReducer,
} from "@/util/contexts/searchContext";
import { useReducer } from "react";

export default function searchGitHub() {
  const [state, dispatch] = useReducer(searchReducer, initialSearchResults);

  return (
    <SearchContext.Provider value={state}>
      <SearchDispatchContext.Provider value={dispatch}>
        <div>
          <h1>this is a page for Github</h1>
          <SearchBar />
          <SearchResults />
        </div>
      </SearchDispatchContext.Provider>
    </SearchContext.Provider>
  );
}
