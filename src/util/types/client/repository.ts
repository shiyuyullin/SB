// subject to change
export interface Repository {
  id: number;
  repoName: string;
  author: string | null | undefined;
  language: string | null;
  size: number; // size/1000 is Mb
  visibility: string | undefined;
  forks: number;
  watchers: number;
  url: string;
  description: string | null;
}
