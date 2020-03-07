<template>
  <v-app>
    <v-app-bar app color="deep-purple darken-2" dark class="mb-0">
      <v-toolbar-title>
        <router-link to="/" class="white--text" tag="span" style="cursor:pointer">MAWTINI</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn target="_blank" text>
        <span class="mr-2"></span>
        <v-icon></v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>
