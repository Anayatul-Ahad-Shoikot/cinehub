import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("Selecte Category");

    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    function formSubmit(e) {
        setIsSubmitting(true);

        e.preventDefault();
        const data = {
            title,
            content,
            author,
            image,
            category,
            rating: 0.0,
            likes: 0,
            comments: {},
        };

        fetch("http://localhost:5000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }).then(() => {
            setIsSubmitting(false);
            navigate("/blogs");
        });
    }

    return (
        <div className="hero">
            <div className="max-w-[1280px] w-full flex flex-col gap-10 items-center justify-center">
                <h1 className="pageTitle">Create your blog here</h1>
                <form
                    className="flex flex-col gap-6 w-full max-w-[650px] mt-10"
                    onSubmit={formSubmit}>
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor=""
                            className="text-md text-gray-400 tracking-tight font-medium text-red-500">
                            Title:
                        </label>
                        <input
                            className="p-3 border-1 border-gray-300 rounded-sm focus:outline-0 text-gray-400"
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor=""
                            className="text-md text-gray-400 tracking-tight font-medium text-red-500">
                            Content:
                        </label>
                        <textarea
                            className="p-3 border-1 border-gray-300 rounded-sm focus:outline-0 text-gray-400"
                            required
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label
                            className="text-md text-gray-400 tracking-tight font-medium text-red-500"
                            htmlFor="">
                            Author Name:
                        </label>
                        <input
                            className="p-3 border-1 border-gray-300 rounded-sm focus:outline-0 text-gray-400"
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="flex flex-col gap-1 w-full">
                            <label
                                className="text-md text-gray-400 tracking-tight font-medium text-red-500"
                                htmlFor="">
                                Upload Image
                            </label>
                            <input
                                className="p-3 border-1 border-gray-300 rounded-sm focus:outline-0 text-gray-400"
                                type="file"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label
                                className="text-md text-gray-400 tracking-tight font-medium text-red-500"
                                htmlFor="">
                                Category:
                            </label>
                            <select
                                className="p-3 border-1 border-gray-300 rounded-sm focus:outline-0 text-gray-400"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}>
                                <option value={null} selected>
                                    Selecte Category
                                </option>
                                <option value="Web Development">
                                    Web Development
                                </option>
                                <option value="Framework">Framework</option>
                                <option value="Performance">Performance</option>
                                <option value="Language">Language</option>
                                <option value="API">API</option>
                            </select>
                        </div>
                    </div>
                    <button className="btn1" type="submit">
                        {isSubmitting ? "Uploading blog..." : "Upload"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateBlog;
