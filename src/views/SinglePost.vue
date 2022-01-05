<template>
  <section class="s-singlePost">
    <h1>User name: {{ getUserName?.name }}</h1>
    <div class="c-post">
      <h4>{{ title }}</h4>
      <p>{{ text }}</p>
    </div>
    <div class="c-comment">
      <h3>Comments:</h3>
      <div v-if="!comments.length">No comments.</div>
      <ul v-if="comments.length">
        <li v-for="comment in comments" :key="comment.id">
          <h4>{{ comment.name }} ({{ comment.email }})</h4>
          <p>{{ comment.body }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
// import { h } from "vue";
import { Post } from "../interfaces/post";
import { User } from "../interfaces/user";
import { Comment } from "../interfaces/comment";
import { defineComponent } from "vue";
import { getComments, getPost, getUsers } from "../services/api.js";
import { logComponentName } from "../helper/message.js";

declare global {
  const postId: number;
}
export default defineComponent({
  name: "SinglePost",
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
      post: {} as Post,
      postRouteId: +this.$route.params.id as number,
      comments: [] as Comment[] as unknown,
      users: [] as User[] as unknown,
    };
  },
  computed: {
    // Get title, check if empty
    title(): string {
      return this.post.title ? this.post.title.toUpperCase() : "";
    },

    // GET TEXT
    text(): string {
      return this.post.body;
    },

    // GET USER NAME
    getUserName(): string {
      return this.users.find((user: User) => {
        return user.id === this.post.userId;
      });
    },
  },
  created() {
    //Check if post and get post on created
    if (this.post) {
      this.fetchPost();
    }
    // Log component name
    logComponentName(this.message, this.$options.name);
  },
  methods: {
    // FETCH POST - USING ROUTE ID
    async fetchPost() {
      if (!this.postRouteId) {
        return;
      }

      const [postData, commentData, usersData] = await Promise.all([
        getPost(this.postRouteId),
        getComments(this.postRouteId),
        getUsers(),
      ]);
      this.post = postData;
      this.comments = commentData;
      this.users = usersData;
    },
  },
  // RENDER tempalte
  // render({
  //   postId,
  //   title,
  //   text,
  // }: {
  //   postId: number;
  //   title: string;
  //   text: string;
  // }): unknown {
  //   return h("section", { class: "s-singlePost" }, [
  //     h("h1", {}, "Post: " + postId),
  //     h("div", { class: "c-post" }, [h("h4", title), h("p", text)]),
  //   ]);
  // },
});
</script>
<style scoped lang="scss">
.s-singlePost {
  margin: 0 20px;
}

.c-comment {
  max-width: 650px;
  width: 100%;
  text-align: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;

  ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
  }
}

.c-post {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #cce5ff;
  max-width: 600px;
  width: auto;
  height: 350px;
  padding: 5px 10px;
  margin: 0 auto;
}
</style>
