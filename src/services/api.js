const API_URL = "https://jsonplaceholder.typicode.com";
export const getPosts = () => {
    return fetch(`${API_URL}/posts`).then((r) => r.json());
};
export const getPost = (id) => {
    return fetch(`${API_URL}/posts/${id}`).then((r) => r.json());
};
export const getComments = (id) => {
    return fetch(`${API_URL}/posts/${id}/comments`).then((r) => r.json());
};
export const getUsers = () => {
    return fetch(`${API_URL}/users`).then((r) => r.json());
};
//# sourceMappingURL=api.js.map