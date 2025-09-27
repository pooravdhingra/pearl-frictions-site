export const COMPANY = {
  name: "Pearl Frictions",
  phoneDisplay: "+91 98110 06808",
  phoneE164: "919811006808",
  email: "gauravdhingra2008@hotmail.com",
  addressLines: [
    "Sandeep Dhingra (Director)",
    "Pearl Frictions",
    "28/19, West Patel Nagar, Patel Nagar",
    "New Delhi - 110008, Delhi, India",
  ],
};

export const WHATSAPP_LINK =
  `https://wa.me/${COMPANY.phoneE164}?text=` +
  encodeURIComponent(
    "Hello Pearl Frictions, I’d like to enquire about your cork and graphite products."
  );
