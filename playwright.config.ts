import { defineConfig, devices } from "@playwright/test";

// Point at a Vercel preview with BASE_URL; otherwise run against a local dev server.
const baseURL = process.env.BASE_URL || "http://localhost:4321";
const bypass = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;

export default defineConfig({
  testDir: "./tests/visual",
  // Platform-free names: baselines are generated on the CI Linux runner only.
  snapshotPathTemplate: "{testDir}/__snapshots__/{testFilePath}/{projectName}/{arg}{ext}",
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",
  expect: { toHaveScreenshot: { maxDiffPixelRatio: 0.01, animations: "disabled" } },
  use: {
    baseURL,
    trace: "retain-on-failure",
    extraHTTPHeaders: bypass
      ? { "x-vercel-protection-bypass": bypass, "x-vercel-set-bypass-cookie": "true" }
      : undefined,
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], viewport: { width: 1280, height: 800 } } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
  webServer: process.env.BASE_URL
    ? undefined
    : { command: "npm run dev", url: baseURL, reuseExistingServer: true, timeout: 120_000 },
});
