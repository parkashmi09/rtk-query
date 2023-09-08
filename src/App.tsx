import "./App.css";
import PostCard from "./components/PostCard";
import { useCreatePostMutation, useGetPostsQuery } from "./redux/api";
import { useState } from "react";

function App() {
  const { data, isLoading } = useGetPostsQuery("");
  const [createPost] = useCreatePostMutation();

  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const postBody: IPost = {
      title,
      body,
      id: String(Math.random() * 1000),
      userId: String(Math.random() * 1000),
    };
    createPost(postBody);
    setTitle("");
    setBody("");
  };
  return (
    <div>
      <h1>App users </h1>

      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Post </button>
      </form>
      {isLoading ? (
        <div>Loading.......</div>
      ) : (
        data && data.map((data) => <PostCard key={data.id} post={data} />)
      )}
    </div>
  );
}

export default App;
