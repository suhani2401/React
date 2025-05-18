import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="text-center ">
            <h1 className="text-[#f1356d] text-[40px] font-bold my-[10.72px] mx-0 block">4O4 Page Not Found</h1>
            <p>That page cannot be found</p>
            <Link to="/" className="text-blue-600 underline hover:text-blue-800">Back to Homepage...</Link>
        </div>
    );
}
 
export default NotFound;