// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { z, defineCollection } from "astro:content";

const productsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      id: z.number(),
      imgMain: image(),
      imgMainAlt: z.string(),
      images: z.array(z.object({ image: image(), imgAlt: z.string() })),
      youtube: z.string().optional(),
      manualURL: z.string(),
      modularGridURL: z.string(),

      highlightsList: z.array(
        z.object({
          title: z.string(),
          subTitle: z.string(),
        }),
      ),
      specifications: z.object({
        "current+12": z.string(),
        "current-12": z.string(),
        HP: z.string(),
        depth: z.string(),
        inputImpeadence: z.string(),
        outputImpeadence: z.string(),
        extra: z.string().optional(),
      }),
    }),
});

export const collections = {
  products: productsCollection,
};
