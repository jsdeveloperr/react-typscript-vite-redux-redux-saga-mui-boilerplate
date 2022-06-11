import React from 'react';

import { Grid } from '@mui/material';

import { Post } from '../types';
import { PostCardView } from './PostCardView';

export type PostListProps = {
  posts: Post[];
  onDeletePost: (post: Post) => void;
  onUpdatePost: (post: Post) => void;
};

export const PostList = (props: PostListProps) => {
  const { posts, onDeletePost, onUpdatePost } = props;

  return (
    <>
      <Grid container>
        {posts.map(post => (
          <PostCardView
            data-test-id={post.title}
            key={post.id}
            post={post}
            onDeleteClick={onDeletePost}
            onUpdateClick={onUpdatePost}
          />
        ))}
      </Grid>
    </>
  );
};
