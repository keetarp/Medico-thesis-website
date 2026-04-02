import "server-only";
import { createClient } from "next-sanity";

const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-15";

export const sanityEnabled = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_DATASET
);

export const sanityClient = sanityEnabled
  ? createClient({
      apiVersion,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
      useCdn: false,
      token: process.env.SANITY_API_READ_TOKEN,
      perspective: "published",
    })
  : null;
