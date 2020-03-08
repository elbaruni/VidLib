<template>
  <div>
    <v-container>
      <h1>Watch Video</h1>
      <v-row>
        <v-col md="9" cols="12">
          <video-player
            class="video-player-box"
            ref="videoPlayer"
            :options="playerOptions"
          ></video-player>
        </v-col>
        <v-col md="3" cols="12">
          <div class="display-1">{{ video.title }}</div>
          <div>
            <p>{{ video.desc }}</p>
          </div>
          <div>
            <v-btn
              v-for="tag in tags"
              :key="tag.id"
              color="primary"
              :to="`/tag/${tag.id}`"
              class="mr-2"
            >
              <v-icon>{{ tag.icon }}</v-icon>
              {{ tag.title }}
            </v-btn>
          </div>
        </v-col>
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
    tags() {
      return this.video.tags.map(tag => {
        const tmpTag = this.$store.state.tags.find(_tag => _tag.id == tag);
        return tmpTag;
      });
    },
    playerOptions() {
      return {
        sources: [
          {
            type: "video/youtube",
            src: this.video.url,
            withCredentials: false
          }
        ],
        fluid: true,
        withCredentials: false,
        techOrder: ["youtube"],
        autoplay: true,
        controls: true,
        youtube: {
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
