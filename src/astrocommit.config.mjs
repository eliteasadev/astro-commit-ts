import { createCommit } from "astro-commit-ts";

createCommit().catch((error) => {
  console.error("Error:", error);
});