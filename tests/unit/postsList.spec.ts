import { shallowMount } from "@vue/test-utils";
import PostList from "@/components/PostList.vue";

describe("PostList.vue", () => {
  it("renders props posts", () => {
    const posts: [] = [];
    const wrapper = shallowMount(PostList, {
      props: { posts },
    });
    expect(wrapper.vm.$props).toMatch("qui est esse");
  });
});
