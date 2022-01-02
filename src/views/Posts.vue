<template>
  <section class="s-posts">
    <div class="c-search">
      <input
        v-model="searchText"
        class="c-search__input"
        type="text"
        placeholder="Search..."
      />
    </div>
    <PostList :posts="searchedPosts" :message="message" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostList from "../components/PostList.vue";
import { getPosts } from "../services/api";
import { Post } from "../interfaces/post";

export default defineComponent({
  name: "Posts",
  components: {
    PostList,
  },
  props: {
    message: {
      type: String,
      required: true,
      default: "Hello",
      validator: function (value: string): boolean {
        return value !== "";
      },
    },
  },
  data() {
    return {
      posts: [] as Post[],
      searchText: "" as string,
    };
  },
  computed: {
    searchedPosts(): Post[] {
      if (this.searchText) {
        return this.posts.filter((post: Post) => {
          return post.title
            .toLowerCase()
            .includes(this.searchText.toLowerCase());
        });
      } else {
        return this.posts;
      }
    },
  },
  created() {
    // ON CREATED GET POSTS IF EMPTY
    this.fetchPosts();

    // Log component name
    console.log(this.message + this.$options.name);
  },
  methods: {
    // FETCH ALL POSTS FROM API
    async fetchPosts(): Promise<void> {
      getPosts()
        .then((result: Post[]) => {
          this.posts = result;
        })
        .catch((error: unknown) => {
          console.log(error);
        });
    },
  },
});
</script>

<style scoped lang="scss">
.s-posts {
  margin: 0 15px;
}
.c-search {
  &__input {
    padding: 10px 15px;
    color: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 16px;
  }
}
</style>
