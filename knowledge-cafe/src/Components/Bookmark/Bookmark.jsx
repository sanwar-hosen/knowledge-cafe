import PropTypes from "prop-types";
import BookmarkTitle from "../BookmarkTitle/BookmarkTitle";

const Bookmark = ({bookmarks}) => {
    return (
        <div className="mt-3 bg-gray-100 p-4 rounded-lg">
            <h1 className="font-bold text-xl">Bookmarked Blogs: {bookmarks.length}</h1>
            <div className="space-y-3 mt-3 text-[15px] font-semibold">
            {
                bookmarks.map((bookmark, idx)=> <BookmarkTitle key={idx} Bookmark={bookmark} ></BookmarkTitle>)
            }
            </div>
        </div>
    );
};

Bookmark.propTypes={
    bookmarks:PropTypes.array
}
export default Bookmark;
