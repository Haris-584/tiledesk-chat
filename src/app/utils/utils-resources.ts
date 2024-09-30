export const BRAND_BASE_INFO: { [key: string]: string | boolean } = {
  COMPANY_NAME: "ChatRep",
  BRAND_NAME: "ChatRep",
  COMPANY_SITE_NAME: "ChatRep.com",
  COMPANY_SITE_URL: "https://www.ChatRep.com",
  CONTACT_US_EMAIL: "support@ChatRep.com",
  FAVICON: "https://i.ibb.co/xzyFjXH/Chat-Rep-fav-icon.png",
  META_TITLE: "ChatRep - Live Chat",
  DOCS: true,
  LOGOUT_ENABLED: false,
};

export var LOGOS_ITEMS: {
  [key: string]: { label: string | boolean; icon: string };
} = {
  COMPANY_LOGO: {
    label: BRAND_BASE_INFO.COMPANY_NAME,
    icon: "assets/logos/ChatRep_logo2.svg",
  },
  COMPANY_LOGO_NO_TEXT: {
    label: BRAND_BASE_INFO.COMPANY_NAME,
    icon: "assets/logos/ChatRep_logo_no_text.svg",
  },
  BASE_LOGO: {
    label: BRAND_BASE_INFO.BRAND_NAME,
    icon: "assets/logos/ChatRep_logo2.svg",
  },
  BASE_LOGO_NO_TEXT: {
    label: BRAND_BASE_INFO.BRAND_NAME,
    icon: "assets/logos/ChatRep_logo_no_text.svg",
  },
  BASE_LOGO_WHITE: {
    label: BRAND_BASE_INFO.BRAND_NAME,
    icon: '"assets/logos/ChatRep-logo-new-white.svg',
  },
  BASE_LOGO_WHITE_NO_TEXT: {
    label: BRAND_BASE_INFO.BRAND_NAME,
    icon: '"assets/logos/ChatRep-logo-new-white.svg',
  },
  BASE_LOGO_GRAY: {
    label: BRAND_BASE_INFO.BRAND_NAME,
    icon: "https://i.ibb.co/2cSz0T0/Chat-Rep-logo-new-white2.png",
  },
};

export const MEDIA: {
  [key: string]: { src: string; text: string; description: string };
} = {
  RULES: {
    src: "https://www.youtube.com/embed/p0ux-86Y4_I",
    text: "CDSSplashScreen.YouHaveNoRules",
    description: "CDSSplashScreen.LearnAboutAI",
  },
  GLOBALS: { src: "", text: "CDSGlobals.NoGlobalVariables", description: "" },
};
