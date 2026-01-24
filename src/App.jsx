import { useState, useEffect } from "react";
import BlogCard from "./components/BlogCard";

const App = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/blogs")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-360 w-full m-auto mt-10">
          {blogs && blogs.map((item) => (
            <BlogCard key={item.id} image={item.image} category={item.category} title={item.title} content={item.content} author={item.author} date={item.date} likes={item.likes} comments={item.comments.length} />
          ) )}
        </div>
    );
};

export default App;
