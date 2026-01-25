import { useState } from "react";

const CreateBlog = () => {
    return (
        <div className="hero">
            <div className="max-w-[1280px] w-full flex flex-col gap-10 items-center justify-center">
                <h1 className="pageTitle">Create your blog here</h1>
                <form>
                    <div className="row">
                        <label htmlFor="">Title:</label>
                        <input type="text" required />
                    </div>
                    <div className="row">
                        <label htmlFor="">Content:</label>
                        <textarea required></textarea>
                    </div>
                    <div>
                        <label htmlFor="">Author Name:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Category:</label>
                        <select>
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
                    <div>
                        <label htmlFor="">Upload Image</label>
                        <input type="file" />
                    </div>
                    <button type="submit">Upload</button>
                </form>
            </div>
        </div>
    );
};

export default CreateBlog;
