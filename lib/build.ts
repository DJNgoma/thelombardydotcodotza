const rawBuildId =
  process.env.NEXT_PUBLIC_SITE_BUILD_ID ??
  process.env.CF_PAGES_COMMIT_SHA ??
  process.env.GITHUB_SHA ??
  process.env.VERCEL_GIT_COMMIT_SHA ??
  process.env.npm_package_version ??
  "development";

export const siteBuildId = rawBuildId.slice(0, 12);
