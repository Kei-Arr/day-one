import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "ucu3tn1r",
  dataset: "production",
  apiVersion: "2025-07-09",
  useCdn: false,
});