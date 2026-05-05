export const company = {
  name: "Express Foods",
  legalName: "Express Foods",

  // Site
  domain: "expressfoodsco.com",
  url: "https://expressfoodsco.com",

  // Public-facing email — what we display on the site to encourage manual contact
  publicEmail: "sales@expressfoodsco.com",

  // Inbox that receives contact-form submissions (server-side only)
  inquiryRecipientEmail: "info@expressfoodsco.com",

  // Verified SES sender — only used inside the server action
  senderEmail: "mail@expressfoodsco.com",
  senderName: "Express Foods",

  // Phone / WhatsApp (one number)
  phone: {
    raw: "+201067673966",
    display: "+20 106 767 3966",
    tel: "tel:+201067673966",
    whatsapp: "https://wa.me/201067673966",
  },

  address: {
    line1: "El Shorouk",
    line2: "Cairo, Egypt",
    full: "El Shorouk, Cairo, Egypt",
    mapsUrl: "https://maps.google.com/?q=El+Shorouk+Cairo+Egypt",
    mapEmbedSrc:
      "https://www.google.com/maps?q=El+Shorouk+Cairo+Egypt&output=embed",
  },

  socials: {
    linkedin: "https://www.linkedin.com/company/express-foods/",
  },

  legal: {
    taxRegistration: "448-013-940",
    establishedDate: "21-11-2012",
  },
} as const;

export type Company = typeof company;
