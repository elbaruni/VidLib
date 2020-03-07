<template>
  <v-card :to="`/video/${video.id}`">
    <v-img
      :src="video.src"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="140px"
    >
      <v-card-title v-text="video.title"></v-card-title>
    </v-img>

    <v-card-text>{{ video.desc }}</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
        v-for="tag in video.tags"
        :key="tag.id"
        outlined
        color="primary"
        :to="`/tag/${tag.id}`"
      >
        <v-icon>{{ tag.icon }}</v-icon>
        {{ tag.title }}
      </v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["video"]
};
</script>

<style></style>
