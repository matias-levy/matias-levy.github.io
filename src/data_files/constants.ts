// import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "MLA labs",
  tagline: "Eurorack developments",
  description:
    "MLA Labs is a small argentinian business focused on developing and distributing original Eurorack modules focused on versatibility on small systems.",
  description_short: "MLA Labs is a business focused on Eurorack modules.",
  url: "https://screwfast.uk",
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
  title: `${SITE.title}: : Hardware Tools & Construction Services`,
  description:
    "Equip your projects with ScrewFast's top-quality hardware tools and expert construction services. Trusted by industry leaders, ScrewFast offers simplicity, affordability, and reliability. Experience the difference with user-centric design and cutting-edge tools. Start exploring now!",
  // image: ogImageSrc,
};
