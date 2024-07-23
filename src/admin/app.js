import logo from "./extensions/shockers.png";

export default {
  config: {
    // replace favicon with a custom icon
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo,
    },
    // Replace the favicon
    head: {
      favicon: logo,
    },
    // Replace the Strapi logo in the main navigation
    menu: {
      logo,
    },
    locales: ["en"],
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Shockers Dashboard",

        "app.components.LeftMenu.navbrand.workplace": "Manger",

        "Auth.form.welcome.title": "Welcome to Dashboard",

        "Auth.form.welcome.subtitle": "Login to your account",

        "Settings.profile.form.section.experience.interfaceLanguageHelp":
          "Preference changes will apply only to you.",
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { releases: false },
  },
  bootstrap() {},
};
