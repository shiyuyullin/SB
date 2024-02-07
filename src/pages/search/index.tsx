import { SearchBar } from "@/components/SearchBar";
import { SearchResultsList } from "@/components/SearchResultList";
import { Spinner } from "@/components/Spinner";
import {
  SearchContext,
  SearchDispatchContext,
  initialSearchResults,
  searchReducer,
} from "@/util/contexts/searchContext";
import { Suspense, useReducer, useState } from "react";

export default function searchGitHub() {
  const [state, dispatch] = useReducer(searchReducer, initialSearchResults);

  const [displaySpinner, setDisplaySpinner] = useState(false);

  const shouldDisplaySpinner = (shouldDisplay: boolean) => {
    if (shouldDisplay) setDisplaySpinner(true);
    else setDisplaySpinner(false);
  };

  return (
    <SearchContext.Provider value={state}>
      <SearchDispatchContext.Provider value={dispatch}>
        <div className="container mx-auto px-4 py-4">
          <SearchBar shouldDisplaySpinner={shouldDisplaySpinner} />
          <SearchResultsList />
          {displaySpinner ? <Spinner /> : null}
        </div>
      </SearchDispatchContext.Provider>
    </SearchContext.Provider>
  );
}
