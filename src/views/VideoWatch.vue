<template>
  <div>
    <h1>Watch Video</h1>

    <v-container>
      <v-row>
        <v-col md="9" cols="12">
          <video-player class="video-player-box" ref="videoPlayer" :options="playerOptions"></video-player>
        </v-col>
        <v-col md="3" cols="12"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import "videojs-youtube";

import "video.js/dist/video-js.css";
import { videoPlayer } from "vue-video-player";
export default {
  components: { videoPlayer },
  data: () => ({}),
  computed: {
    video() {
      return (
        this.$store.state.videos.find(vid => vid.id == this.$route.params.id) ||
        {}
      );
    },
    playerOptions() {
      return {
        sources: [
          {
            type: "video/youtube",
            src: this.video.url
          }
        ],
        fluid: true,
        techOrder: ["youtube"],
        autoplay: false,
        controls: true,
        youtube: {
          ytControls: 2,
          customVars: {
            wmode: "transparent"
          }
        }
      };
    }
  },
  mounted() {
    console.log(this.$route.params);
  }
};
</script>

<style></style>
