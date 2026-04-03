const PROJECT_ID_PATTERN = /^[a-z0-9-]+$/;

function readRequiredEnv(name: string) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

const projectId = readRequiredEnv("SANITY_STUDIO_PROJECT_ID");
const dataset = readRequiredEnv("SANITY_STUDIO_DATASET");

if (!projectId) {
  throw new Error("Missing Sanity project ID.");
}

if (!PROJECT_ID_PATTERN.test(projectId)) {
  throw new Error(
    `Invalid Sanity projectId "${projectId}". Expected only lowercase letters, digits, and dashes.`
  );
}

if (!dataset) {
  throw new Error("Missing Sanity dataset.");
}

const sanityCliConfig = {
  api: {
    projectId,
    dataset,
  },
};

export default sanityCliConfig;
