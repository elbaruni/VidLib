<template>
  <v-container>
    <h2 class="display-2 d-flex justify-center">Tag {{ tag.title }}</h2>
    <v-row>
      <v-col md="4" sm="12" v-for="video in videos" :key="video.id">
        <VideoListVideo :video="video"></VideoListVideo>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import VideoListVideo from "../components/VideoListVideo";
export default {
  props: ["video"],
  name: "TagVideos",
  components: {
    VideoListVideo
  },
  mounted() {},
  // const tmpTag = this.$store.state.tags.find(_tag => _tag.id === tag.id);
  //return video.tags;
  computed: {
    tag() {
      return this.$store.state.tags.find(
        _tag => _tag.id == this.$route.params.id
      );
    },
    videos() {
      return this.$store.state.videos.filter(video => {
        return video.tags.includes(parseInt(this.$route.params.id));
      });
    }
  },
  data() {
    return {};
  }
};
</script>
