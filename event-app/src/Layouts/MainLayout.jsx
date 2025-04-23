import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
   return (
      <div className="container mx-auto max-w-[1490px] h-screen w-full px-20 py-10">
         <div className="flex gap-8 items-start h-full overflow-hidden rounded-4xl px-6 py-5 shadow-[0_1px_20px_rgba(0,0,0,0.1)]">
            <div className="w-1/4 h-full">
               <Sidebar />
            </div>
            <div className="w-3/4 h-full">
               <Outlet />
            </div>
         </div>
      </div>
   );
};
export default MainLayout;
