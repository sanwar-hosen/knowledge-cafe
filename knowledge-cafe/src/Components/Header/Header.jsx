
const Header = () => {
    return (
        <>
            <div className="flex justify-between items-center px-2">
                <h1 className="text-4xl text-black font-bold text-center px-8 py-6 ">
                    Knowledge Cafe
                </h1>
                <img src="./images/user.png" alt="" className="w-auto h-12 rounded-full hover:shadow-xl" />
            </div>
            <hr className="pb-4" />
        </>
    ); 
};

export default Header;