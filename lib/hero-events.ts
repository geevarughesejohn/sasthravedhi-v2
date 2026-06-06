import fs from "node:fs";
import path from "node:path";

const HERO_EVENTS_DIR = path.join(
  process.cwd(),
  "public/images/hero/events",
);

const IMAGE_EXT = /\.(avif|gif|jpe?g|png|webp)$/i;

export type HeroEventImage = {
  src: string;
  alt: string;
  filename: string;
};

/** Turn `01-science-camp.jpg` into a readable caption */
function captionFromFilename(filename: string): string {
  return filename
    .replace(/^\d+[-_ ]*/, "")
    .replace(IMAGE_EXT, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Reads event photos from public/images/hero/events/.
 * Add or remove files in that folder — no code changes needed (restart dev / rebuild).
 */
export function getHeroEventImages(): HeroEventImage[] {
  if (!fs.existsSync(HERO_EVENTS_DIR)) {
    return [];
  }

  return fs
    .readdirSync(HERO_EVENTS_DIR)
    .filter((name) => IMAGE_EXT.test(name) && !name.startsWith("."))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((filename) => ({
      filename,
      src: `/images/hero/events/${filename}`,
      alt: captionFromFilename(filename),
    }));
}

/** Folder path for your reference (relative to project root) */
export const heroEventsFolder = "public/images/hero/events";
