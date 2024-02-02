import { Dispatch, createContext } from "react";
import { SearchState } from "../types/searchReducerState";
import { SearchResult } from "../types/searchResult";

export const SearchContext = createContext<SearchState | null>(null);
export const SearchDispatchContext =
  createContext<Dispatch<SearchAction> | null>(null);

type SearchAction =
  | { type: "clear" }
  | { type: "add"; results: SearchResult[] };

export function searchReducer(
  state: SearchState,
  action: SearchAction
): SearchState {
  switch (action.type) {
    case "add":
      return {
        repos: [...state.repos, ...action.results],
      };
    case "clear":
      return { repos: [] };
    default:
      return { repos: [...state.repos] };
  }
}

// hardcoded for now
export const initialSearchResults: SearchState = {
  repos: [{ repoName: "repo1", author: "author1", message: "nothinghere" }],
};
