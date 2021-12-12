const url = "https://jsonplaceholder.typicode.com/posts/";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const Api = {
  getPosts(): Promise<Post[]> {
    return fetch(url).then((response) => response.json());
  },

  getPost(id: number): Promise<Post> {
    return fetch(url + id).then((response) => response.json());
  },
};

export default Api;
