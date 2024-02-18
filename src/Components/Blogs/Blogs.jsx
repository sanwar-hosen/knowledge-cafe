import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
    // eslint-disable-next-line no-unused-vars
    const [Blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("/blogs.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data))
    }, []);
    return (
        <div className="space-y-4">
            {
                Blogs.map(blog => <Blog key={ blog.id } blog={ blog } handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
};
export default Blogs;
