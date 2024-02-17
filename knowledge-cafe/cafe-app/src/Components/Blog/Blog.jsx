import { HiOutlineBookmark } from "react-icons/hi";
import PropTypes from "prop-types";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {
        id,
        title,
        author_name,
        author_pic,
        blog_pic,
        reading_time,
        release_date,
        hashtag,
    } = blog;
    return (
        <>
            <div className="flex flex-col px-8 my-4">
                {/* blog picture */}
                <img
                    className=" h-[28rem] object-cover rounded-xl border border-gray-900"
                    src={blog_pic}
                    alt={title}
                />
                {/* author name date reading time and author pic section */}
                <div className="my-8 flex w-full items-center">
                    {/* pic name date section */}
                    <div className="flex w-1/2 items-center gap-x-4">
                        <div className="">
                            {/* author picture and names */}
                            <img
                                src={author_pic}
                                alt={author_name}
                                className="rounded-full w-[3.5rem] h-[3.5rem] border border-gray-600"
                            />
                        </div>
                        <div className="">
                            <h2 className="font-bold text-xl">{author_name}</h2>
                            <p className=" text-sm">{release_date}</p>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="flex justify-end items-center text-base space-x-1">
                            <p className="">{reading_time} min read</p>
                            <button
                                onClick={() => handleAddToBookmark(blog)}
                                className="text-2xl text-gray-700 btn btn-link btn-square border-0 btn-xs"
                            >
                                <HiOutlineBookmark />
                            </button>
                        </div>
                    </div>
                </div>
                {/* blog title */}
                <h1 className="text-3xl py-4 pt-0 font-bold">{title}</h1>
                {/* hashtags */}
                <div className="pb-4">
                    <div className="text-sm text-gray-500 flex gap-x-4">
                        {hashtag.map((tag, index) => (
                            <p key={index}> {tag} </p>
                        ))}
                    </div>
                </div>
                <a onClick={()=> handleMarkAsRead(id, reading_time)} className="underline text-left pb-4 text-violet-600 font-bold hover:cursor-pointer">Mark as Read</a>
                <hr />
            </div>
        </>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func,

};
export default Blog;
