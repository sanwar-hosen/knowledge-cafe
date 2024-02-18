import PropTypes from "prop-types";

const BookmarkTitle = ({ Bookmark }) => {
    const { title } = Bookmark;
    return (
    <div className="bg-blue-100 p-2 rounded">
        {title}
    </div>
    )
};

BookmarkTitle.propTypes = {
    Bookmark: PropTypes.object,
};

export default BookmarkTitle;
