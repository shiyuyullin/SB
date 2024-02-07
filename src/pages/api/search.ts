import { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "octokit";
import { SearchReposResponse } from "@/util/types/server/searchReposResponse";
import { Repository } from "@/util/types/client/repository";

// Create octokit for accessing github api
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

// POST /api/search
export default async function SearchHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const body = req.body;
    if (!body.keywords) {
      return res.status(400).json({ message: "missing required information." });
    }
    // keywords ready to be used for search
    const keywords: string = body.keywords.replaceAll(" ", "+");

    const responseFromGitAPI: SearchReposResponse =
      await octokit.rest.search.repos({
        q: keywords,
        sort: "stars",
        order: "desc",
        per_page: 120,
      });

    const items = responseFromGitAPI.data.items;
    const repos: Repository[] = [];

    items.forEach((item) => {
      const trimedDescription = TrimDescription(item.description);
      repos.push({
        id: item.id,
        repoName: item.name,
        author: item.owner?.login,
        language: item.language,
        size: item.size,
        visibility: item.visibility,
        forks: item.forks,
        watchers: item.watchers,
        url: item.html_url,
        description: trimedDescription,
      });
    });
    res.status(200).json({ repos: repos });
  } else {
    res.status(404).json({});
  }
}

function TrimDescription(description: string | null): string | null {
  if (!description) return null;

  if (description.length > 250) {
    return description.substring(0, 251);
  }
  return description;
}
