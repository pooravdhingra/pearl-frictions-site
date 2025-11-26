export const COMPANY = {
  name: "Pearl Frictions Inc.",
  email: "pearlcork@hotmail.com",

  // Phones
  phoneMobileDisplay: "+91 9811006808",
  phoneMobileE164: "919811006808", // no "+" for wa.me
  phoneLandlineDisplay: "+91 11 41552324",
  phoneLandlineE164: "911141552324",

  // Address lines as you want them shown
  addressLines: [
    "Gaurav Dhingra (Director)",
    "PEARL FRICTIONS INC",
    "26/181-C, Farid Puri, West Patel Nagar,",
    "New Delhi-110008 INDIA",
  ],
};

export const WHATSAPP_LINK =
  `https://wa.me/${COMPANY.phoneMobileE164}?text=` +
  encodeURIComponent(
    "Hello Pearl Frictions, I’d like to enquire about your cork, graphite and related products."
  );
