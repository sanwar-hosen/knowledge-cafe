import { useState } from "react";
import Blogs from "../Blogs/Blogs";
import Bookmark from "../Bookmark/Bookmark";
import Header from "../Header/Header";
import ReadingTime from "../ReadingTime/ReadingTime";

const Home = () => {
    const [bookmarks, setbookmarks] =useState([]);
    const [readingTime, setReadingTime] = useState(0);

    const handleAddToBookmark = (blog) =>{
        const newBookmarks = [...bookmarks, blog]
        setbookmarks(newBookmarks);
    }
    const handleMarkAsRead = (id, time) =>{
        const newTime = readingTime + time;
        setReadingTime(newTime)
        console.log('marked read', time, '& Removed bookmark id:', id)
        const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
        setbookmarks(remainingBookmarks)
    }
    return (
        <>
            <div className="mx-1/20 font-default">
                <Header></Header>
                <div className="md:grid grid-cols-4 flex flex-col">
                    <div className="col-span-3">
                        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
                    </div>
                    <div className="col-span-1">
                        <ReadingTime readingTime={readingTime}></ReadingTime>
                        <Bookmark bookmarks={bookmarks}></Bookmark>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
