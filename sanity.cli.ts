const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

console.log(`Sanity Project: ${projectId}, Dataset: ${dataset}`);

export const config = {
  projectId,
  dataset,
};
