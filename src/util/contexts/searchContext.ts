import { Dispatch, createContext } from "react";
import { SearchState } from "../types/client/searchState";
import { Repository } from "../types/client/repository";

export const SearchContext = createContext<SearchState | null>(null);
export const SearchDispatchContext =
  createContext<Dispatch<SearchAction> | null>(null);

type SearchAction = { type: "clear" } | { type: "add"; results: Repository[] };

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

// initial value will always be empty
export const initialSearchResults: SearchState = {
  repos: [],
};
