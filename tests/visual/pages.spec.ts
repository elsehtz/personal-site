import { test, expect } from "@playwright/test";

const pages = [
  ["home", "/"],
  ["blog", "/blog"],
  ["software", "/software"],
  ["builds", "/builds"],
  ["projects", "/projects"],
  ["digital-journal", "/digital-journal"],
  ["hobbies", "/hobbies"],
  ["baking", "/hobbies/baking"],
  ["boxing", "/hobbies/boxing"],
  ["books", "/hobbies/books"],
  ["professional", "/professional"],
] as const;

// Remove sources of nondeterminism: WebGL hero, custom cursor, noise overlay, GSAP entrances.
const stabilize = `
  canvas, #cursor-dot, #cursor-ring, .cursor-dot, .cursor-ring { visibility: hidden !important; }
  body::before { display: none !important; }
  .reveal { opacity: 1 !important; transform: none !important; }
  *, *::before, *::after { transition: none !important; animation: none !important; caret-color: transparent !important; }
`;

for (const [name, path] of pages) {
  test(`visual: ${name}`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(path, { waitUntil: "networkidle" });
    await page.addStyleTag({ content: stabilize });
    await page.evaluate(() => document.fonts.ready);
    await expect(page).toHaveScreenshot(`${name}.png`, { fullPage: true });
  });
}
