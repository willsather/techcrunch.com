import { flag } from "@vercel/flags/next";

export const searchResultsFlag = flag<boolean>({
  key: "search-results-flag",
  defaultValue: false,
  description: "enable displaying count of search results on /search",
  decide() {
    return false;
  },
});
