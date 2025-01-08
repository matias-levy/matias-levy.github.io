// import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "MLA Labs",
  tagline: "Eurorack developments",
  description:
    "MLA Labs is a small argentinian business focused on developing and distributing original Eurorack modules focused on versatibility on small systems.",
  description_short: "MLA Labs is a business focused on Eurorack modules.",
  url: "https://mlalabs.xyz/",
  author: "MLA Labs",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Eurorack developments`,
  description:
    "MLA Labs is a small argentinian business focused on developing and distributing original Eurorack modules focused on versatibility on small systems.",
  // image: ogImageSrc,
};
