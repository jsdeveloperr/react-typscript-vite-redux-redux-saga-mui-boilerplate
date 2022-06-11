import makeApi from '../../../libs/core/configureAxios';
import { Post } from '../types';

const api = makeApi('https://jsonplaceholder.typicode.com');

const POSTS_BASE_URL = '/posts';

export const getPosts = (): Promise<Post[]> => api.get(POSTS_BASE_URL);

export const createPost = (post: Post): Promise<Post> =>
  api.post(POSTS_BASE_URL, post);

export const updatePost = (post: Post): Promise<Post> =>
  api.put(`${POSTS_BASE_URL}/${post.id}`, post);

export const deletePost = (post: Post): Promise<Post> =>
  api.delete(`${POSTS_BASE_URL}/${post.id}`, { data: post });
