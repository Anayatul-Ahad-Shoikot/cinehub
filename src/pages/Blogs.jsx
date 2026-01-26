import { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";

const Blogs = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/blogs")
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
                setIsLoaded(true);
            })
            .catch((e) => {
                setError(e.message);
                setIsLoaded(true);
            });
    }, []);

    if (error) {
        return (
            <div className="hero">
                <div className="max-w-[1280px] h-full w-full flex flex-col gap-4 justify-center items-center">
                    <p className="text-red-500 text-xl">
                        Something went wrong!
                    </p>
                    <p className="text-gray-400">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    if (!isLoaded) {
        return (
            <div className="hero">
                <div className="max-w-[1280px] h-full w-full flex flex-col gap-3 justify-center items-center">
                    <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                    <p className="text-gray-400">Loading ...</p>
                </div>
            </div>
        );
    }

    // Empty state
    if (!blogs || blogs.length === 0) {
        return (
            <div className="hero">
                <div className="max-w-[1280px] h-full w-full flex flex-col gap-3 justify-center items-center">
                    <p className="text-gray-400 text-xl">No blogs found.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-[1280px] px-10">
            <h1 className="pageTitle py-5 text-left w-full">Blogs</h1>
            <div className=" pt-5 flex justify-end w-full">
                <Link to="/blogs/create" className="btn1">Create Blog</Link>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 w-full mt-10">
                {blogs &&
                    blogs.map((item) => (
                        <BlogCard
                            key={item.id}
                            image={item.image}
                            category={item.category}
                            title={item.title}
                            content={item.content}
                            author={item.author}
                            date={item.date}
                            likes={item.likes}
                            comments={item.comments.length}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Blogs;
