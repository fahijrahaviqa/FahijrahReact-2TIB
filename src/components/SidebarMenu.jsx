import { FiUser } from "react-icons/fi"; 
import { HiOutlineUserGroup } from "react-icons/hi"; 
import { GiTerror } from "react-icons/gi";
import { BiError } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

export default function SidebarMenu() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${
          isActive
            ? "text-hijau bg-green-200 font-extrabold"
            : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`;
  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li>
          <NavLink id="menu-1" to="/" className={menuClass}>
            <AiFillHome className="mr-4 text-xl" /> <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-2" to="/orders" className={menuClass}>
            <AiOutlineUnorderedList className="mr-4 text-xl" />{" "}
            <span>Orders</span>
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-3" to="/customers" className={menuClass}>
            <HiOutlineUserGroup  className="mr-4 text-xl" /> <span>Customers</span>
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-4" to="/users" className={menuClass}>
            <FiUser  className="mr-4 text-xl" /> <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-5" to="/400" className={menuClass}>
            <BiError className="mr-4 text-xl" /> <span>NotFound400</span>
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-6" to="/401" className={menuClass}>
            <BiError className="mr-4 text-xl" /> <span>NotFound401</span>
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-7" to="/403" className={menuClass}>
            <BiError className="mr-4 text-xl" /> <span>NotFound403</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
