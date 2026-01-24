import { FaHeartCirclePlus } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";

const BlogCard = (props) => {

    const { title, content, author, category, date, image, likes, comments } = props;
    
    return (
        <div className="flex flex-col w-full">
            <div className="flex relative w-full h-[150px]">
                <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover"
                />
                <div className="absolute left-0 bottom-0 bg-red-500 px-3 py-1 text-white font-semibold">
                    {category}
                </div>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start p-3">
                <div>
                    <h1 className="text-2xl font-semibold">
                        {title}
                    </h1>
                    <p className="text-sm text-black/55">
                        {content}
                    </p>
                </div>
                <div className="flex justify-between items-center gap-3 w-full">
                    <div className="flex flex-col justify-start items-start">
                        <h2 className="text-sm text-black/55 font-semibold">
                            {author}
                        </h2>
                        <p className="text-xs leading-3.5 text-black/55">
                            {date}
                        </p>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <div className="flex gap-1 items-center">
                            <FaHeartCirclePlus color="silver" size={18} />
                            <p className="text-xs leading-3.5 text-black/55">
                                {likes}
                            </p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <MdMessage color="silver" size={18} />
                            <p className="text-xs leading-3.5 text-black/55">{comments}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
