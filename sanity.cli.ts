const sanityCliConfig = {
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_project_id",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  },
};

export default sanityCliConfig;
