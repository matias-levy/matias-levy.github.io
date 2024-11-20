// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Products", url: "/products" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Site map",
    links: [
      { name: "Home", url: "/" },
      { name: "About", url: "/about" },
      { name: "Products", url: "/products" },
      { name: "Contact Us", url: "/contact" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/MLA.labs",
  instagram: "https://www.instagram.com/mla.labs/",
  youtube: "https://www.youtube.com/@MLALabs",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
