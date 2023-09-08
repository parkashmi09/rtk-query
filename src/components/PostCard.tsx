import React from "react";

const PostCard = ({ post }: { post: IPost }) => {
  return (
    <div>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  );
};

export default PostCard;
