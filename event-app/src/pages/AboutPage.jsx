import { useSelector } from "react-redux";

const AboutPage = () => {
   const event = useSelector((state) => state.calendar);

   console.log(event);
   return (
      <div>
         <h1>AboutPage</h1>
         {Object.keys(event).map((day) => (
            <div>
               <span>{day}</span>
               <div>
                  {event[day].map((e, index) => (
                     <span>
                        {index + 1}
                        {e}
                     </span>
                  ))}
               </div>
            </div>
         ))}
      </div>
   );
};
export default AboutPage;
