import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Alice Johnson");
  const [isPending, setIsPending] = useState(false);
  const nevigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New Blog Added");
      setIsPending(true);
      nevigate("/");
    });
  };

  return (
    <div className="max-w-[600px] my-0 mx-auto text-center">
      <h2 className="text-[20px] text-[#f1356d] mb-[30px] font-bold my-[13.28px] mx-0 block">
        Add a new Blog
      </h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="" className="text-left block">
          Blog Title:
        </label>
        <input
          type="text"
          name=""
          id=""
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-[100%] py-[6px] px-[10px] my-[10px] mx-0 border-solid border-[1px] border-[#ddd] block box-border"
          required
        />

        <label htmlFor="" className="text-left block">
          Blog Body:
        </label>
        <textarea
          name=""
          id=""
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-[100%] py-[6px] px-[10px] my-[10px] mx-0 border-solid border-[1px] border-[#ddd] block box-border"
          required
        ></textarea>

        <label htmlFor="" className="text-left block">
          Blog Author:
        </label>
        <select
          name=""
          id=""
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-[100%] py-[6px] px-[10px] my-[10px] mx-0 border-solid border-[1px] border-[#ddd] block box-border"
        >
          <option value="Alice Johnson">Alice Johnson</option>
          <option value="Bob Smith">Bob Smith</option>
          <option value="Charlie Brown">Charlie Brown</option>
          <option value="Dana White">Dana White</option>
          <option value="Evan Lee">Evan Lee</option>
        </select>

        {!isPending && (
          <button className="bg-[#f1356d] text-[#fff] border-0 p-[8px] rounded-[8px] cursor-pointer">
            Add Blog
          </button>
        )}
        {isPending && (
          <button
            className="bg-[#f1356d] text-[#fff] border-0 p-[8px] rounded-[8px] cursor-pointer"
            disabled
          >
            Adding Blog...
          </button>
        )}
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
