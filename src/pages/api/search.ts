import { NextApiRequest, NextApiResponse } from "next";
import { RestEndpointMethodTypes } from "@octokit/plugin-rest-endpoint-methods";
import { Octokit } from "octokit";
import { SearchReposResponse } from "@/util/types/server/searchReposResponse";

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
        per_page: 10,
      });

    const items = responseFromGitAPI.data.items;

    res.status(200).json({ message: "success" });
  } else {
    res.status(404).json({});
  }
}
