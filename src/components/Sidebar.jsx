// layouts/Sidebar.jsx
import { AiOutlinePlus } from "react-icons/ai";  // Tambahkan import di sini
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import SidebarMenu from "./SidebarMenu";

export default function Sidebar() {
    return (
        <div id="sidebar" className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
            {/* Logo */}
            <div id="sidebar-logo" className="flex flex-col">
                <span className="font-poppins-extrabold text-[48px] text-gray-900">Sedap <b className="text-hijau">.</b></span>
                <span className="font-semibold text-gray-400">Modern Admin Dashboard</span>
            </div>

            {/* List Menu */}
            <SidebarMenu />  {/* Menyertakan SidebarMenu */}

            {/* Footer */}
            <div id="sidebar-footer" className="mt-auto">
                <div id="footer-card" className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center">
                    <div id="footer-text" className="text-white text-sm">
                        <span className="flex-1 p-2">Please organize your menus through button below!</span>
                        <div id="add-menu-button" className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2">
                            <span className="font-bold text-gray-400">
                                <AiOutlinePlus className="mr-4 text-x" /> <span>Add Menus</span>
                            </span>
                        </div>
                    </div>
                    <img id="footer-avatar" src="https://avatar.iran.liara.run/public/28" className="w-20 rounded-full"/>
                </div>
                <span className="font-bold text-gray-400">Sedap Restaurant Admin Dashboard</span>
                <p className="font-light text-gray-400">&copy; 2025 All Right Reserved</p>
            </div>
        </div>
    );
}

