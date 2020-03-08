import Vue from "vue";
import Vuetify from "vuetify/lib";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

import colors from "vuetify/lib/util/colors";
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi" // default - only for display purposes
  },
  theme: {
    themes: {
      light: {
        primary: colors.deepPurple.darken2,
        secondary: colors.purple.lighten3,
        accent: colors.shades.black,
        info: colors.red.accent3,
        success: colors.green.darken3,
        warning: colors.grey.darken1,
        error: colors.red.accent3
      },
      dark: {
        primary: colors.lightGreen,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3
      }
    }
  }
});
