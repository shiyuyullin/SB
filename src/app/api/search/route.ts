import { Octokit } from "octokit";
import { SearchReposResponse } from "@/util/types/server/searchReposResponse";
import { Repository } from "@/util/types/client/repository";

// Create octokit for accessing github api
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

// POST /api/search
export async function POST(req: Request) {
  const bodyJSON = await req.json();
  const Rawkeywords = bodyJSON.keywords;
  if (!Rawkeywords) {
    return Response.json(
      { message: "missing required information." },
      { status: 400 }
    );
  }
  // keywords ready to be used for search
  const keywords: string = Rawkeywords.replaceAll(" ", "+");

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
  return Response.json({ repos: repos }, { status: 200 });
}

function TrimDescription(description: string | null): string | null {
  if (!description) return null;

  if (description.length > 250) {
    return description.substring(0, 251);
  }
  return description;
}
