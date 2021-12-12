const url = "https://jsonplaceholder.typicode.com/posts/";
const Api = {
  getPosts() {
    return fetch(url).then((response) => response.json());
  },
  getPost(id) {
    return fetch(url + id).then((response) => response.json());
  },
};
export default Api;
//# sourceMappingURL=api.js.map