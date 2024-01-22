export const PRODUCT_CATEGORIES = [
  {
    label: "Toys",
    value: "toys" as const,
    featured: [
      {
        name: "Curated Collection",
        href: "#",
        imageSrc: "/nav/toys/collection.webp",
      },
      {
        name: "New Products",
        href: "#",
        imageSrc: "/nav/toys/new.webp",
      },
      {
        name: "Most Popular",
        href: "#",
        imageSrc: "/nav/toys/popular.png",
      },
    ],
  },
  {
    label: "Clothing",
    value: "clothing" as const,
    featured: [
      {
        name: "Curated Collection",
        href: "#",
        imageSrc: "/nav/clothing/collection.jpg",
      },
      {
        name: "New Products",
        href: "#",
        imageSrc: "/nav/clothing/new.webp",
      },
      {
        name: "Most Popular",
        href: "#",
        imageSrc: "/nav/clothing/popular.jpg",
      },
    ],
  },
];
