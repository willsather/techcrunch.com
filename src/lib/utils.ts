import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatTimeSince(date: Date): string {
  const totalSeconds = Math.floor((Date.now() - date.getTime()) / 1000);

  if (totalSeconds < 60) {
    return totalSeconds <= 1 ? "1 second ago" : `${totalSeconds} seconds ago`;
  }

  const totalMinutes = Math.floor(totalSeconds / 60);
  if (totalMinutes < 60) {
    return totalMinutes === 1 ? "1 minute ago" : `${totalMinutes} minutes ago`;
  }

  const totalHours = Math.floor(totalMinutes / 60);
  if (totalHours < 24) {
    return totalHours === 1 ? "1 hour ago" : `${totalHours} hours ago`;
  }

  const totalDays = Math.floor(totalHours / 24);

  return totalDays === 1 ? "1 day ago" : `${totalDays} days ago`;
}
