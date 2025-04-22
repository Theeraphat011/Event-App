import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
   return (
      <div className="container mx-auto max-w-[1490px] h-screen w-full px-20 py-10">
         <div className="flex gap-11 items-center justify-between h-full overflow-hidden rounded-4xl px-8 py-5 shadow-[0_1px_20px_rgba(0,0,0,0.1)]">
            <div className="w-1/3">
               <Sidebar />
            </div>
            <div className="w-full">
               <Outlet />
            </div>
         </div>
      </div>
   );
};
export default MainLayout;
