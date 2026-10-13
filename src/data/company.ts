export const COMPANY = {
  name: 'The Colony Logistics Ltd',
  shortName: 'The Colony',
  tagline: 'We Keep Business Moving.',
  phones: ['024 968 2113'],
  /** WhatsApp linked to 024 968 2113 */
  whatsapp: '233249682113',
  email: 'admin@thecolonysecurity.com',
  address: 'H365, 73 Lakeside Road, Nii Amasa Nikoi Avenue, Ashaley Botwe',
  addressShort: 'Ashaley Botwe',
  area: 'Ashaley Botwe',
  officeLabel: 'Visit our Accra office: Ashaley Botwe',
  mapQuery: 'H365, 73 Lakeside Road, Nii Amasa Nikoi Avenue, Ashaley Botwe, Accra, Ghana',
  mapEmbed:
    'https://www.google.com/maps?q=H365+73+Lakeside+Road+Nii+Amasa+Nikoi+Avenue+Ashaley+Botwe+Accra+Ghana&hl=en&z=16&output=embed',
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=H365+73+Lakeside+Road+Nii+Amasa+Nikoi+Avenue+Ashaley+Botwe+Accra+Ghana',
  /** Request a Service CTA — opens phone dialer */
  requestTel: 'tel:+233249682113',
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Logistics', path: '/logistics' },
  { label: 'Cleaning & Laundry', path: '/cleaning-laundry' },
  { label: 'Contact', path: '/contact' },
];

export const IMAGES = {
  logo: '/images/logo.jpg',
  heroCleaner: '/images/hero-cleaner.webp',
  freshLaundry: '/images/fresh-laundry.jpg',
  brandedSupplies: '/images/branded-supplies.jpg',
  deepClean: '/images/deep-clean.jpg',
  cleaningKit: '/images/cleaning-kit.webp',
  teamOnSite: '/images/team-on-site.webp',
  officeCleaner: '/images/office-cleaner.webp',
  deliveryVan: '/images/logistics-van.png',
  cleaningHero: '/images/cleaning-hero.png',
  serviceLaundry: '/images/service-laundry.png',
  serviceWashing: '/images/service-washing.png',
  serviceIroning: '/images/service-ironing.png',
  serviceFolding: '/images/service-folding.png',
  serviceCleaning: '/images/service-cleaning.png',
  serviceCommercial: '/images/service-commercial.png',
  serviceCarCleaning: '/images/service-car-cleaning.png',
  logisticsHero: '/images/logistics-hero.png',
  logisticsVan: '/images/logistics-van.png',
  logisticsWarehouse: '/images/logistics-warehouse.png',
  logisticsLoading: '/images/logistics-loading.png',
  logisticsStorage: '/images/logistics-storage.png',
  // Aliases used across pages
  heroLogistics: '/images/logistics-hero.png',
  heroLaundry: '/images/cleaning-hero.png',
  courierVan: '/images/logistics-van.png',
  deliveryDoor: '/images/logistics-loading.png',
  driverHighVis: '/images/logistics-van.png',
  cargoTruckNight: '/images/logistics-hero.png',
  shippingContainers: '/images/logistics-warehouse.png',
  warehouseForklift: '/images/logistics-warehouse.png',
  warehouseWorker: '/images/logistics-loading.png',
  warehouseTeam: '/images/logistics-storage.png',
  courierTrolley: '/images/logistics-storage.png',
  deliveryHandoff: '/images/logistics-loading.png',
  laundryBasket: '/images/service-laundry.png',
  foldedTshirts: '/images/service-folding.png',
  foldingLaundry: '/images/service-folding.png',
  ironingBoard: '/images/service-ironing.png',
  foldingShirt: '/images/service-folding.png',
  washingMachine: '/images/service-washing.png',
  ironingMan: '/images/service-ironing.png',
  ironingStack: '/images/service-laundry.png',
  cleanTowels: '/images/service-laundry.png',
  cleaningLivingRoom: '/images/service-cleaning.png',
  cleaningTeam: '/images/service-commercial.png',
  windowCleaning: '/images/service-commercial.png',
  glassCleaning: '/images/service-commercial.png',
  teamGhana: '/images/team-on-site.webp',
  teamOffice: '/images/office-cleaner.webp',
  teamDiverse: '/images/hero-cleaner.webp',
  businessOutdoors: '/images/branded-supplies.jpg',
};

export const SERVICES = {
  logistics: [
    { icon: 'Truck', title: 'Delivery & Courier Services', desc: 'Fast, reliable door-to-door delivery across Accra and Ghana.' },
    { icon: 'Warehouse', title: 'Warehousing & Storage', desc: 'Secure, well-managed storage for your goods and inventory.' },
    { icon: 'Package', title: 'Freight & Haulage', desc: 'Efficient movement of bulk goods with our trusted fleet.' },
    { icon: 'MapPin', title: 'Last-Mile Distribution', desc: 'Timely final-mile delivery to your customers doorsteps.' },
    { icon: 'Boxes', title: 'Inventory Management', desc: 'Organised tracking and handling of your stock and supplies.' },
    { icon: 'ShieldCheck', title: 'Insured Transport', desc: 'Your goods are protected with care every step of the way.' },
  ],
  cleaning: [
    { icon: 'Shirt', title: 'Laundry', desc: 'Professional washing and care for everyday garments and linens.' },
    { icon: 'Droplets', title: 'Washing', desc: 'Thorough, deep-clean washing with quality detergents.' },
    { icon: 'Wind', title: 'Ironing', desc: 'Crisp, perfectly pressed garments ready to wear.' },
    { icon: 'Layers', title: 'Folding', desc: 'Neatly folded and organised returns, fresh and tidy.' },
    { icon: 'Sparkles', title: 'Cleaning', desc: 'Home and office cleaning for spotless, healthy spaces.' },
    { icon: 'Home', title: 'Commercial Cleaning', desc: 'Professional cleaning for offices, shops and facilities.' },
  ],
};

export const VALUES = [
  { icon: 'ShieldCheck', title: 'Reliability', desc: 'We deliver on our promises — every package, every clean, every time.' },
  { icon: 'Clock', title: 'Punctuality', desc: 'Time is money. We respect deadlines and keep your operations on schedule.' },
  { icon: 'HeartHandshake', title: 'Integrity', desc: 'Honest pricing, transparent processes, and trustworthy service.' },
  { icon: 'Sparkles', title: 'Excellence', desc: 'We hold ourselves to the highest standards in everything we do.' },
];

export const INDUSTRIES = [
  { icon: 'Store', label: 'Retail & E-commerce' },
  { icon: 'Building2', label: 'Corporate Offices' },
  { icon: 'UtensilsCrossed', label: 'Restaurants & Hospitality' },
  { icon: 'Home', label: 'Residential Homes' },
  { icon: 'Factory', label: 'Manufacturing' },
  { icon: 'HeartPulse', label: 'Healthcare' },
  { icon: 'GraduationCap', label: 'Education' },
  { icon: 'Church', label: 'Religious Institutions' },
];

export const STEPS = [
  { num: '01', title: 'Reach Out', desc: 'Contact us via phone or WhatsApp to tell us what you need.' },
  { num: '02', title: 'Get a Quote', desc: 'We assess your requirements and provide a clear, transparent quote with no hidden fees.' },
  { num: '03', title: 'We Deliver', desc: 'Our team gets to work — moving your goods or cleaning your spaces with precision and care.' },
  { num: '04', title: 'You Stay Moving', desc: 'Enjoy reliable, professional results that keep your business and life running smoothly.' },
];

export const WHY_CHOOSE_US = [
  { icon: 'MapPin', title: 'Local Expertise', desc: 'Deep knowledge of Accra and Ghanaian routes, neighbourhoods, and logistics networks.' },
  { icon: 'Zap', title: 'Fast Turnaround', desc: 'Quick response times and efficient service delivery that keeps you ahead.' },
  { icon: 'Users', title: 'Professional Team', desc: 'Trained, uniformed staff who treat your goods and spaces with respect.' },
  { icon: 'Phone', title: 'Easy Communication', desc: 'WhatsApp, phone, or online — reach us however is most convenient for you.' },
  { icon: 'ShieldCheck', title: 'Trustworthy', desc: 'A registered Ghanaian company committed to accountability and quality.' },
  { icon: 'Wallet', title: 'Fair Pricing', desc: 'Competitive rates with transparent quotes and no surprises.' },
];
