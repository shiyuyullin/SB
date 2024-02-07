import {
  SearchContext,
  SearchDispatchContext,
} from "@/util/contexts/searchContext";
import { Repository } from "@/util/types/client/repository";
import { ChangeEvent, FormEvent, useContext, useState } from "react";

interface SearchBarProps {
  shouldDisplaySpinner: any;
}

export function SearchBar(props: SearchBarProps) {
  const results = useContext(SearchContext);
  const dispatch = useContext(SearchDispatchContext);
  const [searchInput, setSearchInput] = useState("");

  function handleOnInputChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchInput(e.target.value);
  }

  async function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    /* NOTE: encountered a situation where I searched twice with same keywords
            react tried to display repos with same IDs and causing error
    */
    // check if there are repositories being displayed
    if (results?.repos) {
      dispatch!({ type: "clear" });
    }
    props.shouldDisplaySpinner(true);
    const responseJSON = await (await reqForRepo(searchInput)).json();
    // clearing the input after submitting
    setSearchInput("");
    const repos: Repository[] = responseJSON.repos;
    dispatch!({ type: "add", results: repos });
    props.shouldDisplaySpinner(false);
  }

  async function reqForRepo(keywords: String) {
    const response = await fetch("http://localhost:3000/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ keywords: keywords }),
    });

    return response;
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <label
        htmlFor="searchInput"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="searchInput"
          name="searchInput"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Languages, Frameworks..."
          required
          value={searchInput}
          onChange={(e) => handleOnInputChange(e)}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
}
