import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";

function App() {
  return (
    <main className="w-full min-h-screen bg-slate-900 text-white p-10">
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
