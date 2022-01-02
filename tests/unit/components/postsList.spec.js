import { mount } from "@vue/test-utils";
import PostList from "@/components/PostList.vue";
describe("PostList.vue", () => {
  it("props: posts required", async () => {
    const wrapper = mount(PostList);
    expect(wrapper.vm.$options.props.posts.required).toBe(true);
  });
});
//# sourceMappingURL=postsList.spec.js.map
