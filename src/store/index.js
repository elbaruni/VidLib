import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    videos: [
      {
        id: "1",
        title: "موطني 20-11-2019",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque similique, dolor possimus quod corporis porro facere! Ducimus molestias cupiditate voluptatum eos, veritatis eveniet magnam quos nihil atque, incidunt doloremque!",
        src: "https://i.ytimg.com/vi/TYNyuujAl3A/maxresdefault.jpg",
        url:
          "https://www.youtube.com/watch?v=7CcWy9f04qo&list=PLFbDRcWchmmq2rJi9bNa8Yr9L1u0z8HnP&index=803",
        tags: [1, 2]
      },
      {
        id: "2",
        title: "موطني 24-11-2019",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque similique, dolor possimus quod corporis porro facere! Ducimus molestias cupiditate voluptatum eos, veritatis eveniet magnam quos nihil atque, incidunt doloremque!",
        src: "https://i.ytimg.com/vi/TYNyuujAl3A/maxresdefault.jpg",
        url:
          "https://www.youtube.com/watch?v=89XeBl5PrJM&list=PLFbDRcWchmmq2rJi9bNa8Yr9L1u0z8HnP&index=804",
        tags: [4, 2]
      },
      {
        id: "3",
        title: "موطني 26-11-2019",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque similique, dolor possimus quod corporis porro facere! Ducimus molestias cupiditate voluptatum eos, veritatis eveniet magnam quos nihil atque, incidunt doloremque!",
        src: "https://i.ytimg.com/vi/TYNyuujAl3A/maxresdefault.jpg",
        url:
          "https://www.youtube.com/watch?v=r52943cQUHQ&list=PLFbDRcWchmmq2rJi9bNa8Yr9L1u0z8HnP&index=805",
        tags: [5, 3]
      },
      {
        id: "4",
        title: "موطني 28-11-2019",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque similique, dolor possimus quod corporis porro facere! Ducimus molestias cupiditate voluptatum eos, veritatis eveniet magnam quos nihil atque, incidunt doloremque!",
        src: "https://i.ytimg.com/vi/TYNyuujAl3A/maxresdefault.jpg",
        url:
          "https://www.youtube.com/watch?v=piC1905AS8I&list=PLFbDRcWchmmq2rJi9bNa8Yr9L1u0z8HnP&index=806",
        tags: [3, 2]
      }
    ],
    tags: [
      { id: 1, title: "tag1", icon: "mdi-bookmark" },
      { id: 2, title: "tag2", icon: "mdi-bookmark" },
      { id: 3, title: "tag3", icon: "mdi-bookmark" },
      { id: 4, title: "tag4", icon: "mdi-bookmark" },
      { id: 5, title: "tag5", icon: "mdi-bookmark" }
    ]
  },
  mutations: {
    SET_TAG({ state }, payload) {
      state.tags.push(payload);
    }
  },
  actions: {
    Set_Tag({ commit }, payload) {
      commit("SET_TAG", payload);
    }
  },
  getters: {},
  modules: {}
});
