import { flag } from "@vercel/flags/next";

export const upcomingEventsFlag = flag<boolean>({
  key: "upcoming-events-flag",
  decide() {
    return Math.random() > 0.5;
  },
});
