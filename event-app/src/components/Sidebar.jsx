import { useEffect, useState } from "react";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import { enUS } from "date-fns/locale";
import Navbar from "./Navbar";
import { Menu } from "lucide-react";

const Sidebar = () => {
   const [currentDate, setCurrentDate] = useState({
      day: "",
      month: "",
      year: "",
   });

   useEffect(() => {
      const date = new Date();
      const day = format(date, "d", { locale: th });
      const month = format(date, "MMMM", { locale: enUS });
      const year = format(date, "yyyy", { locale: enUS });

      setCurrentDate({
         day,
         month,
         year,
      });
   }, []);
   console.log(currentDate);
   return (
      <div>
         <header className="mb-6">
            <Menu size={30} />
            <div className="flex flex-col items-center">
               <time className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent text-9xl font-extrabold text-center">
                  {currentDate.day}
               </time>
               <div className="flex gap-3 text-3xl font-bold text-gray-800">
                  <time>{currentDate.month}</time>
                  <time>{currentDate.year}</time>
               </div>
            </div>
         </header>
         <Navbar />
      </div>
   );
};
export default Sidebar;
