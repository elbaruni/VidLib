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
        v-for="tag in tags"
        :key="tag.id"
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
  props: ["video"],
  mounted() {},
  computed: {
    tags() {
      return this.video.tags.map(tag => {
        const tmpTag = this.$store.state.tags.find(_tag => _tag.id == tag);
        return tmpTag;
      });
    }
  }
};
</script>

<style></style>
