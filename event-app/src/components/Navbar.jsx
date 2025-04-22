import { NavLink } from "react-router-dom";
import {
   CalendarClock,
   Mail,
   NotebookPen,
   FileText,
   Wand,
   Settings,
} from "lucide-react";

const Navbar = () => {
   return (
      <div className="flex flex-col justify-between">
         <ul className="grid gap-2 mb-10">
            <NavLink
               to={"/"}
               className={({ isActive }) =>
                  isActive ? "list-sidebar-active" : "list-sidebar"
               }
            >
               <CalendarClock />
               Dashboard
            </NavLink>

            <NavLink
               to={"/calendar"}
               className={({ isActive }) =>
                  isActive ? "list-sidebar-active" : "list-sidebar"
               }
            >
               <Mail />
               Event
            </NavLink>

            <NavLink
               to={"/about"}
               className={({ isActive }) =>
                  isActive ? "list-sidebar-active" : "list-sidebar"
               }
            >
               <NotebookPen />
               Note
            </NavLink>

            <NavLink
               to={"/Document"}
               className={({ isActive }) =>
                  isActive ? "list-sidebar-active" : "list-sidebar"
               }
            >
               <FileText />
               Document
            </NavLink>

            <NavLink
               to={"/Trash"}
               className={({ isActive }) =>
                  isActive ? "list-sidebar-active" : "list-sidebar"
               }
            >
               <Wand />
               Trash
            </NavLink>
         </ul>

         <NavLink
            to={"/Setting"}
            className={({ isActive }) =>
               isActive ? "list-sidebar-active" : "list-sidebar"
            }
         >
            <Settings />
            Setting
         </NavLink>
      </div>
   );
};
export default Navbar;
