import { flag } from "@vercel/flags/next";

export const upcomingEventsFlag = flag<boolean>({
  key: "upcoming-events-flag",
  defaultValue: false,
  description: "enable upcoming events section on home page",
  decide() {
    return Math.random() > 0.5;
  },
});

export const latestSuspenseFlag = flag<boolean>({
  key: "latest-suspense-flag",
  defaultValue: false,
  description: "enable suspense rendering for latest news page",
  decide() {
    return false;
  },
});
