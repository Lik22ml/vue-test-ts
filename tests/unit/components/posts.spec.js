import { shallowMount } from "@vue/test-utils";
import Posts from "@/views/Posts.vue";
describe("Posts.vue", () => {
    it("props: renders text message", async () => {
        const wrapper = shallowMount(Posts);
        expect(wrapper.props().message).toBe("Hello");
    });
});
//# sourceMappingURL=posts.spec.js.map