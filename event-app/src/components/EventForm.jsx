import { useState } from "react";

const EventForm = ({ onAdd = () => {} }) => {
   const [formData, setformData] = useState({
      name: "",
      description: "",
      time: "",
      date: "",
   });

   const handleChang = (e) => {
      setformData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      onAdd(formData);

      setformData({
         name: "",
         description: "",
         time: "",
         date: "",
      });
   };

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               name="name"
               placeholder="key"
               value={formData.name}
               onChange={handleChang}
               className="border p-2"
            />
            <input
               type="text"
               name="description"
               placeholder="key"
               value={formData.description}
               onChange={handleChang}
               className="border p-2"
            />
            <input
               type="time"
               name="time"
               placeholder="key"
               value={formData.time}
               onChange={handleChang}
               className="border p-2"
            />
            <input
               type="date"
               name="date"
               placeholder="key"
               value={formData.date}
               onChange={handleChang}
               className="border p-2"
            />
            <button type="submit">Submit</button>
         </form>
      </div>
   );
};
export default EventForm;
