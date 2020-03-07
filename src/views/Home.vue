<template>
  <v-container>
    <h2 class="display-2 d-flex justify-center">All Videos</h2>
    <v-row>
      <v-col md="4" sm="12" v-for="(video ) in videos" :key="video.id">
        <VideoListVideo :video="video"></VideoListVideo>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import VideoListVideo from "../components/VideoListVideo";
export default {
  name: "Home",
  components: { VideoListVideo },
  computed: {
    videos() {
      return this.$store.state.videos;
    }
  },
  data() {
    return {};
  }
};
</script>
