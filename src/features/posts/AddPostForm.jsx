import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { getAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const users = useSelector(getAllUsers);

  const onSubmit = (values) => {
    let title = values?.title;
    let body = values?.content;
    let userId = values?.author;

    if (title && body && userId) {
      dispatch(postAdded(title, body, userId));
      reset();
    }
  };

  return (
    <div className="max-w-md mx-auto   ">
      <h1 className="text-2xl font-bold  ">Add a Post</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-black">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Title
          </label>
          <input
            type="text"
            {...register("title", {
              required: "Title is required",
            })}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter post title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Author
          </label>
          <select
            {...register("author", {
              required: "Author is required",
            })}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.author ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select </option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          {errors.author && (
            <p className="text-red-500 text-sm mt-1">{errors.author.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Content
          </label>
          <textarea
            {...register("content", {
              required: "Content is required",
            })}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  ${
              errors.content ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter post content"
            rows="5"
          ></textarea>
          {errors.content && (
            <p className="text-red-500 text-sm mt-1">
              {errors.content.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-1/4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
