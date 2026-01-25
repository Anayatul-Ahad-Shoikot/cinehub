import { Link } from "react-router-dom";
import { RiMenu5Line } from "react-icons/ri";

const Navbar = () => {
    return (
        <div className="bg-gray-100 w-full flex justify-center px-8 h-[80px]">
            <nav className="flex justify-between items-center max-w-[1280px] w-full">
                <div>
                    <h1 className="font-bold text-3xl font-mono text-red-500">
                        LOGO
                    </h1>
                </div>
                <div className="hidden sm:flex gap-8 items-center justify-center">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/blogs">Blogs</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                </div>
                <div className="sm:hidden">
                    <RiMenu5Line color="red" size={24} />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
