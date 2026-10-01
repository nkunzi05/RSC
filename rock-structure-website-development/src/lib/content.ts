export const company = {
  name: "Rock Structure Construction (Pvt) Ltd",
  shortName: "Rock Structure Construction",
  tagline: "The Construction Hub",
  phone: "+263 719 513 637",
  phoneHref: "tel:+263719513637",
  whatsappHref: "https://wa.me/263719513637",
  email: "sales@rockstructure.construction",
  harare: "17032 Carlton Road, Granitesite, Harare, Zimbabwe",
  chinhoyi: "5429 Glassgow Road, Industrial site, Chinhoyi",
  facebook: "https://www.facebook.com/RockStructureConstruction",
  instagram: "https://www.instagram.com/rockstructureconstruction",
  maps: "https://maps.app.goo.gl/VP25aGExjmoNuY4u7",
  logo: "https://rockstructure.construction/wp-content/uploads/2021/11/rockstructure_construction_logo.png",
  smallLogo: "https://rockstructure.construction/wp-content/uploads/2021/08/rockstructure_construction_logo-small.png",
  headerLogo: "/images/brand/rock-structure-mark.png",
  favicon: "https://rockstructure.construction/wp-content/uploads/2021/11/cropped-rockstructure_construction_favicon-270x270.png",
  mission:
    "Rock Structure Construction strives to be a world class construction company serving customers with high quality services and products.",
  background:
    "Rock Structure Construction (Pvt) Limited is a wholly owned Zimbabwean company. The company specialises in building construction, road construction, driveway construction, dam construction, irrigation installation, water and sewer reticulation.",
  capabilities:
    "Some of the services are: plan drawing, bill of materials, bricklaying, concreting, painting, plumbing, electrical installations, roof/floor/wall tiling, carpentry works and hardware supplies. Rock Structure Construction is headquartered in Harare, Zimbabwe.",
  values:
    "It is our belief to serve customers with world class standards on all our areas of speciality at a fair price meeting the required deadlines. We command confidentiality and respect at all business levels and guard jealously the mutual task which exists between Rock Structure Construction (Pvt) Limited and its valued customers.",
} as const;

export type Service = {
  title: string;
  number: string;
  description: string;
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    title: "Building construction",
    number: "01",
    description: "Building construction & maintenance",
    image: "/images/services/building.jpg",
    alt: "Mount Pleasant house extension and renovations",
  },
  {
    title: "Road construction",
    number: "02",
    description: "Road construction & maintenance",
    image: "/images/services/roads.jpg",
    alt: "Access road upgrade at Nyaboko Fuels",
  },
  {
    title: "Driveway construction",
    number: "03",
    description: "Driveway construction & maintenance",
    image: "/images/services/driveways.jpg",
    alt: "Pokugara Borrowdale project with driveways and drainage",
  },
  {
    title: "Dam construction",
    number: "04",
    description: "Dam construction & maintenance",
    image: "/images/services/dams.jpg",
    alt: "A concrete dam wall retaining water, illustrating dam construction and maintenance",
  },
  {
    title: "Irrigation systems",
    number: "05",
    description: "Irrigation systems installation & repair",
    image: "/images/services/irrigation.jpg",
    alt: "Gwandu Mine tank installation project",
  },
  {
    title: "Water and sewer reticulation",
    number: "06",
    description: "Water and sewer reticulation",
    image: "/images/services/reticulation.jpg",
    alt: "Glaudina storm drain project",
  },
  {
    title: "Architectural designs",
    number: "07",
    description: "Architectural Designs (2D & 3D Plan Drawings)",
    image: "/images/services/architectural.jpg",
    alt: "3D drawing for the Dema project",
  },
];

export type Product = {
  name: string;
  group: string;
  description: string;
  image: string;
  alt: string;
};

export const products: Product[] = [
  {
    name: "Cement",
    group: "Sub & Superstructures",
    description: "Listed by the company under Sub & Superstructures products.",
    image: "https://rockstructure.construction/wp-content/uploads/2021/11/sub-and-superstructures-products-784x700.jpg",
    alt: "Sub and superstructures products",
  },
  {
    name: "Purlines",
    group: "Carpentry",
    description: "Listed by the company under Carpentry products.",
    image: "https://rockstructure.construction/wp-content/uploads/2021/11/capentry-products-784x700.jpg",
    alt: "Carpentry products including timber and boards",
  },
  {
    name: "Steel windows",
    group: "Iron Mongery",
    description: "Listed by the company under Iron Mongery products.",
    image: "https://rockstructure.construction/wp-content/uploads/2021/11/iron-mongery-products-784x700.jpg",
    alt: "Iron mongery products including steel windows",
  },
  {
    name: "Copper pipes",
    group: "Plumbing",
    description: "Listed by the company under Plumbing products.",
    image: "https://rockstructure.construction/wp-content/uploads/2021/11/plumbing-products-784x700.jpg",
    alt: "Plumbing products including pipes and connections",
  },
  {
    name: "Meter boxes",
    group: "Electricals",
    description: "Listed by the company under Electrical products.",
    image: "https://rockstructure.construction/wp-content/uploads/2021/11/electrical-products-784x700.jpg",
    alt: "Electrical products including distribution and meter boxes",
  },
  {
    name: "Glatex",
    group: "Paints",
    description: "Listed by the company under Paints products.",
    image: "https://rockstructure.construction/wp-content/uploads/2021/11/products-painting-784x700.jpg",
    alt: "Painting products including Glatex and floor coat",
  },
  {
    name: "Quarry stones",
    group: "Sub & Superstructures",
    description: "Listed by the company under Sub & Superstructures products.",
    image: "https://rockstructure.construction/wp-content/uploads/2021/11/sub-and-superstructures-products-784x700.jpg",
    alt: "Sub and superstructures products",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  description?: string;
  gallery?: string[];
};

const project = (
  slug: string,
  title: string,
  category: string,
  image: string,
  description?: string,
  gallery?: string[],
): Project => ({
  slug,
  title,
  category,
  image,
  alt: `Project image: ${title}`,
  description,
  gallery,
});

export const projects: Project[] = [
  project(
    "forecourt-pipework-installations-nyaboko-fuels",
    "Forecourt Pipework Installations – Nyaboko Fuels",
    "Service Station Construction",
    "https://rockstructure.construction/wp-content/uploads/2025/10/IMG-20250929-WA0096.jpg",
    "This project involved the installation of underground and above-ground pipework systems at the Nyaboko Fuels service station forecourt in Ziko. The scope included fuel piping, fittings, and connections to storage tanks and dispensers, ensuring safe, efficient, and compliant fuel flow management. High-quality materials and industry-standard practices were applied to guarantee durability, minimize leakage risks, and support seamless refueling operations. The completed pipework installations form a critical backbone of the forecourt infrastructure, enhancing safety and reliability for both motorists and station operators.",
  ),
  project(
    "ziko-food-court-development-nyaboko-fuels",
    "Ziko Food Court Development – Nyaboko Fuels",
    "Food Court / Service Station Construction",
    "https://rockstructure.construction/wp-content/uploads/2025/10/WhatsApp-Image-2025-09-26-at-20.11.27_d5db489d.jpg",
    "This project involved the development of a vibrant food court at the Nyaboko Fuels service station in Ziko. The scope covered structural construction, roofing, interior partitioning, electrical and plumbing installations, ventilation systems, and fit-out for multiple food outlets. Designed as a welcoming and functional space, the food court provides a variety of dining options for travelers, motorists, and the surrounding community.",
  ),
  project(
    "ziko-convenience-shop-construction-nyaboko-fuels",
    "Ziko Convenience Shop Construction – Nyaboko Fuels",
    "Shop Construction",
    "https://rockstructure.construction/wp-content/uploads/2025/10/IMG-20250929-WA0043.jpg",
    "This project focused on the construction of a modern convenience shop at the Nyaboko Fuels service station in Ziko. The scope included structural works, interior finishing, electrical and plumbing installations, as well as shelving and counter setups to support retail operations. The shop was designed with customer comfort and efficiency in mind, offering a clean, accessible, and well-organized space for motorists and the local community.",
  ),
  project(
    "mount-pleasant-house-extension-and-renovations",
    "Mount Pleasant House Extension and Renovations",
    "House Extension / Renovations",
    "https://rockstructure.construction/wp-content/uploads/2025/07/main-img.jpg",
    "This project involved a comprehensive extension and renovation of a family home in Mount Pleasant. The work included modernizing interior spaces, expanding the living area for improved functionality, and enhancing the property's overall aesthetic. The result is a stylish and spacious home that seamlessly blends contemporary design with everyday comfort.",
    [
      "https://rockstructure.construction/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-19-at-09.51.00_bd54ca0a.jpg",
      "https://rockstructure.construction/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-19-at-09.51.00_34a698be.jpg",
      "https://rockstructure.construction/wp-content/uploads/2025/08/IMG-20250819-WA0132.jpg",
      "https://rockstructure.construction/wp-content/uploads/2025/08/IMG-20250819-WA0131.jpg",
      "https://rockstructure.construction/wp-content/uploads/2025/07/Mount-Pleasant-house-5.jpg",
      "https://rockstructure.construction/wp-content/uploads/2025/08/IMG-20250819-WA0128.jpg",
    ],
  ),
  project(
    "access-road-upgrade-nyaboko-fuels",
    "Access Road Upgrade – Nyaboko Fuels",
    "Road Construction",
    "https://rockstructure.construction/wp-content/uploads/2025/07/Nyaboko-Fuels-Access-Road-Upgrade-1.jpg",
    "This project focused on the construction and upgrade of the access road leading to the Nyaboko Fuels service station in Ziko. The objective was to improve vehicle access, enhance road durability, and ensure safe, all-weather usability. Work included site clearance, grading, compaction, drainage installation, and surfacing.",
    [
      "https://rockstructure.construction/wp-content/uploads/2025/10/IMG-20250929-WA0040.jpg",
      "https://rockstructure.construction/wp-content/uploads/2025/10/IMG-20250929-WA0041.jpg",
      "https://rockstructure.construction/wp-content/uploads/2025/10/IMG-20250929-WA0042.jpg",
      "https://rockstructure.construction/wp-content/uploads/2025/07/Nyaboko-Fuels-Access-Road-Upgrade-2.jpg",
    ],
  ),
  project(
    "service-station-forecourt-construction-nyaboko-fuels",
    "Service Station Forecourt Construction – Nyaboko Fuels",
    "Service Station Construction",
    "https://rockstructure.construction/wp-content/uploads/2025/07/IMG-20250705-WA0232.jpg",
    "This project involved the construction of a new forecourt area for Nyaboko Fuels in Ziko. The scope included ground preparation, reinforced concrete paving, canopy installation, and underground fuel infrastructure to support efficient and safe vehicle refueling operations. The design prioritized durability, accessibility, and compliance with fuel station safety standards.",
  ),
  project(
    "aruppe-jesuit-community-house-extension",
    "Aruppe Jesuit Community House Extension",
    "House Extension / Renovations",
    "https://rockstructure.construction/wp-content/uploads/2025/07/IMG-20250705-WA0264.jpg",
    "The Aruppe Jesuit Community House Extension project involved the thoughtful expansion of an existing residence to accommodate the growing needs of the Jesuit community. Located in the serene suburb of Mount Pleasant, the extension was designed to blend harmoniously with the existing architecture while introducing modern amenities and enhanced spatial functionality.",
    [
      "https://rockstructure.construction/wp-content/uploads/2025/07/Aruppe-Jesuit-Community-House-Extension-44.jpg",
      "https://rockstructure.construction/wp-content/uploads/2025/07/Aruppe-Jesuit-Community-House-Extension-26.jpg",
      "https://rockstructure.construction/wp-content/uploads/2025/07/Aruppe-Jesuit-Community-House-Extension-15.jpg",
      "https://rockstructure.construction/wp-content/uploads/2025/07/Aruppe-Jesuit-Community-House-Extension-6.jpg",
    ],
  ),
  project(
    "access-road-at-concession-virtutrade-service-station",
    "Access Road at Concession Virtutrade Service Station",
    "Road Construction",
    "https://rockstructure.construction/wp-content/uploads/2024/10/IMG-20241006-WA0142.jpg",
    "The completed access road at Virtutrade Service Station in Concession is a well-constructed, smooth, and durable pathway that seamlessly connects vehicles to the station. Designed with optimal traffic flow in mind, the road is reinforced with high-quality materials, ensuring longevity and minimal maintenance. Proper drainage systems have been integrated to prevent water buildup, while clear road markings and signage enhance safety for all users.",
    [
      "https://rockstructure.construction/wp-content/uploads/2024/10/Access-Road-1.jpg",
      "https://rockstructure.construction/wp-content/uploads/2024/10/Access-Road-3.jpg",
      "https://rockstructure.construction/wp-content/uploads/2024/10/Access-Road-4.jpg",
      "https://rockstructure.construction/wp-content/uploads/2024/10/Access-Road-7.jpg",
    ],
  ),
  project(
    "decommissioning-of-40-000l-underground-tank-at-southley-park-service-station",
    "Decommissioning of 40 000L underground tank at Southley Park Service Station",
    "Underground Tank Construction",
    "https://rockstructure.construction/wp-content/uploads/2024/08/IMG-20240813-WA0266.jpg",
    "The decommissioning of the 40,000L underground fuel storage tank at Southley Park Service Station was a crucial environmental and safety project to ensure regulatory compliance. The project involved the safe and systematic removal of the aging tank, including the careful extraction of remaining fuel, cleaning, inerting to neutralize flammable residues, and excavation from its underground location.",
  ),
  project(
    "food-court-construction-at-virtutrade-service-station-concession",
    "Food Court Construction at Virtutrade Service Station, Concession",
    "Food Court Construction",
    "https://rockstructure.construction/wp-content/uploads/2024/07/IMG-20240708-WA0191.jpg",
    "Our construction company is undertaking the construction of a food court at Virtutrade Service Station in Concession. This project aims to deliver a modern, efficient, and safe food court designed to meet the needs of the local community and travelers. Our experienced team is dedicated to adhering to the highest standards of quality and safety, ensuring a reliable and durable facility for Virtutrade.",
    [
      "https://rockstructure.construction/wp-content/uploads/2024/07/IMG-20240709-WA0139.jpg",
      "https://rockstructure.construction/wp-content/uploads/2024/07/IMG-20240709-WA0141.jpg",
      "https://rockstructure.construction/wp-content/uploads/2024/07/IMG-20240709-WA0137.jpg",
      "https://rockstructure.construction/wp-content/uploads/2024/07/IMG-20240708-WA0192.jpg",
    ],
  ),
  project(
    "virtutrade-service-station-construction",
    "Virtutrade Service Station Construction",
    "Service Station Construction",
    "https://rockstructure.construction/wp-content/uploads/2024/05/Virtutrade-Service-Station-fnl-38.jpg",
    "Our construction company is undertaking the construction of a service station for Virtutrade in Concession. This project aims to deliver a modern, efficient, and safe service station designed to meet the needs of the local community and travelers. Our experienced team is dedicated to adhering to the highest standards of quality and safety, ensuring a reliable and durable facility for Virtutrade.",
    [
      "https://rockstructure.construction/wp-content/uploads/2024/05/Virtutrade-service-station-gallery-1.jpg",
      "https://rockstructure.construction/wp-content/uploads/2024/05/Virtutrade-service-station-gallery-2.jpg",
      "https://rockstructure.construction/wp-content/uploads/2024/05/Virtutrade-service-station-gallery-4.jpg",
      "https://rockstructure.construction/wp-content/uploads/2024/05/Virtutrade-service-station-gallery-5.jpg",
    ],
  ),
  project(
    "bakers-inn-emulsion-room-construction",
    "Bakers Inn Emulsion Room Construction",
    "Construction",
    "https://rockstructure.construction/wp-content/uploads/2024/05/Bakers-Inn-Emulsion-room-feat.jpg",
    "Our construction company is currently working on the Emulsion Room project for Bakers Inn, the leading bakery in Zimbabwe. This state-of-the-art facility is designed to enhance production efficiency and safety. Our dedicated team is committed to meeting all industry standards and client requirements, reflecting our dedication to quality and precision in every detail.",
    [
      "https://rockstructure.construction/wp-content/uploads/2024/05/bakers-Inn-Emulsion-Room-Gallery-1.jpg",
      "https://rockstructure.construction/wp-content/uploads/2024/05/bakers-Inn-Emulsion-Room-Gallery-2.jpg",
      "https://rockstructure.construction/wp-content/uploads/2024/05/bakers-Inn-Emulsion-Room-Gallery-3.jpg",
      "https://rockstructure.construction/wp-content/uploads/2024/05/bakers-Inn-Emulsion-Room-Gallery-4.jpg",
    ],
  ),
  project(
    "west-properties-bundwall-construction",
    "West Properties Bundwall Construction",
    "Construction",
    "https://rockstructure.construction/wp-content/uploads/2023/08/West-Properties-Bundwall-Construction-6.jpg",
  ),
  project(
    "house-extension-project-arrupe-jesuit-university",
    "House Extension Project – Arrupe Jesuit University",
    "House Extension / Renovations",
    "https://rockstructure.construction/wp-content/uploads/2023/08/House-Extension-Project-Arrupe-Jesuit-University-6.jpg",
  ),
  project(
    "construction-of-office-block-bakers-inn",
    "Construction of Office Block – Bakers Inn",
    "Construction",
    "https://rockstructure.construction/wp-content/uploads/2023/08/bakers-inn-office-block-fnl-14.jpg",
  ),
  project(
    "bakers-inn-factory-visitors-room",
    "Bakers Inn Factory Visitors Room",
    "Construction",
    "https://rockstructure.construction/wp-content/uploads/2023/08/Bakers-Inn-Factory-Visitors-Room-2.jpg",
  ),
  project(
    "bakers-inn-factory-ladies-ablution-facility",
    "Bakers Inn Factory Ladies' Ablution Facility",
    "Construction",
    "https://rockstructure.construction/wp-content/uploads/2023/08/Bakers-Inn-ladies-ablution-facility-1.jpg",
  ),
  project(
    "bakers-inn-guardroom-construction",
    "Bakers Inn – Guardroom Construction",
    "Construction",
    "https://rockstructure.construction/wp-content/uploads/2023/05/bakers-inn-guardroom-main.jpg",
  ),
  project(
    "mazoe-service-station",
    "Mazoe Service Station",
    "Service Station Construction",
    "https://rockstructure.construction/wp-content/uploads/2022/12/Mazoe-service-station-feat-img.jpg",
  ),
  project(
    "cranrid-petroleum-service-station",
    "Cranrid Petroleum Service Station (underground tank construction)",
    "Underground Tank Construction",
    "https://rockstructure.construction/wp-content/uploads/2022/12/jerera-service-station-feat-img.jpg",
  ),
  project(
    "polyvision-warehouse-extension",
    "Polyvision Warehouse Extension",
    "Construction",
    "https://rockstructure.construction/wp-content/uploads/2022/09/Polyvision-warehouse-extension-feat.jpg",
  ),
  project(
    "foundation-box-compaction",
    "Foundation Box Compaction",
    "Construction",
    "https://rockstructure.construction/wp-content/uploads/2022/08/Compaction-of-foundation-box-feat.jpg",
  ),
  project(
    "renovations-at-arrupe-jesuit-university",
    "Renovations at Arrupe Jesuit University",
    "House Extension / Renovations",
    "https://rockstructure.construction/wp-content/uploads/2022/08/Renovations-at-Arrupe-Jesuit-University-feat.jpg",
  ),
  project(
    "backfilling-whitecliff-project",
    "Backfilling Whitecliff Project",
    "Construction",
    "https://rockstructure.construction/wp-content/uploads/2022/04/Backfilling-Whitecliffe-project-feat.jpg",
  ),
  project(
    "3d-drawing-dema-project",
    "3D Drawing Dema Project",
    "Architectural Designs",
    "https://rockstructure.construction/wp-content/uploads/2022/04/3D-drawing-for-Dema-project-feat.jpg",
  ),
  project(
    "plumbing-and-tiling-project-for-engineer-h-finch",
    "Plumbing and Tiling Project for Engineer H. Finch",
    "Renovations / Extensions",
    "https://rockstructure.construction/wp-content/uploads/2022/04/plumbing-and-tiling-Engineer-H.-Finch-feat.jpg",
  ),
  project(
    "gwandu-mine-tank-installation-project",
    "Gwandu Mine Tank Installation Project",
    "Underground Tank Construction",
    "https://rockstructure.construction/wp-content/uploads/2022/04/Gwandu-mine-tank-feat.jpg",
  ),
  project(
    "arrupe-jesuit-university-painting-project",
    "Arrupe Jesuit University Painting Project",
    "Renovations / Extensions",
    "https://rockstructure.construction/wp-content/uploads/2022/04/Arrupe-Jesuit-University-Painting-Project-feat.jpg",
  ),
  project(
    "karoi-road-maintenance-project",
    "Karoi Road Maintenance Project",
    "Road Construction",
    "https://rockstructure.construction/wp-content/uploads/2021/12/Karoi-Road-Maintenance-feat.jpg",
  ),
  project(
    "glaudina-storm-drain-project",
    "Glaudina Storm Drain Project",
    "Drainages",
    "https://rockstructure.construction/wp-content/uploads/2021/12/Glaudina-Storm-Drain-Project-feat.jpg",
  ),
  project(
    "fredrick-highlands-project",
    "Fredrick Highlands Project",
    "Construction",
    "https://rockstructure.construction/wp-content/uploads/2021/12/highlands_project_feat.jpeg",
  ),
  project(
    "petroltrade-chinhoyi-project",
    "Petroltrade Chinhoyi Project",
    "Service Station Construction",
    "https://rockstructure.construction/wp-content/uploads/2021/12/Petrotrade-Chinhoyi-feat.jpg",
  ),
  project(
    "enhook-farm-chipinge-project",
    "Enhook Farm Chipinge Project",
    "Construction",
    "https://rockstructure.construction/wp-content/uploads/2021/12/Enhook-Farm-Chipinge-feat.jpg",
  ),
  project(
    "mandiwanza-project",
    "Mandiwanza Project (tennis court construction)",
    "Construction",
    "https://rockstructure.construction/wp-content/uploads/2021/12/Mandiwanza-Project-Feat.jpg",
  ),
  project(
    "chiwombe-project",
    "Chiwombe Project",
    "Construction",
    "https://rockstructure.construction/wp-content/uploads/2021/12/chiwombe-project-feat.jpg",
  ),
  project(
    "jeche-project",
    "Jeche Project (house tiling)",
    "Renovations / Extensions",
    "https://rockstructure.construction/wp-content/uploads/2021/12/mr-jeche-main.jpg",
  ),
  project(
    "millpal-project",
    "Millpal Project (underground tank construction)",
    "Underground Tank Construction",
    "https://rockstructure.construction/wp-content/uploads/2021/12/Millpal-Feat.jpg",
  ),
  project(
    "pokugara-borrowdale-project",
    "Pokugara Borrowdale Project (drainages, driveways)",
    "Drainages",
    "https://rockstructure.construction/wp-content/uploads/2021/12/pokugara-main2.jpg",
  ),
  project(
    "musango-project",
    "Musango Project",
    "Construction",
    "https://rockstructure.construction/wp-content/uploads/2018/06/musango-project-feat.jpg",
  ),
];

export const projectFilters = [
  "All",
  "Construction",
  "Road Construction",
  "Service Station Construction",
  "House Extension / Renovations",
  "Underground Tank Construction",
  "Drainages",
  "Architectural Designs",
] as const;

export function getProject(slug: string) {
  return projects.find((item) => item.slug === slug);
}

export const heroImage = "/images/home/nyaboko-forecourt.webp";

export const homeHero = {
  eyebrow: company.shortName,
  headlineLead: "The",
  headlineEmphasis: "construction hub",
  headlineEnd: "in Zimbabwe.",
  description: "Building, roads, infrastructure and architectural design.",
  ctaLabel: "Start a project",
  ctaHref: "/contact",
  image: heroImage,
  imageAlt: "Nyaboko Fuels service station forecourt construction in Ziko",
  projectLabel: "Service Station Forecourt Construction – Nyaboko Fuels",
  projectHref: "/projects/service-station-forecourt-construction-nyaboko-fuels",
} as const;

export const openGraphImage =
  "https://rockstructure.construction/wp-content/uploads/2025/07/main-img.jpg";
