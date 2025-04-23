import { Link } from "react-router";
import { Eraser } from 'lucide-react';

const EventList = ({ payload, onDelete = () => {} }) => {
   return (
      <div className="bg-white">
         <div className="grid grid-cols-3 text-center bg-gradient-to-r from-orange-500 to-orange-400 py-2 rounded-md text-white font-semibold">
            <span>Num</span>
            <span>Name</span>
            <span>Action</span>
         </div>
         {payload.length > 0 ? (
            payload.map((list, index) => (
               <div 
                  key={index} 
                  className="grid grid-cols-3 text-center items-center py-3 border-b border-orange-500 hover:bg-orange-50 transition-all duration-300"
               >
                  <Link 
                     to={`/about/${index}`} 
                     className="text-orange-600 font-medium hover:text-orange-800 transition-colors"
                  >
                     {index + 1}
                  </Link>
                  <Link 
                     to={`/about/${index}`} 
                     className="hover:text-orange-600 transition-colors"
                  >
                     <span className="font-medium">{list.name}</span>
                  </Link>
                  <div>
                     <button
                        onClick={() => onDelete(index)}
                        className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-sm px-3 py-1 rounded-md transition-all duration-300  ml-2 cursor-pointer"
                     >
                        <Eraser size={17}/>
                        <span>Remove</span>
                     </button>
                  </div>
               </div>
            ))
         ) : (
            <div className="text-center py-8 text-gray-500">
               No events available
            </div>
         )}
      </div>
   );
};
export default EventList;
