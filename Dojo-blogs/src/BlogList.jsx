import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {
  // const blogs = props.blogs;
  // const title = props.title;

  return ( 
    <div className="blog-list">
      <h2 className="text-[24px] font-bold my-[13.28px] mx-0 block">{title}</h2>
      {blogs.map((blog) => (
        <div className="py-[10px] px-[16px] my-[20px] mx-0 border-b-x border-solid border-[#fafafa] hover:shadow-md cursor-pointer" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2 className="font-bold my-[13.28px] mx-0 block text-[20px] text-[#f1356d] mb-[8px]">{blog.title}</h2>
            <p>written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;