import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="max-w-[900px] mx-auto p-6 mt-10 rounded-xl shadow-md">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <BlogList blogs={data} title="All Blogs!" />}
    </div>
  );
};

export default Home;
