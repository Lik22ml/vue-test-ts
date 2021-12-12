<script lang="ts">
import { h } from "vue";
import Api from "../services/api.js";
import { defineComponent } from "vue";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
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
      postId: +this.$route.params.id as number,
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
  },
  created() {
    //Check if post and get post on created
    if (this.post) {
      this.getPost();
    }
    // Log component name
    console.log(this.message + this.$options.name);
  },
  methods: {
    // FETCH POST - USING ROUTE ID
    async getPost() {
      if (!this.postId) {
        return;
      }
      Api.getPost(this.postId)
        .then((result) => {
          this.post = result;
        })
        .catch((error: unknown) => {
          console.log(error);
        });
    },
  },
  // RENDER tempalte
  render({
    postId,
    title,
    text,
  }: {
    postId: number;
    title: string;
    text: string;
  }): unknown {
    return h("section", { class: "s-singlePost" }, [
      h("h1", {}, "Post: " + postId),
      h("div", { class: "c-post" }, [h("h4", title), h("p", text)]),
    ]);
  },
});
</script>
<style scoped lang="scss">
.s-singlePost {
  margin: 30px 15px;
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
