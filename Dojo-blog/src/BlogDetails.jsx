import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const nevigate = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      nevigate("/");
    });
  };

  return (
    <div className="max-w-[900px] mx-auto p-6 mt-10 rounded-xl shadow-md">
      {isPending && (
        <div className="text-gray-500 text-center my-[20px] mx-0">
          Loading...
        </div>
      )}
      {error && (
        <div className="text-red-500 text-center my-[20px] mx-0">{error}</div>
      )}
      {blog && (
        <article>
          <h2 className="text-[20px] font-bold my-[13.28px] mx-0 mb-[10px] text-[#f1356d] block">
            {blog.title}
          </h2>
          <p className="text-gray-700 font-semibold mb-6">
            Written By {blog.author}
          </p>
          <div className="text-gray-800 leading-relaxed space-y-4 my-[20px] mx-0">
            {blog.body.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <button
            onClick={handleClick}
            className="bg-[#f1356d] text-[#fff] border-0 p-[8px] rounded-[8px] cursor-pointer"
          >
            Delete
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
