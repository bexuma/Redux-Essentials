import React from 'react';

import { Link } from 'react-router-dom';
import { PostAuthor } from './PostAuthor';
import { ReactionButtons } from './ReactionButtons';
import { TimeAgo } from './TimeAgo';

export const PostExcerpt = ({ post }) => (
  <article className="post-excerpt" key={post.id}>
    <h3>{post.title}</h3>
    <div>
      <PostAuthor userId={post.user} />
      <TimeAgo timestamp={post.date} />
      <ReactionButtons post={post} />
    </div>
    <p className="post-content">{post.content.substring(0, 100)}</p>
    <Link to={`/posts/${post.id}`} className="button muted-button">
      View Post
    </Link>
  </article>
);
